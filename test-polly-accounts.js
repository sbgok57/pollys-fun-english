const fs = require('fs');
const { JSDOM, VirtualConsole } = require('jsdom');
const failures = [];
const check = (ok, message) => ok ? console.log(`✔ ${message}`) : (console.error(`✘ ${message}`), failures.push(message));
const vc = new VirtualConsole();
vc.on('jsdomError', e => { if (!/not implemented|could not load/i.test(String(e.message || e))) failures.push(String(e.message || e)); });
const dom = new JSDOM(fs.readFileSync('english-fun-zone.html', 'utf8'), {
  runScripts: 'dangerously', pretendToBeVisual: true, url: 'https://polly.example.test/', virtualConsole: vc,
  beforeParse(window) {
    window.scrollTo = () => {};
    window.fetch = async (url, init = {}) => {
      const path = String(url);
      let payload = {};
      if (path.includes('/auth/v1/signup')) payload = {
        access_token: 'test-access-token', refresh_token: 'test-refresh-token', expires_in: 3600,
        user: { id: 'student-1', email: 'learner@example.test' }
      };
      else if (path.includes('/rest/v1/profiles?')) payload = [{
        id: 'student-1', email: 'learner@example.test', display_name: 'Learner', role: 'student_pending',
        school_name: 'Example School', grade: 2, section: '2A', created_at: new Date().toISOString()
      }];
      return { ok: true, status: 200, text: async () => JSON.stringify(payload) };
    };
  }
});
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  try {
    await delay(350);
    const { window } = dom;
    check(!!window.PollyAccounts, 'account module is included in the built page');
    window.document.querySelector('#account-top-btn')?.click();
    await delay(25);
    check(!!window.document.querySelector('#polly-account-overlay'), 'top-bar account button opens the account dialog');
    window.document.querySelector('[data-tab="signup"]')?.click();
    const form = window.document.querySelector('#polly-signup-form');
    check(!!form, 'create-account form is reachable');
    if (form) {
      const fill = (name, value) => { form.elements.namedItem(name).value = value; };
      fill('displayName', 'Learner'); fill('email', 'learner@example.test'); fill('password', 'secure-test-password');
      fill('role', 'student'); fill('school', 'Example School'); fill('grade', '2'); fill('section', '2A');
      form.elements.namedItem('consent').checked = true;
      form.dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
      await delay(70);
      check(window.document.querySelector('.account-status-card')?.textContent.includes('awaiting approval'), 'new account waits for administrator approval');
      check(!window.document.body.textContent.includes('secure-test-password'), 'password is not exposed in the account dashboard');
    }
  } catch (error) { failures.push(error.stack || error.message); }
  finally {
    dom.window.close();
    if (failures.length) { console.error(`${failures.length} account check(s) failed`); process.exit(1); }
    console.log('★★★ POLLY ACCOUNT UI CHECKS PASSED ★★★');
  }
})();
