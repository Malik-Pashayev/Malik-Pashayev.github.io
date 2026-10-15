// ============================================================
// RENDERING + LANGUAGE SWITCHING
// Content lives in content.js, interface strings in i18n.js.
// ============================================================
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMQ = matchMedia('(prefers-reduced-motion: reduce)');

const CODES = LANGS.map(l => l.code);
let lang = 'en';
// Text value: plain string, or { en, az, ... } with English fallback
const T = v => (v && typeof v === 'object') ? (v[lang] ?? v.en ?? '') : (v ?? '');
// Interface string by key
const t = k => (UI[lang] && UI[lang][k]) ?? UI.en[k] ?? k;

// Extra web fonts some scripts need: Geologica covers ə and Cyrillic, Noto Sans Georgian covers Georgian
const EXTRA_FONTS = {
  az: 'family=Geologica:wght@600;800',
  ru: 'family=Geologica:wght@600;800',
  ka: 'family=Noto+Sans+Georgian:wght@400;500;600;800'
};
const loadedFonts = new Set();
function ensureFonts(code) {
  const q = EXTRA_FONTS[code];
  if (!q || loadedFonts.has(q)) return;
  loadedFonts.add(q);
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = `https://fonts.googleapis.com/css2?${q}&display=swap`;
  document.head.appendChild(l);
}

function pickInitialLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (CODES.includes(fromUrl)) return fromUrl;
  try { const saved = localStorage.getItem('lang'); if (CODES.includes(saved)) return saved; } catch (e) {}
  return 'en';
}

function renderWork() {
  $('#workList').innerHTML = PROJECTS.map((p, i) => `
    <article class="project reveal${revealedOnce ? ' in done' : ''}">
      <div class="project-media">
        ${p.video
          ? `<video muted loop playsinline preload="none" poster="${esc(p.poster)}" data-src="${esc(p.video)}" aria-label="${esc(p.name + ' ' + t('demo'))}"></video>
             <button type="button" class="play-toggle">${esc(t('pause'))}</button>`
          : `<img src="${esc(p.poster)}" alt="${esc(p.name)}" loading="lazy">`}
      </div>
      <div class="project-body">
        <div class="project-meta"><span>${String(i + 1).padStart(2, '0')}</span><span>${esc(T(p.kind))}</span><span>${esc(T(p.year))}</span></div>
        <h3>${esc(p.name)}</h3>
        <p class="tagline">${esc(T(p.tagline))}</p>
        <p class="desc">${esc(T(p.desc))}</p>
        ${p.points && p.points.length ? `<ul class="points">${p.points.map(x => `<li>${esc(T(x))}</li>`).join('')}</ul>` : ''}
        <div class="tags">${p.tags.map(x => `<span class="tag">${esc(T(x))}</span>`).join('')}</div>
        ${p.note ? `<p class="private-note"><span aria-hidden="true">🔒</span> ${esc(T(p.note))}</p>` : ''}
        ${p.links.length ? `<div class="project-links">${p.links.map((l, j) => `<a class="btn ${j ? 'btn-ghost' : 'btn-primary'}" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(t(l.label))} <span aria-hidden="true">↗</span></a>`).join('')}</div>` : ''}
      </div>
    </article>`).join('');
}

function renderSites() {
  $('#siteGrid').innerHTML = SITES.map((x, i) => `
    <article class="site reveal${revealedOnce ? ' in done' : ''}" style="--d:${(i % 2) * 0.08}s">
      <div class="site-frame">
        <div class="site-bar" aria-hidden="true"><i></i><i></i><i></i><span>${esc(x.domain)}</span></div>
        <div class="site-media">
          <video muted loop playsinline preload="none" poster="assets/sites/${esc(x.media)}.jpg" data-src="assets/sites/${esc(x.media)}.mp4" aria-label="${esc(x.name + ', ' + t('preview'))}"></video>
        </div>
      </div>
      <div class="site-body">
        <p class="site-kind">${esc(T(x.kind))}</p>
        <h3>${esc(x.name)}</h3>
        <p class="site-desc">${esc(T(x.desc))}</p>
        <div class="tags">${x.tags.map(g => `<span class="tag">${esc(T(g))}</span>`).join('')}</div>
        <div class="site-links"><a href="${esc(x.href)}" target="_blank" rel="noopener">${esc(x.domain)} <span aria-hidden="true">↗</span></a></div>
      </div>
    </article>`).join('');
}

