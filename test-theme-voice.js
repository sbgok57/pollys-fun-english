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
    Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: {
      getVoices: () => [
        { name: 'English Voice One', lang: 'en-US', default: true, localService: true },
        { name: 'English Voice Two', lang: 'en-GB', default: false, localService: true }
      ],
      addEventListener() {}, removeEventListener() {}, cancel() {}, speak() {}, paused: false
    } });
    window.eval('APP.showSettingsModal()');
    check(window.document.querySelector('#set-reading-voice') && !window.document.querySelector('#set-test-voice-btn'), 'settings offer available device English voices and a read-aloud sample');
    check(window.document.querySelector('.reading-voice-settings')?.textContent.includes('installed on this device'), 'settings accurately identify device-provided voices');
    check(window.document.querySelectorAll('#set-reading-sample option').length >= 5, 'reading sample picker offers multiple classroom contexts');
    const voiceSelect = window.document.querySelector('#set-reading-voice');
    check(voiceSelect && voiceSelect.options.length === 2, 'device English voices are listed without invented gender or quality claims');
    voiceSelect.value = voiceSelect.options[0].value;
    voiceSelect.dispatchEvent(new window.Event('change', { bubbles: true }));
    check(window.eval('MEDIA.voice.name') === 'English Voice Two', 'chosen device voice becomes the shared speech voice');
    check(window.localStorage.getItem('polly_voice') !== null, 'chosen device voice is saved for later visits');
    check(window.document.querySelector('#set-test-tts-btn'), 'settings provide a user-triggered read-aloud test');
    let demoRate = 0;
    window.eval('window.__originalMediaTts = MEDIA.tts; MEDIA.tts = (text, rate) => { window.__ttsDemo = { text, rate }; }');
    window.document.querySelector('#set-voice-speed').value = '1.2';
    window.document.querySelector('#set-reading-sample').value = 'story';
    window.document.querySelector('#set-test-tts-btn').click();
    demoRate = window.__ttsDemo?.rate || 0;
    check(demoRate === 1.08, 'read-aloud test uses the chosen speech speed');
    check(window.__ttsDemo?.text.includes('Milo found a little red kite'), 'sample button reads the selected sample passage');
    window.eval('MEDIA.tts = window.__originalMediaTts');
    check(!window.document.querySelector('#set-choose-voice-btn') && !window.document.querySelector('#choose-device-voice'), 'settings do not show a separate preview-only voice chooser');
    window.document.querySelector('#set-close-top')?.click();
    check(typeof window.eval('APP.showVoices') === 'undefined', 'preview-only Higgsfield modal code is removed');
    check(!window.document.body.textContent.includes('Listen to Higgsfield samples'), 'preview-only Higgsfield copy is absent from rendered settings');
    check(!fs.readFileSync('english-fun-zone.html', 'utf8').includes('HIGGSFIELD_VOICE_PREVIEWS'), 'preview recordings are excluded from the built site');
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

    window.eval("APP.showVoicePracticeModal('At school')");
    const missionSteps = [...window.document.querySelectorAll('#polly-talk-modal [data-talk-step]')];
    check(missionSteps.length === 3, 'speaking mission exposes three keyboard-accessible practice steps');
    missionSteps[1]?.click();
    check(window.document.querySelector('#mission-step-title')?.textContent === 'Build a sentence', 'speaking mission can switch from words to sentence practice');
    window.document.querySelector('#polly-talk-input').value = 'I need a pencil, please.';
    window.document.querySelector('#polly-talk-send').click();
    check(window.document.querySelector('#mission-step-title')?.textContent === 'Your turn in the conversation', 'a learner response advances to the dialogue step');
    check(!window.document.querySelector('#polly-talk-messages').textContent.includes('Great pronunciation'), 'typed practice never claims that pronunciation was assessed');
    window.document.querySelector('#polly-talk-modal .polly-talk-close')?.click();
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
