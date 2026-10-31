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