function renderStack() {
  $('#stackGrid').innerHTML = STACK_GROUPS.map((g, i) => `
    <div class="stack-card reveal${revealedOnce ? ' in done' : ''}" style="--d:${i * 0.07}s">
      <h3>${esc(T(g.title))}</h3>
      <ul>${g.items.map(x => `<li>${esc(T(x))}</li>`).join('')}</ul>
    </div>`).join('');
}

// Static text in index.html
function applyStaticText() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.title = t('metaTitle');
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', t('metaDesc'));
}

// Entrances
let revealedOnce = false;
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  setTimeout(() => e.target.classList.add('done'), 1200);
  io.unobserve(e.target);
}), { threshold: 0.12 });
function observeReveals() {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}

// Videos: project demos and site previews play only while visible, never for reduced motion
let videoObservers = [];
function wireVideos() {
  videoObservers.forEach(o => o.disconnect());
  videoObservers = [];
  document.querySelectorAll('.project-media video').forEach(v => {
    const btn = v.parentElement.querySelector('.play-toggle');
    let userPaused = false;
    const setBtn = () => { btn.textContent = v.paused ? t('play') : t('pause'); };
    btn.addEventListener('click', () => {
      if (!v.src) v.src = v.dataset.src;
      if (v.paused) { userPaused = false; v.play().catch(() => {}); } else { userPaused = true; v.pause(); }
    });
    v.addEventListener('play', setBtn); v.addEventListener('pause', setBtn);
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !reduceMQ.matches && !userPaused) { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); }
      else if (!e.isIntersecting) v.pause();
    }, { threshold: 0.35 });
    o.observe(v); videoObservers.push(o);
    setBtn();
  });
  document.querySelectorAll('.site-media video').forEach(v => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !reduceMQ.matches) { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); }
      else v.pause();
    }, { threshold: 0.5 });
    o.observe(v); videoObservers.push(o);
  });
}

function setLang(code, { persist = true } = {}) {
  lang = CODES.includes(code) ? code : 'en';
  document.documentElement.lang = lang;
  ensureFonts(lang);
  applyStaticText();
  renderWork(); renderSites(); renderStack();
  observeReveals(); wireVideos();
  const sel = $('#langSelect'); if (sel) sel.value = lang;
  if (persist) {
    try { localStorage.setItem('lang', lang); } catch (e) {}
    const u = new URL(location.href);
    if (lang === 'en') u.searchParams.delete('lang'); else u.searchParams.set('lang', lang);
    history.replaceState(null, '', u);
  }
}

// Language picker
(function langPicker() {
  const sel = $('#langSelect');
  if (!sel) return;
  sel.innerHTML = LANGS.map(l => `<option value="${l.code}" lang="${l.code}">${l.label} · ${esc(l.name)}</option>`).join('');
  sel.addEventListener('change', () => setLang(sel.value));
})();

document.querySelectorAll('.section-head, .about-text, .facts, .contact > *').forEach(el => el.classList.add('reveal'));
setLang(pickInitialLang(), { persist: false });
revealedOnce = true;

$('#year').textContent = new Date().getFullYear();

// Nav border once scrolled
const nav = $('#nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 8), { passive: true });

// Copy email
document.querySelectorAll('.copy-btn').forEach(b => b.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = t('copied'); }
  catch { b.textContent = b.dataset.copy; }
  setTimeout(() => (b.textContent = t('copyEmail')), 1800);
}));

