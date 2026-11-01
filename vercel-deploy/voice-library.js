(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  let voices = [], busy = false, generation = false, resultUrl = '', currentPreview = '';
  const selected = () => voices.find(v => v.id === $('voice').value);
  const saved = () => { try { return localStorage.getItem('elevenlabs-voice-id') || ''; } catch { return ''; } };
  function status(message, error = false) { $('status').textContent = message; $('status').dataset.error = String(error); }
  function controls() {
    $('refresh').disabled = busy || generation;
    $('generate').disabled = busy || generation || !selected() || !$('text').value.trim();
    $('choose').disabled = busy || !selected(); $('copy').disabled = busy || !selected();
    $('voice').disabled = busy || !voices.length || generation;
    $('clear').disabled = generation;
  }
  function showSelection() { const v = voices.find(v => v.id === saved()); $('selection').textContent = v ? `Bu sitede seçili ses: ${v.name}` : saved() ? 'Kaydedilen ses artık bu listede yok. Yeni bir ses seçin veya varsayılana dönün.' : 'Varsayılan site sesi kullanılıyor.'; }
  function details() {
    const v = selected();
    $('voice-details').textContent = v ? `${v.name}\n${Object.values(v.labels || {}).join(' · ')}\nSes kimliği: ${v.id}` : '';
    const url = v?.previewUrl || '';
    if (url !== currentPreview) { $('preview').pause(); $('preview').removeAttribute('src'); if (url) $('preview').src = url; currentPreview = url; }
    $('preview').hidden = !url;
    controls();
  }
  function render(preferred = $('voice').value || saved()) {
    const q = $('search').value.trim().toLocaleLowerCase();
    const filtered = voices.filter(v => [v.name,...Object.values(v.labels || {})].join(' ').toLocaleLowerCase().includes(q));
    $('voice').replaceChildren();
    if (!filtered.length) $('voice').append(new Option(voices.length ? 'Aramanıza uygun ses yok' : 'My Voices listenizde kayıtlı ses yok', ''));
    for (const v of filtered) $('voice').append(new Option(v.name, v.id));
    if (filtered.some(v => v.id === preferred)) $('voice').value = preferred;
    details(); showSelection();
  }
  async function sync(refresh) {
    if (busy || generation) return;
    busy = true; controls(); status('Sesler eşitleniyor…');
    try {
      const response = await fetch('/api/elevenlabs' + (refresh ? '?refresh=1' : ''), { cache: 'no-store', credentials: 'same-origin', signal: AbortSignal.timeout(30000) });
      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.ok || !Array.isArray(data.voices)) throw new Error(data?.error || 'Ses listesi alınamadı. Tekrar deneyin.');
      voices = data.voices; render();
      $('synced').textContent = `Son eşitleme: ${new Date(data.syncedAt).toLocaleString('tr-TR')}`;
      status(voices.length ? `${voices.length} kayıtlı ses eşitlendi.` : 'ElevenLabs hesabınızda My Voices bölümüne ses kaydedin, ardından yeniden eşitleyin.');
    } catch (e) { status((e.message || 'Bağlantı kurulamadı.') + (voices.length ? ' Önceki liste gösteriliyor; güncel olmayabilir.' : ''), true); if (!voices.length) { $('voice').replaceChildren(new Option('Bağlantı bekleniyor', '')); } }
    finally { busy = false; controls(); }
  }
  $('refresh').onclick = () => sync(true); $('search').oninput = () => render(); $('voice').onchange = details;
  $('text').oninput = () => { $('count').textContent = `${$('text').value.length} / 2500`; controls(); };
  $('choose').onclick = () => { const v = selected(); if (!v) return; try { localStorage.setItem('elevenlabs-voice-id', v.id); showSelection(); status(`${v.name} seçildi. Siteye dönüp sesli okumayı kullanabilirsiniz.`); } catch { status('Tarayıcı seçimi kaydetmeye izin vermiyor.', true); } };
  $('clear').onclick = () => { try { localStorage.removeItem('elevenlabs-voice-id'); showSelection(); status('Varsayılan site sesi seçildi.'); } catch { status('Tarayıcı seçimi değiştirmeye izin vermiyor.', true); } };
  $('copy').onclick = async () => { try { await navigator.clipboard.writeText(selected().id); status('Ses kimliği kopyalandı.'); } catch { status('Ses kimliğini yukarıdaki ayrıntılardan seçip kopyalayabilirsiniz.'); } };
  $('preview').onerror = () => status('Hazır önizleme oynatılamadı. Sesle yeni bir MP3 oluşturmayı deneyebilirsiniz.', true);
  $('generate').onclick = async () => {
    const v = selected(), text = $('text').value.trim(); if (generation || !v || !text) return;
    generation = true; controls(); status('MP3 oluşturuluyor…');
    $('result').pause(); $('result').hidden = true; $('download').hidden = true;
    if (resultUrl) { URL.revokeObjectURL(resultUrl); resultUrl = ''; }
    try {
      const response = await fetch('/api/elevenlabs', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json', Accept: 'audio/mpeg' }, body: JSON.stringify({ text, voiceId: v.id }), signal: AbortSignal.timeout(35000) });
      if (!response.ok) { const error = await response.json().catch(() => null); throw new Error(error?.error || 'Ses oluşturulamadı.'); }
      const blob = await response.blob(); if (!blob.size || !blob.type.startsWith('audio/')) throw new Error('Oynatılabilir ses alınamadı.');
      resultUrl = URL.createObjectURL(blob); $('result').src = resultUrl; $('result').hidden = false; $('download').href = resultUrl; $('download').download = `elevenlabs-${v.id}.mp3`; $('download').hidden = false; status('MP3 hazır. Dinleyebilir veya indirebilirsiniz.');
    } catch (e) { status(e.message || 'Ses servisine ulaşılamadı.', true); }
    finally { generation = false; controls(); }
  };
  window.addEventListener('pagehide', () => { if (resultUrl) URL.revokeObjectURL(resultUrl); });
  sync(false);
})();
