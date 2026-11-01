const fs = require('fs');
const { JSDOM, VirtualConsole } = require('jsdom');

const failures = [];
const check = (condition, message) => {
  if (condition) console.log(`✔ ${message}`);
  else { console.error(`✘ ${message}`); failures.push(message); }
};
const vc = new VirtualConsole();
vc.on('jsdomError', (error) => {
  if (!/not implemented|could not load/i.test(String(error.message || error))) failures.push(String(error.message || error));
});

const dom = new JSDOM(fs.readFileSync('english-fun-zone.html', 'utf8'), {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  url: 'https://polly.example.test/',
  virtualConsole: vc,
  beforeParse(window) { window.scrollTo = () => {}; }
});

setTimeout(() => {
  try {
    const { window } = dom;
    const settings = { themeMode: 'pastel' };
    window.localStorage.setItem('pollys_fun_english_settings', JSON.stringify(settings));
    window.eval('APP.render()');
    check(window.document.body.classList.contains('theme-pastel'), 'saved theme is restored when a screen renders');

    window.eval("APP.stage = 's3'; APP.scr = 'home'; APP.render()");
    check(window.document.body.classList.contains('s3') && window.document.body.classList.contains('theme-pastel'), 'grade and appearance theme survive the same render');

    check(window.eval("MEDIA.getEnglishLocaleLabel('en-GB')") === 'English · United Kingdom', 'English locale is labeled as a region, not a gender/accent claim');
    check(window.eval("MEDIA.getEnglishLocaleLabel('en-US')") === 'English · United States', 'US English locale label is available');
    check(window.eval("MEDIA.getEnglishLocaleLabel('en')") === 'English · EN', 'unspecified English region remains explicitly unverified');

    check(window.document.querySelector('.stage-card.songs'), 'songs route remains available after theme changes');
    window.eval('APP.showSettingsModal()');
    check(!window.document.querySelector('#set-reading-voice') && !window.document.querySelector('#set-test-voice-btn'), 'settings no longer offers a device voice picker or misleading reading voice test');
    check(window.document.querySelector('.reading-voice-settings')?.textContent.includes('built-in speech engine on this device'), 'settings identify the free built-in read-aloud engine');
    check(window.document.querySelector('#set-test-tts-btn'), 'settings provide a user-triggered read-aloud test');
    let demoRate = 0;
    window.eval('window.__originalMediaTts = MEDIA.tts; MEDIA.tts = (text, rate) => { window.__ttsDemo = { text, rate }; }');
    window.document.querySelector('#set-voice-speed').value = '1.2';
    window.document.querySelector('#set-test-tts-btn').click();
    demoRate = window.__ttsDemo?.rate || 0;
    check(demoRate === 1.08, 'read-aloud test uses the chosen speech speed');
    window.eval('MEDIA.tts = window.__originalMediaTts');
    check(window.document.querySelector('#set-choose-voice-btn'), 'Higgsfield sample chooser remains available');
    window.document.querySelector('#set-close-top')?.click();
    window.eval('APP.showVoices()');
    check(window.document.querySelector('#hf-voice-select') && window.document.querySelector('#hf-voice-preview'), 'Higgsfield recordings remain available as replayable previews');
    check(window.document.querySelector('.hf-voice-note')?.textContent.includes('cannot read lesson'), 'sample modal clarifies that previews do not read lesson text');
    window.document.querySelector('#vmclose')?.click();
    const savedPrefs = JSON.parse(window.localStorage.getItem('pollys_fun_english_settings') || '{}');
    window.localStorage.setItem('pollys_fun_english_settings', JSON.stringify({ ...savedPrefs, voiceSpeed: 1.2 }));
    window.eval("SettingsManager.saveSettings({ ...SettingsManager.getSettings(), voiceSpeed: 1.2 })");
    let sharedTtsRate = 0;
    window.eval('MEDIA.tts = (text, rate) => { window.__sharedTtsRate = rate; }');
    window.eval("MEDIA.speak('shared rate check', 0.9)");
    sharedTtsRate = window.__sharedTtsRate || 0;
    check(Math.abs(sharedTtsRate - 1.08) < 0.001, 'saved speech speed is applied by the shared TTS path');
    const policy = JSON.parse(fs.readFileSync('vercel.json', 'utf8')).headers
      .find((entry) => entry.source === '/(.*)').headers
      .find((entry) => entry.key === 'Permissions-Policy').value;
    check(policy.includes('microphone=(self)') && policy.includes('camera=()'), 'speaking missions may request microphone access while camera stays disabled');
    const csp = JSON.parse(fs.readFileSync('vercel.json', 'utf8')).headers
      .find((entry) => entry.source === '/(.*)').headers
      .find((entry) => entry.key === 'Content-Security-Policy').value;
    check(csp.includes('connect-src') && csp.includes('https://naqzmcllhkdzpwpunfkx.supabase.co'), 'CSP permits account requests only to Polly’s Supabase project');
  } catch (error) {
    failures.push(error.stack || error.message);
  } finally {
    dom.window.close();
    if (failures.length) {
      console.error(`Theme and voice checks failed: ${failures.length}`);
      process.exit(1);
    }
    console.log('★★★ THEME & VOICE LOCALE CHECKS PASSED ★★★');
  }
}, 250);