// ============================================================
// THE DESK: tiny windows with gravity, stacking and throwing
// ============================================================
(function desk() {
  const floor = $('#deskFloor');
  const hint = $('#deskHint');
  if (!floor) return;

  const narrow = floor.clientWidth < 520;
  const bodies = DESK_WINDOWS.filter(w => !narrow || w.core).map((w, i) => {
    const el = document.createElement('div');
    el.className = 'win' + (w.hot ? ' hot' : '');
    el.style.setProperty('--dot', ['#FF5A36', '#F2B544', '#2DBE7E'][i % 3]);
    el.innerHTML = `<div class="win-top"><i></i><i></i><i></i></div><div class="win-body">${esc(w.label)}</div>`;
    el.setAttribute('aria-hidden', 'true');
    floor.appendChild(el);
    return { el, x: 0, y: 0, vx: 0, vy: 0, w: 0, h: 0, held: false, live: false };
  });

  let W = 0, H = 0;
  const G = 2400, REST = 0.28, WALL_REST = 0.45, FRICTION = 0.9, AIR = 0.999;

  function measure() {
    W = floor.clientWidth; H = floor.clientHeight;
    bodies.forEach(b => { b.w = b.el.offsetWidth; b.h = b.el.offsetHeight; });
  }
  const put = b => { b.el.style.transform = `translate3d(${b.x.toFixed(1)}px, ${b.y.toFixed(1)}px, 0)`; };

  // Static arrangement: rows stacked from the floor up (reduced motion and first paint)
  function settleStatic() {
    let x = 12, y = H, rowH = 0;
    bodies.forEach(b => {
      if (x + b.w > W - 12) { x = 12; y -= rowH + 6; rowH = 0; }
      b.x = x; b.y = y - b.h; b.vx = b.vy = 0; b.live = true;
      x += b.w + 6; rowH = Math.max(rowH, b.h);
      put(b);
    });
  }

  // Drop them in one by one from above the desk
  function dropIn(lift) {
    bodies.forEach((b, i) => {
      b.live = false;
      b.x = 12 + Math.random() * Math.max(1, W - b.w - 24);
      b.y = -b.h - 20;
      b.vx = (Math.random() - 0.5) * 300; b.vy = 0;
      put(b);
      setTimeout(() => { b.live = true; if (lift) b.vy = -200; wake(); }, (lift ? 40 : 110) * i + 200);
    });
  }

  function collideWalls(b) {
    if (b.x < 0) { b.x = 0; b.vx = -b.vx * WALL_REST; }
    if (b.x + b.w > W) { b.x = W - b.w; b.vx = -b.vx * WALL_REST; }
    if (b.y + b.h > H) {
      b.y = H - b.h;
      if (b.vy > 0) b.vy = Math.abs(b.vy) > 120 ? -b.vy * REST : 0;
      b.vx *= FRICTION;
    }
    if (b.y < -400) { b.y = -400; b.vy = 0; }
  }

  function collidePair(a, b) {
    const ox = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
    const oy = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
    if (ox <= 0 || oy <= 0) return;
    // inverse masses: a held window is immovable
    const ia = a.held ? 0 : 1, ib = b.held ? 0 : 1;
    if (ia + ib === 0) return;
    if (oy < ox) {
      const top = a.y < b.y ? a : b, bot = top === a ? b : a;
      const it = top === a ? ia : ib, ibt = top === a ? ib : ia;
      const s = oy / (it + ibt);
      top.y -= s * it; bot.y += s * ibt;
      const rel = top.vy - bot.vy;
      if (rel > 0) {
        const j = rel * (Math.abs(rel) > 140 ? 1 + REST : 1) / (it + ibt);
        top.vy -= j * it; bot.vy += j * ibt;
        const fx = (top.vx - bot.vx) * (1 - FRICTION);
        top.vx -= fx * it; bot.vx += fx * ibt;
      }
    } else {
      const left = a.x < b.x ? a : b, right = left === a ? b : a;
      const il = left === a ? ia : ib, ir = left === a ? ib : ia;
      const s = ox / (il + ir);
      left.x -= s * il; right.x += s * ir;
      const rel = left.vx - right.vx;
      if (rel > 0) { const j = rel * (1 + WALL_REST) / (il + ir); left.vx -= j * il; right.vx += j * ir; }
    }
  }

  let raf = 0, last = 0, still = 0, visible = true;
  function step(dt) {
    bodies.forEach(b => {
      if (!b.live || b.held) return;
      b.vy += G * dt; b.vx *= AIR;
      b.x += b.vx * dt; b.y += b.vy * dt;
    });
    for (let it = 0; it < 4; it++) {
      for (let i = 0; i < bodies.length; i++) {
        const a = bodies[i]; if (!a.live) continue;
        for (let j = i + 1; j < bodies.length; j++) { const b = bodies[j]; if (b.live) collidePair(a, b); }
      }
      bodies.forEach(b => { if (b.live && !b.held) collideWalls(b); });
    }
  }
  function frame(now) {
    const dt = Math.min(0.04, (now - (last || now)) / 1000); last = now;
    const sub = 3;
    for (let i = 0; i < sub; i++) step(dt / sub);
    let energy = 0;
    bodies.forEach(b => { put(b); if (b.live && !b.held) energy += Math.abs(b.vx) + Math.abs(b.vy); });
    const anyPending = bodies.some(b => !b.live) || bodies.some(b => b.held);
    still = energy < 6 * bodies.length && !anyPending ? still + dt : 0;
    if (still > 0.8 || !visible || document.hidden) { raf = 0; last = 0; return; }
    raf = requestAnimationFrame(frame);
  }
  function wake() { still = 0; if (!raf && visible && !reduceMQ.matches) raf = requestAnimationFrame(frame); }

  // Grab and throw
  let held = null, offX = 0, offY = 0, trail = [];
  floor.addEventListener('pointerdown', e => {
    const el = e.target.closest('.win'); if (!el || reduceMQ.matches) return;
    const b = bodies.find(q => q.el === el); if (!b) return;
    e.preventDefault();
    held = b; b.held = true; b.live = true; b.vx = b.vy = 0;
    el.classList.add('grabbed'); el.setPointerCapture(e.pointerId);
    const r = floor.getBoundingClientRect();
    offX = e.clientX - r.left - b.x; offY = e.clientY - r.top - b.y;
    trail = [{ x: e.clientX, y: e.clientY, t: performance.now() }];
    hint.classList.add('gone');
    wake();
  });
  floor.addEventListener('pointermove', e => {
    if (!held) return;
    const r = floor.getBoundingClientRect();
    held.x = Math.max(0, Math.min(W - held.w, e.clientX - r.left - offX));
    held.y = Math.max(-held.h * 0.5, Math.min(H - held.h, e.clientY - r.top - offY));
    trail.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    if (trail.length > 6) trail.shift();
    wake();
  });
  const release = e => {
    if (!held) return;
    const a = trail[0], z = trail[trail.length - 1], dt = Math.max(16, z.t - a.t) / 1000;
    held.vx = Math.max(-3000, Math.min(3000, (z.x - a.x) / dt));
    held.vy = Math.max(-3000, Math.min(3000, (z.y - a.y) / dt));
    held.held = false; held.el.classList.remove('grabbed');
    held = null; wake();
  };
  floor.addEventListener('pointerup', release);
  floor.addEventListener('pointercancel', release);

  $('#rainBtn').addEventListener('click', () => {
    hint.classList.add('gone');
    if (reduceMQ.matches) return;
    dropIn(true);
  });

  // Lifecycle
  let started = false, ready = false;
  function maybeStart() {
    if (!ready || started || !visible || reduceMQ.matches) return;
    started = true; dropIn(false);
  }
  function init() { ready = true; measure(); settleStatic(); maybeStart(); }
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) { maybeStart(); wake(); }
  }, { threshold: 0.25 }).observe(floor);
  let rt = 0;
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { measure(); bodies.forEach(b => { b.x = Math.min(b.x, W - b.w); b.y = Math.min(b.y, H - b.h); }); reduceMQ.matches ? settleStatic() : wake(); }, 150); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) wake(); });
  reduceMQ.addEventListener && reduceMQ.addEventListener('change', () => { measure(); settleStatic(); });
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(init, init);
})();
