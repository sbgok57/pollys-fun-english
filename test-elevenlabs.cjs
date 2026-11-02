const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createElevenLabsService } = require('./lib/elevenlabs-service.cjs');
const request = (body, origin = 'https://example.test') => new Request('https://example.test/api/elevenlabs', { method: 'POST', headers: { origin, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
test('missing credentials fail clearly without a provider call', async () => {
  const handle = createElevenLabsService({ getKey: () => '', fetchImpl: () => { throw Error('must not call'); } });
  const res = await handle(new Request('https://example.test/api/elevenlabs'));
  assert.equal(res.status, 503); assert.equal((await res.json()).code, 'NOT_CONFIGURED');
});
test('saved voices paginate, deduplicate, sanitize metadata and refresh deletions', async () => {
  let calls = 0;
  const handle = createElevenLabsService({ getKey: () => 'test-secret', fetchImpl: async url => {
    calls++; const u = new URL(url); assert.equal(u.searchParams.get('voice_type'), 'saved');
    if (calls === 1) return Response.json({ voices: [{voice_id:'a',name:'Alice', preview_url:'javascript:alert(1)',samples:['private'],labels:{gender:'female',secret:'hidden'}}], has_more:true,next_page_token:'next' });
    if (calls === 2) { assert.equal(u.searchParams.get('next_page_token'),'next'); return Response.json({voices:[{voice_id:'a',name:'Alice'},{voice_id:'b',name:'Bob'}],has_more:false}); }
    return Response.json({voices:[{voice_id:'b',name:'Bob'}],has_more:false});
  }});
  let res = await handle(new Request('https://example.test/api/elevenlabs'));
  let data = await res.json(); assert.equal(data.voices.length,2); assert.equal(JSON.stringify(data).includes('test-secret'),false); assert.equal(JSON.stringify(data).includes('private'),false);
  res = await handle(new Request('https://example.test/api/elevenlabs?refresh=1')); data = await res.json(); assert.deepEqual(data.voices.map(v=>v.id),['b']);
});
test('provider permission errors do not expose provider bodies or keys', async () => {
  for (const status of [401,402,403,429,500]) {
    const handle = createElevenLabsService({getKey:()=>'test-secret',fetchImpl:async()=>new Response('private-provider-body',{status})});
    const res=await handle(new Request('https://example.test/api/elevenlabs')); assert.ok(res.status>=400); if(status===402) assert.equal(res.status,402);
    const body=await res.text(); assert.ok(!body.includes('test-secret'));assert.ok(!body.includes('private-provider-body'));
  }
});
test('rejects cross-origin synthesis, malformed JSON, invalid text and unsaved voices', async () => {
  let generated = 0;
  const handle=createElevenLabsService({getKey:()=>'test',fetchImpl:async(url,opts)=>{ if(opts.method==='POST')generated++; return Response.json({voices:[{voice_id:'a',name:'Alice'}],has_more:false});}});
  assert.equal((await handle(request({text:'Hello',voiceId:'a'},'https://evil.test'))).status,403);
  assert.equal((await handle(request({text:'',voiceId:'a'}))).status,400);
  assert.equal((await handle(request({text:'Hello',voiceId:'not-saved'}))).status,400);
  const res=await handle(new Request('https://example.test/api/elevenlabs',{method:'POST',body:'{broken'}));assert.equal(res.status,400);assert.equal(generated,0);
});
test('generates the exact saved voice once and caches repeated audio', async () => {
  let generated=0;
  const handle=createElevenLabsService({getKey:()=>'test',fetchImpl:async(url,opts)=>{
    if(opts.method!=='POST')return Response.json({voices:[{voice_id:'a',name:'Alice'}],has_more:false});
    generated++; assert.match(String(url),/text-to-speech\/a\?/); assert.equal(JSON.parse(opts.body).text,'Hello');
    const bytes = new Uint8Array(256).fill(1); bytes.set([0x49,0x44,0x33]); return new Response(bytes,{headers:{'Content-Type':'audio/mpeg'}});
  }});
  for(let i=0;i<2;i++){const res=await handle(request({text:'Hello',voiceId:'a'}));assert.equal(res.status,200);assert.equal((await res.arrayBuffer()).byteLength,256);}
  assert.equal(generated,1);
});
test('broken pagination and network failures never report successful empty sync', async () => {
  for(const fetchImpl of [async()=>Response.json({voices:[],has_more:true}),async()=>{throw new Error('network');}]) {
    const handle=createElevenLabsService({getKey:()=>'test',fetchImpl});const res=await handle(new Request('https://example.test/api/elevenlabs'));assert.equal(res.status,502);assert.equal((await res.json()).ok,false);
  }
});
