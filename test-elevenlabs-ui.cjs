const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { JSDOM } = require('jsdom');
test('library refresh, safe rendering, selection and generation recover correctly', async () => {
  const dom = new JSDOM(fs.readFileSync('voice-library.html','utf8'), {url:'https://example.test/voice-library.html',runScripts:'outside-only'});
  const w=dom.window; w.HTMLMediaElement.prototype.pause=()=>{};w.AbortSignal=AbortSignal;
  w.URL.createObjectURL=()=> 'blob:test';w.URL.revokeObjectURL=()=>{};
  let fail=false, generated=0;
  w.fetch=async(url,opts)=>{
    if(opts?.method==='POST'){generated++;const body=JSON.parse(opts.body);assert.equal(body.voiceId,'saved-a');return new Response(new Blob([new Uint8Array(200)],{type:'audio/mpeg'}));}
    if(fail)return Response.json({ok:false,error:'Try again'},{status:502});
    return Response.json({ok:true,voices:[{id:'saved-a',name:'<img src=x onerror=alert(1)>',labels:{language:'en'},previewUrl:null}],syncedAt:new Date().toISOString()});
  };
  w.eval(fs.readFileSync('voice-library.js','utf8'));
  const tick=()=>new Promise(resolve=>setTimeout(resolve,20));await tick();
  assert.equal(w.document.querySelectorAll('#voice option').length,1);assert.equal(w.document.querySelectorAll('img').length,0);
  w.document.getElementById('choose').click();assert.equal(w.localStorage.getItem('elevenlabs-voice-id'),'saved-a');
  fail=true;w.document.getElementById('refresh').click();await tick();assert.equal(w.document.querySelector('#voice').value,'saved-a');assert.match(w.document.querySelector('#status').textContent,/Önceki liste/);
  fail=false;w.document.getElementById('refresh').click();await tick();
  const input=w.document.getElementById('text');input.value='Hello';input.dispatchEvent(new w.Event('input'));
  w.document.getElementById('generate').click();await tick();assert.equal(generated,1);assert.equal(w.document.getElementById('download').hidden,false);
  w.document.getElementById('clear').click();assert.equal(w.localStorage.getItem('elevenlabs-voice-id'),null);
  dom.window.close();
});
