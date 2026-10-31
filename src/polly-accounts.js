/* Minimal same-origin Supabase Auth/PostgREST client. No service-role key is used in the browser. */
const PollyAccounts = (() => {
  const config = typeof POLLY_SUPABASE_CONFIG === 'undefined' ? null : POLLY_SUPABASE_CONFIG;
  const storageKey = 'polly.auth.session.v1';
  let session = null;
  let profile = null;

  const safeStorage = {
    read() { try { return JSON.parse(sessionStorage.getItem(storageKey) || 'null'); } catch (_) { return null; } },
    write(value) { try { value ? sessionStorage.setItem(storageKey, JSON.stringify(value)) : sessionStorage.removeItem(storageKey); } catch (_) {} }
  };
  session = safeStorage.read();

  async function request(path, { method = 'GET', body, headers = {} } = {}) {
    if (!config) throw new Error('Account service is not configured.');
    const auth = session && session.access_token ? session.access_token : config.publishableKey;
    const response = await fetch(config.url + path, {
      method,
      headers: {
        apikey: config.publishableKey,
        Authorization: 'Bearer ' + auth,
        'Content-Type': 'application/json',
        ...headers
      },
      body: body === undefined ? undefined : JSON.stringify(body)
    });
    const text = await response.text();
    let payload = null;
    try { payload = text ? JSON.parse(text) : null; } catch (_) { payload = { message: text }; }
    if (!response.ok) {
      const message = payload && (payload.msg || payload.message || payload.error_description || payload.error);
      throw new Error(message || 'The account request could not be completed.');
    }
    return payload;
  }

  async function refreshIfNeeded() {
    if (!session || !session.refresh_token) return;
    if (Number(session.expires_at || 0) - Math.floor(Date.now() / 1000) > 60) return;
    const next = await request('/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: { refresh_token: session.refresh_token } });
    session = { ...next, expires_at: next.expires_at || Math.floor(Date.now() / 1000) + Number(next.expires_in || 3600) };
    safeStorage.write(session);
  }

  async function signIn(email, password) {
    const next = await request('/auth/v1/token?grant_type=password', { method: 'POST', body: { email: email.trim(), password } });
    session = { ...next, expires_at: next.expires_at || Math.floor(Date.now() / 1000) + Number(next.expires_in || 3600) };
    safeStorage.write(session);
    await loadProfile();
    return profile;
  }

  async function signUp(fields) {
    const result = await request('/auth/v1/signup', {
      method: 'POST',
      body: {
        email: fields.email.trim(),
        password: fields.password,
        data: {
          display_name: fields.displayName.trim(),
          requested_role: fields.role,
          school_name: fields.school.trim(),
          grade: fields.grade,
          section: fields.section.trim()
        }
      }
    });
    if (result && result.access_token) {
      session = { ...result, expires_at: result.expires_at || Math.floor(Date.now() / 1000) + Number(result.expires_in || 3600) };
      safeStorage.write(session);
      await loadProfile();
    }
    return result;
  }

  async function loadProfile() {
    if (!session || !session.user || !session.user.id) return null;
    await refreshIfNeeded();
    const rows = await request('/rest/v1/profiles?select=id,email,display_name,role,school_name,grade,section,created_at&id=eq.' + encodeURIComponent(session.user.id));
    profile = Array.isArray(rows) ? rows[0] || null : null;
    return profile;
  }

  async function rest(path, options = {}) {
    if (!session) throw new Error('Sign in to use your account.');
    await refreshIfNeeded();
    return request('/rest/v1/' + path, options);
  }

  async function signOut() {
    try { if (session) await request('/auth/v1/logout', { method: 'POST' }); } catch (_) {}
    session = null;
    profile = null;
    safeStorage.write(null);
  }

  async function recordProgress(event) {
    if (!session || !profile || profile.role !== 'student') return;
    const row = {
      activity_type: event.activity_type,
      activity_id: String(event.activity_id || 'activity').slice(0, 100),
      unit_id: event.unit_id || null,
      grade: profile.grade || null,
      score: Math.max(0, Math.min(100000, Math.round(event.score || 0))),
      max_score: Math.max(0, Math.min(100000, Math.round(event.max_score || 0))),
      earned_stars: Math.max(0, Math.min(5, Math.round(event.earned_stars || 0))),
      duration_seconds: Math.max(0, Math.min(86400, Math.round(event.duration_seconds || 0)))
    };
    return rest('progress_events', { method: 'POST', body: row, headers: { Prefer: 'return=minimal' } });
  }

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }
  function makeOverlay() {
    const old = document.getElementById('polly-account-overlay');
    if (old) old.remove();
    const overlay = document.createElement('div');
    overlay.id = 'polly-account-overlay';
    overlay.className = 'polly-account-overlay';
    overlay.innerHTML = '<section class="polly-account-panel" role="dialog" aria-modal="true" aria-labelledby="polly-account-title"><button class="polly-account-close" type="button" aria-label="Close account panel">×</button><div id="polly-account-content"></div></section>';
    document.body.appendChild(overlay);
    overlay.querySelector('.polly-account-close').onclick = () => overlay.remove();
    overlay.onclick = (event) => { if (event.target === overlay) overlay.remove(); };
    return { overlay, content: overlay.querySelector('#polly-account-content') };
  }

  function showError(container, error) {
    const box = container.querySelector('[data-account-error]');
    if (box) { box.hidden = false; box.textContent = error && error.message || 'Something went wrong. Please try again.'; }
  }

  async function open() {
    const { content } = makeOverlay();
    content.innerHTML = '<div class="polly-account-heading"><span>POLLY LEARNER ACCOUNTS</span><h2 id="polly-account-title">Your learning space</h2><p>Save your progress and keep your class information together.</p></div><div class="account-tabs"><button type="button" data-tab="signin" class="active">Sign in</button><button type="button" data-tab="signup">Create account</button></div><div class="account-form-slot"></div>';
    try {
      if (session) {
        await loadProfile();
        if (profile) return renderDashboard(content);
      }
    } catch (_) { await signOut(); }
    const slot = content.querySelector('.account-form-slot');
    const errorHtml = '<div class="account-error" data-account-error hidden role="alert"></div>';
    const bindSignIn = () => {
      slot.innerHTML = '<form class="account-form" id="polly-signin-form"><label>Email<input name="email" type="email" autocomplete="email" required maxlength="254"></label><label>Password<input name="password" type="password" autocomplete="current-password" required minlength="8"></label>' + errorHtml + '<button class="btn purple" type="submit">Sign in</button><p class="account-note">Use the email address registered to your account.</p></form>';
      slot.querySelector('form').onsubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const button = form.querySelector('[type=submit]');
        button.disabled = true; button.textContent = 'Signing in…';
        try {
          await signIn(form.elements.namedItem('email').value, form.elements.namedItem('password').value);
          if (profile) renderDashboard(content);
          else throw new Error('Your profile is not ready. Please contact the administrator.');
        } catch (error) { showError(form, error); button.disabled = false; button.textContent = 'Sign in'; }
      };
    };
    const bindSignUp = () => {
      slot.innerHTML = '<form class="account-form" id="polly-signup-form"><label>Your name<input name="displayName" autocomplete="name" required minlength="2" maxlength="80"></label><label>Email<input name="email" type="email" autocomplete="email" required maxlength="254"></label><label>Password<input name="password" type="password" autocomplete="new-password" required minlength="8"></label><label>Account type<select name="role"><option value="student">Student</option><option value="teacher">Teacher</option></select></label><label>School<input name="school" autocomplete="organization" required maxlength="120"></label><div class="account-grade-fields"><label>Grade<select name="grade" required><option value="">Choose a grade</option><option value="1">Grade 1</option><option value="2">Grade 2</option><option value="3">Grade 3</option><option value="4">Grade 4</option></select></label><label>Class / section<input name="section" required maxlength="24" placeholder="For example, 2A"></label></div><label class="account-consent"><input name="consent" type="checkbox" required><span>I confirm I have school or guardian permission to create and use this learner account. Student accounts remain pending until the administrator approves them.</span></label>' + errorHtml + '<button class="btn purple" type="submit">Create account</button><p class="account-note">Never enter a password shared with another service. We store progress events, not microphone recordings or transcripts.</p></form>';
      const form = slot.querySelector('form');
      const role = form.querySelector('[name=role]');
      form.onsubmit = async (event) => {
        event.preventDefault();
        const button = form.querySelector('[type=submit]');
        button.disabled = true; button.textContent = 'Creating account…';
        try {
          const result = await signUp({
            displayName: form.elements.namedItem('displayName').value,
            email: form.elements.namedItem('email').value,
            password: form.elements.namedItem('password').value,
            role: role.value,
            school: form.elements.namedItem('school').value,
            grade: Number(form.elements.namedItem('grade').value),
            section: form.elements.namedItem('section').value
          });
          if (profile) renderDashboard(content);
          else {
            slot.innerHTML = '<div class="account-success" role="status"><h3>Check your email</h3><p>If email confirmation is enabled, confirm your address, then sign in. Your account is pending admin approval.</p></div>';
          }
        } catch (error) { showError(form, error); button.disabled = false; button.textContent = 'Create account'; }
      };
      form.querySelector('[name=consent]').required = true;
    };
    const tabs = content.querySelectorAll('[data-tab]');
    const tab = (name) => {
      tabs.forEach((button) => button.classList.toggle('active', button.dataset.tab === name));
      name === 'signup' ? bindSignUp() : bindSignIn();
    };
    tabs.forEach((button) => button.onclick = () => tab(button.dataset.tab));
    bindSignIn();
  }

  async function renderDashboard(container) {
    const p = profile || await loadProfile();
    if (!p) return;
    container.innerHTML = '<div class="polly-account-heading"><span>YOUR POLLY PROFILE</span><h2 id="polly-account-title">' + esc(p.display_name) + '</h2><p>' + esc(p.email) + ' · ' + esc(p.role.replace('_', ' ')) + '</p><p>' + esc(p.school_name || 'School not set') + (p.grade ? ' · Grade ' + esc(p.grade) : '') + (p.section ? ' · ' + esc(p.section) : '') + '</p></div><div class="account-dashboard" aria-live="polite"><div class="account-loading">Loading your saved progress…</div></div><button class="btn white account-signout" type="button">Sign out</button>';
    container.querySelector('.account-signout').onclick = async () => { await signOut(); open(); };
    const dashboard = container.querySelector('.account-dashboard');
    try {
      if (p.role === 'student_pending' || p.role === 'teacher_pending') {
        dashboard.innerHTML = '<section class="account-status-card"><h3>Account awaiting approval</h3><p>Your account is pending. You can explore the activities on this device; online progress starts after the administrator approves your account.</p></section>';
        return;
      }
      if (p.role === 'admin') {
        const rows = await rest('profiles?select=id,email,display_name,role,school_name,grade,section,created_at&order=created_at.desc');
        const adminEvents = await rest('progress_events?select=student_id,activity_type,activity_id,unit_id,score,max_score,earned_stars,completed_at&order=completed_at.desc&limit=200');
        const people = Object.fromEntries(rows.map((row) => [row.id, row]));
        dashboard.innerHTML = '<h3>Administrator · Accounts</h3><div class="account-list">' + rows.map((row) => '<article class="account-person"><div><b>' + esc(row.display_name) + '</b><small>' + esc(row.email) + '</small><small>' + esc(row.role) + ' · ' + esc(row.school_name || 'No school') + (row.grade ? ' · Grade ' + esc(row.grade) : '') + (row.section ? ' · ' + esc(row.section) : '') + '</small></div>' + (row.role.endsWith('_pending') ? '<button type="button" class="btn green account-approve" data-id="' + esc(row.id) + '" data-role="' + esc(row.role) + '">Approve</button>' : '') + '</article>').join('') + '</div><section class="account-class-card"><h3>Latest student progress · ' + adminEvents.length + '</h3><div class="account-list">' + adminEvents.map((row) => '<article class="account-person"><div><b>' + esc(people[row.student_id]?.display_name || 'Student') + ' · ' + esc(people[row.student_id]?.email || '') + '</b><small>' + esc(row.activity_type) + ' · ' + esc(row.activity_id) + (row.unit_id ? ' · ' + esc(row.unit_id) : '') + '</small><small>Score ' + esc(row.score) + '/' + esc(row.max_score) + ' · ' + esc(row.earned_stars) + ' stars · ' + esc(new Date(row.completed_at).toLocaleDateString()) + '</small></div></article>').join('') + '</div></section>';
        dashboard.querySelectorAll('.account-approve').forEach((button) => {
          button.onclick = async () => {
            const isStudent = button.dataset.role === 'student_pending';
            if (isStudent && !window.confirm('Confirm that the school or guardian permission has already been recorded outside Polly, then approve this student?')) return;
            button.disabled = true;
            try {
              await rest('rpc/approve_polly_profile', { method: 'POST', body: { target_profile: button.dataset.id, record_guardian_consent: isStudent } });
              await renderDashboard(container);
            } catch (error) { window.alert(error.message); button.disabled = false; }
          };
        });
        return;
      }
      const events = await rest('progress_events?select=activity_type,activity_id,unit_id,score,max_score,earned_stars,completed_at&order=completed_at.desc&limit=40');
      const badges = await rest('badge_awards?select=awarded_at,badge:badge_catalog(code,title,description,visual_key)&order=awarded_at.desc&limit=100');
      let classBox = '';
      if (p.role === 'teacher') {
        const classes = await rest('classrooms?select=id,grade,section,school_name,invite_code&order=created_at.desc');
        classBox = '<section class="account-class-card"><h3>Your classrooms</h3><form id="account-class-form" class="account-inline-form"><input name="grade" type="number" min="1" max="4" required placeholder="Grade 1–4"><input name="section" maxlength="24" required placeholder="Section"><input name="school" maxlength="120" required placeholder="School"><button class="btn purple" type="submit">Create classroom</button></form><div class="account-list">' + classes.map((c) => '<article class="account-person"><b>' + esc(c.school_name) + ' · Grade ' + esc(c.grade) + ' · ' + esc(c.section) + '</b><span>Join code: <strong>' + esc(c.invite_code) + '</strong></span></article>').join('') + '</div></section>';
        const students = await rest('profiles?select=id,email,display_name,school_name,grade,section,role&role=eq.student&order=display_name.asc');
        classBox += '<section class="account-class-card"><h3>Approved students in your classrooms</h3><div class="account-list">' + students.map((student) => '<article class="account-person"><b>' + esc(student.display_name) + '</b><small>' + esc(student.school_name || '') + ' · Grade ' + esc(student.grade || '') + ' · ' + esc(student.section || '') + '</small><small>' + esc(student.email) + '</small></article>').join('') + '</div></section>';
        const classEvents = await rest('progress_events?select=student_id,activity_type,activity_id,unit_id,score,max_score,earned_stars,completed_at&order=completed_at.desc&limit=200');
        const studentById = Object.fromEntries(students.map((student) => [student.id, student]));
        classBox += '<section class="account-class-card"><h3>Recent class progress</h3><div class="account-list">' + classEvents.map((row) => '<article class="account-person"><div><b>' + esc(studentById[row.student_id]?.display_name || 'Student') + ' · ' + esc(studentById[row.student_id]?.email || '') + '</b><small>' + esc(row.activity_type) + ' · ' + esc(row.activity_id) + (row.unit_id ? ' · ' + esc(row.unit_id) : '') + '</small><small>Score ' + esc(row.score) + '/' + esc(row.max_score) + ' · ' + esc(row.earned_stars) + ' stars · ' + esc(new Date(row.completed_at).toLocaleDateString()) + '</small></div></article>').join('') + '</div></section>';
      }
      if (p.role === 'student') {
        classBox = '<section class="account-class-card"><h3>Join your classroom</h3><form id="account-join-form" class="account-inline-form"><input name="code" required maxlength="10" placeholder="Class join code"><button class="btn purple" type="submit">Join class</button></form></section>';
      }
      const summary = events.reduce((acc, row) => {
        acc.count += 1; acc.stars += Number(row.earned_stars || 0);
        if (row.max_score > 0) { acc.score += Number(row.score); acc.max += Number(row.max_score); }
        return acc;
      }, { count: 0, stars: 0, score: 0, max: 0 });
      dashboard.innerHTML = '<div class="account-stat-grid"><div><b>' + summary.count + '</b><span>Saved activities</span></div><div><b>' + summary.stars + '</b><span>Stars earned</span></div><div><b>' + (summary.max ? Math.round(summary.score / summary.max * 100) + '%' : '—') + '</b><span>Recent accuracy</span></div></div>' + classBox + '<section class="account-class-card"><h3>Recent learning</h3><div class="account-list">' + events.map((row) => '<article class="account-person"><b>' + esc(row.activity_type) + ' · ' + esc(row.activity_id) + '</b><small>' + esc(row.unit_id || '') + ' · ' + esc(row.score) + '/' + esc(row.max_score) + ' · ' + esc(row.earned_stars) + ' stars</small><small>' + esc(new Date(row.completed_at).toLocaleDateString()) + '</small></article>').join('') + '</div></section><section class="account-badges"><h3>Earned badges · ' + badges.length + '</h3><div class="account-badge-grid">' + badges.map((item) => '<article class="account-badge" data-visual="' + esc(item.badge.visual_key) + '"><span class="account-badge-art" aria-hidden="true"></span><b>' + esc(item.badge.title) + '</b></article>').join('') + '</div></section>';
      const classForm = dashboard.querySelector('#account-class-form');
      if (classForm) classForm.onsubmit = async (event) => {
        event.preventDefault();
        const submit = classForm.querySelector('[type=submit]'); submit.disabled = true;
        try {
          await rest('classrooms', { method: 'POST', body: { teacher_id: session.user.id, school_name: classForm.elements.namedItem('school').value, grade: Number(classForm.elements.namedItem('grade').value), section: classForm.elements.namedItem('section').value }, headers: { Prefer: 'return=minimal' } });
          await renderDashboard(container);
        } catch (error) { window.alert(error.message); submit.disabled = false; }
      };
      const joinForm = dashboard.querySelector('#account-join-form');
      if (joinForm) joinForm.onsubmit = async (event) => {
        event.preventDefault();
        const submit = joinForm.querySelector('[type=submit]'); submit.disabled = true;
        try {
          await rest('rpc/join_polly_class', { method: 'POST', body: { invite: joinForm.elements.namedItem('code').value } });
          window.alert('You joined your classroom.'); await renderDashboard(container);
        } catch (error) { window.alert(error.message); submit.disabled = false; }
      };
    } catch (error) {
      dashboard.innerHTML = '<div class="account-error" role="alert">' + esc(error.message) + '</div>';
    }
  }

  return {
    isSignedIn: () => !!session,
    currentProfile: () => profile,
    open,
    recordProgress,
    initialize() { if (session) refreshIfNeeded().catch(() => signOut()); }
  };
})();
if (typeof window !== 'undefined') window.PollyAccounts = PollyAccounts;
if (typeof window !== 'undefined') PollyAccounts.initialize();
