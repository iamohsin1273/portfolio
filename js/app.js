/* ══════════════════════════════════════════════════════════════
   SIGNAL — a deployment pipeline made visible.
   Vanilla JS + GSAP/ScrollTrigger + Lenis. No build step.
══════════════════════════════════════════════════════════════ */
'use strict';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMo = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = () => matchMedia('(max-width: 900px)').matches;

const hasGSAP = typeof window.gsap !== 'undefined';
const hasLenis = typeof window.Lenis !== 'undefined';
if (hasGSAP && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

/* ── year ── */
const yEl = $('#year'); if (yEl) yEl.textContent = new Date().getFullYear();

/* ── SMOOTH SCROLL (Lenis) ── */
let lenis = null;
function initLenis() {
  if (!hasLenis || reduceMo) return;
  lenis = new Lenis({ duration: 1.1, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
  if (hasGSAP && window.ScrollTrigger) {
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value, { duration: 0, immediate: true }) : lenis.scroll.instance.scroll.y;
      },
      scrollLeft(value) {
        return arguments.length ? lenis.scrollTo(value, { horizontal: true, duration: 0, immediate: true }) : lenis.scroll.instance.scroll.x;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: innerWidth, height: innerHeight };
      },
      pinType: document.documentElement.style.transform ? 'transform' : 'fixed'
    });
    lenis.on('scroll', ScrollTrigger.update);
    ScrollTrigger.addEventListener('refresh', () => lenis.update());
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
  } else {
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
}

/* ── smooth anchor helper (works with or without Lenis) ── */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: 0 });
  else el.scrollIntoView({ behavior: reduceMo ? 'auto' : 'smooth' });
}

/* ══ PIPELINE RAIL — progress + active stage + click nav ══ */
const stages = ['source', 'build', 'test', 'promote', 'deploy', 'observe', 'connect'];
const railSteps = $$('.rail-step');
const railProgress = $('#rail-progress');
const topbarFill = $('#topbar-fill');

railSteps.forEach(btn => btn.addEventListener('click', () => scrollToId(btn.dataset.target)));
$('.rail-mark')?.addEventListener('click', e => { e.preventDefault(); scrollToId('source'); });

function updateRail() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - innerHeight;
  const pct = max > 0 ? Math.min(1, scrollY / max) : 0;
  if (railProgress) {
    const track = $('#rail-track');
    railProgress.style.height = (pct * (track.clientHeight * 0.84)) + 'px';
  }
  if (topbarFill) topbarFill.style.width = (pct * 100) + '%';

  // active stage = last whose top is above viewport midpoint
  const mid = scrollY + innerHeight * 0.4;
  let active = 'source';
  stages.forEach(id => { const el = document.getElementById(id); if (el && el.offsetTop <= mid) active = id; });
  railSteps.forEach(b => b.setAttribute('aria-current', b.dataset.target === active ? 'true' : 'false'));
}
addEventListener('scroll', updateRail, { passive: true });
addEventListener('resize', updateRail, { passive: true });

/* ── generic reveal for .rv elements ── */
const rvIO = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rvIO.unobserve(e.target); } });
}, { threshold: 0.2 });
$$('.rv').forEach(el => rvIO.observe(el));

/* ══ 01 · SOURCE — name resolves char-by-char, then fade-ins ══ */
function initSource() {
  const nameEl = $('#source-name');
  if (!nameEl) return;
  const text = nameEl.dataset.text || nameEl.textContent;
  // Keep each name together while still revealing its letters individually.
  nameEl.setAttribute('aria-label', text);
  nameEl.innerHTML = text.split(/(\s+)/).map(part => {
    if (/^\s+$/.test(part)) return part;
    return `<span class="word">${[...part].map(c =>
      `<span class="char" aria-hidden="true">${c}</span>`
    ).join('')}</span>`;
  }).join('');
  const chars = $$('.char', nameEl);
  const fades = ['.source-role', '.source-tagline', '.source-cta', '.source-annotation', '.source-portrait', '#scroll-hint']
    .map(s => $(s)).filter(Boolean);

  if (reduceMo || !hasGSAP) {
    chars.forEach(c => { c.style.opacity = 1; c.style.transform = 'none'; });
    fades.forEach(f => { f.style.opacity = 1; f.style.transform = 'none'; });
    return;
  }
  const tl = gsap.timeline({ delay: 0.15 });
  tl.to(chars, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: { each: 0.028, from: 'start' } })
    .to(fades, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12 }, '-=0.3');
}

/* ══ 02 · BUILD — interactive signal network ══ */
const DAG = {
  nodes: [
    { id:'source', label:'Source', caption:'Git', category:'Change', x:210,y:255,size:27,strength:78,confidence:'High',time:'2m ago',summary:'A fresh commit is the originating signal for every change moving through the system.',insight:'It is the earliest opportunity to connect code intent to delivery evidence.' },
    { id:'build', label:'Build', caption:'Jenkins', category:'Delivery', x:415,y:175,size:35,strength:87,confidence:'High',time:'6m ago',summary:'Jenkins turns committed code into a tested, traceable build artifact.',insight:'Build health is the strongest early indicator of release readiness.' },
    { id:'container', label:'Container', caption:'Docker', category:'Packaging', x:325,y:440,size:31,strength:72,confidence:'Medium',time:'12m ago',summary:'Container packaging makes the release portable and ready for controlled rollout.',insight:'A new image pattern is emerging across the active release path.' },
    { id:'infra', label:'Infra', caption:'Terraform', category:'Infrastructure', x:565,y:500,size:29,strength:69,confidence:'Medium',time:'18m ago',summary:'Infrastructure state signals whether the target environment matches the intended release.',insight:'A dependency change makes this cluster worth checking before the next deployment.' },
    { id:'deploy', label:'Deploy', caption:'Kubernetes', category:'Runtime', x:710,y:345,size:38,strength:91,confidence:'High',time:'Now',summary:'Kubernetes is the active release surface where desired state meets live workload behavior.',insight:'It bridges packaging, infrastructure, runtime health, and delivery outcomes.' },
    { id:'prometheus', label:'Prometheus', caption:'Observe', category:'Observability', x:620,y:165,size:47,strength:94,confidence:'High',time:'Now',summary:'Central telemetry turns pipeline activity into observable evidence across the release system.',insight:'It connects build activity to live runtime evidence, making changes explainable.', featured:true },
    { id:'cloud', label:'Cloud', caption:'AWS', category:'Platform', x:925,y:250,size:34,strength:83,confidence:'High',time:'4m ago',summary:'Cloud runtime signals show whether the deployed service has the capacity and reach it needs.',insight:'It is the platform context behind the strongest delivery and observability relationships.' },
    { id:'web', label:'Runtime', caption:'IIS', category:'Experience', x:950,y:470,size:25,strength:58,confidence:'Medium',time:'26m ago',summary:'The delivery endpoint makes release effects visible to users and downstream systems.',insight:'Its weaker relationship to the active cluster is unexpected and worth exploring.' },
  ],
  edges: [
    ['source', 'build'], ['build', 'prometheus'], ['prometheus', 'deploy'],
    ['source', 'container'], ['container', 'deploy'], ['deploy', 'cloud'],
    ['deploy', 'web'], ['infra', 'deploy'], ['build', 'infra'], ['prometheus', 'cloud'],
  ],
};
function initBuildDAG() {
  const svg = $('#signal-svg');
  if (!svg) return;
  const canvas = $('#graph-canvas'), viewport = $('#signal-viewport');
  const nodeG = $('#signal-nodes'), edgeG = $('#signal-edges'), preview = $('#signal-preview');
  const NS = 'http://www.w3.org/2000/svg';
  const byId = Object.fromEntries(DAG.nodes.map(n => [n.id, n]));
  const edgePairs = DAG.edges.map(([a, b]) => [a, b]);
  const nodeEls = {}, edgeEls = [];
  let selected = 'prometheus', mode = 'trending', zoom = 1, pan = { x: 0, y: 0 }, drag = null, searchTerm = '';
  const related = id => edgePairs.filter(([a,b]) => a === id || b === id).map(([a,b]) => a === id ? b : a);
  const point = n => `${n.x} ${n.y}`;

  DAG.edges.forEach(([a, b]) => {
    const p = document.createElementNS(NS, 'path');
    const pulse = document.createElementNS(NS, 'path');
    p.setAttribute('class', 'signal-edge'); pulse.setAttribute('class', 'signal-edge-pulse');
    edgeG.appendChild(p);
    edgeG.appendChild(pulse); edgeEls.push({ a, b, p, pulse });
  });

  DAG.nodes.forEach(n => {
    const g = document.createElementNS(NS, 'g');
    g.setAttribute('class', 'signal-node' + (n.featured ? ' is-featured' : ''));
    g.setAttribute('transform', `translate(${point(n)})`);
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    g.setAttribute('aria-label', `${n.label}, ${n.category}, ${n.strength}% strength`);
    g.dataset.nodeId = n.id;
    const aura = document.createElementNS(NS, 'circle'); aura.setAttribute('class', 'node-aura'); aura.setAttribute('r', n.size + 16);
    const core = document.createElementNS(NS, 'circle');
    core.setAttribute('class', 'node-core'); core.setAttribute('r', n.size);
    const dot = document.createElementNS(NS, 'circle'); dot.setAttribute('class', 'node-dot'); dot.setAttribute('r', Math.max(3, n.size * .13)); dot.setAttribute('cy', -n.size * .34);
    const label = document.createElementNS(NS, 'text');
    label.setAttribute('class', 'node-label'); label.setAttribute('text-anchor', 'middle'); label.setAttribute('y', n.size + 20);
    label.textContent = n.label;
    g.append(aura, core, dot, label);
    nodeG.appendChild(g);
    nodeEls[n.id] = g;
  });

  function draw() {
    viewport.setAttribute('transform', `translate(${pan.x} ${pan.y}) scale(${zoom})`);
    edgeEls.forEach(({a,b,p,pulse}) => {
      const from = byId[a], to = byId[b], mx = (from.x + to.x) / 2, my = (from.y + to.y) / 2 - 45;
      const path = `M${from.x} ${from.y} Q${mx} ${my} ${to.x} ${to.y}`;
      p.setAttribute('d', path); pulse.setAttribute('d', path);
      const on = selected && (a === selected || b === selected);
      p.classList.toggle('is-related', on); pulse.style.opacity = on ? '1' : '.24';
      p.classList.toggle('is-muted', !!searchTerm && !(a.includes(searchTerm) || b.includes(searchTerm)));
    });
    DAG.nodes.forEach(n => {
      nodeEls[n.id].setAttribute('transform', `translate(${point(n)})`);
      const matches = !searchTerm || `${n.label} ${n.caption} ${n.category}`.toLowerCase().includes(searchTerm);
      nodeEls[n.id].classList.toggle('is-muted', !matches);
      nodeEls[n.id].classList.toggle('is-selected', n.id === selected);
    });
  }
  function setPanel(id) {
    const n = byId[id]; if (!n) return;
    $('#signal-category').textContent = `${n.category} · ${n.caption} signal`;
    $('#signal-title').textContent = n.label; $('#signal-summary').textContent = n.summary;
    $('#signal-strength').textContent = `${n.strength}%`; $('#signal-confidence').textContent = n.confidence; $('#signal-time').textContent = n.time;
    $('#signal-insight').textContent = n.insight;
    const chips = $('#signal-related'); chips.innerHTML = '';
    related(id).forEach(rel => { const b = document.createElement('button'); b.textContent = byId[rel].label; b.addEventListener('click', () => focus(rel)); chips.appendChild(b); });
  };
  function animateView(target, ms = 620) {
    const start = { x:pan.x, y:pan.y, z:zoom }, begun = performance.now();
    const tick = now => { const p = Math.min(1, (now-begun)/ms), ease = 1 - Math.pow(1-p, 3); pan.x = start.x + (target.x-start.x)*ease; pan.y = start.y + (target.y-start.y)*ease; zoom = start.z + (target.z-start.z)*ease; draw(); if (p < 1) requestAnimationFrame(tick); };
    if (reduceMo) { pan.x=target.x;pan.y=target.y;zoom=target.z;draw(); } else requestAnimationFrame(tick);
  }
  function focus(id) { selected = id; setPanel(id); const n = byId[id]; animateView({ x:600 - n.x * 1.18, y:340 - n.y * 1.18, z:1.18 }); draw(); }
  function showPreview(id) { const n = byId[id], rect = nodeEls[id].getBoundingClientRect(), host = canvas.getBoundingClientRect(); preview.innerHTML = `<b>${n.label}</b><p>${n.category} · ${n.strength}% strength · ${n.time}<br>${n.insight}</p><span>${n.confidence} confidence</span>`; preview.style.left = `${Math.min(host.width-230, Math.max(12, rect.left-host.left+22))}px`; preview.style.top = `${Math.max(64, rect.top-host.top-20)}px`; preview.classList.add('is-open'); preview.setAttribute('aria-hidden','false'); }
  function hidePreview() { preview.classList.remove('is-open'); preview.setAttribute('aria-hidden','true'); }
  function layout(nextMode) {
    mode = nextMode; const center = {x:600,y:340};
    const order = [...DAG.nodes].sort((a,b) => b.strength-a.strength);
    order.forEach((n,i) => {
      const angle = (Math.PI*2*i/order.length) - Math.PI/2, radius = 138 + i*38;
      if (nextMode === 'trending') { n.x = 600 + Math.cos(angle)*radius; n.y = 340 + Math.sin(angle)*radius*.7; }
      if (nextMode === 'emerging') { n.x = 280 + (i%3)*185; n.y = 170 + Math.floor(i/3)*175; }
      if (nextMode === 'connected') { const ring = related(selected).includes(n.id) ? 170 : 330; n.x = center.x + Math.cos(angle)*ring; n.y = center.y + Math.sin(angle)*ring*.72; }
      if (nextMode === 'unexpected') { n.x = 190 + ((i*167)%820); n.y = 150 + ((i*113)%390); }
      if (nextMode === 'recent') { n.x = 170 + i*125; n.y = 300 + Math.sin(i*1.7)*145; }
    });
    document.querySelectorAll('.explore-mode').forEach(b => b.setAttribute('aria-pressed', b.dataset.mode === nextMode ? 'true' : 'false'));
    animateView({x:0,y:0,z:1});
  }
  Object.values(nodeEls).forEach(el => { const id = el.dataset.nodeId; el.addEventListener('mouseenter', () => showPreview(id)); el.addEventListener('mouseleave', hidePreview); el.addEventListener('focus', () => showPreview(id)); el.addEventListener('blur', hidePreview); el.addEventListener('click', () => focus(id)); el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); focus(id); } }); });
  canvas.addEventListener('pointerdown', e => { if (e.target.closest('.signal-node')) return; drag = {x:e.clientX,y:e.clientY,px:pan.x,py:pan.y}; canvas.classList.add('is-panning'); canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointermove', e => { if (!drag) return; pan.x=drag.px+(e.clientX-drag.x);pan.y=drag.py+(e.clientY-drag.y);draw(); });
  canvas.addEventListener('pointerup', () => { drag=null;canvas.classList.remove('is-panning'); });
  canvas.addEventListener('wheel', e => { e.preventDefault(); const next=Math.max(.62,Math.min(1.8,zoom*(e.deltaY>0?.9:1.1))); animateView({x:pan.x,y:pan.y,z:next}, 130); }, {passive:false});
  $('#signal-search').addEventListener('input', e => { searchTerm=e.target.value.trim().toLowerCase(); draw(); });
  $$('.explore-mode').forEach(b => b.addEventListener('click', () => layout(b.dataset.mode)));
  $('#signal-discover').addEventListener('click', () => { const unseen = DAG.nodes.filter(n => n.id !== selected && !related(selected).includes(n.id)); focus((unseen[0] || DAG.nodes.find(n => n.id !== selected)).id); });
  $('#signal-next').addEventListener('click', () => { const next = related(selected).sort((a,b)=>byId[b].strength-byId[a].strength)[0]; if (next) focus(next); });
  $$('.radar-pulse').forEach(p => p.addEventListener('click', () => { layout('emerging'); setTimeout(() => focus(p.dataset.signalId), reduceMo ? 0 : 230); }));
  draw(); setPanel(selected);
}

/* ══ 03 · TEST — count-up the lab score when in view ══ */
function initTestLedger() {
  const scoreEl = $('.ledger-score[data-score]');
  if (!scoreEl) return;
  const target = +scoreEl.dataset.score;
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      if (reduceMo) { scoreEl.firstChild.textContent = target; return; }
      let cur = 0;
      const step = () => {
        cur += Math.max(1, target / 40);
        if (cur >= target) { scoreEl.firstChild.textContent = target; return; }
        scoreEl.firstChild.textContent = Math.floor(cur);
        requestAnimationFrame(step);
      };
      step();
    });
  }, { threshold: 0.6 });
  io.observe(scoreEl);
}

/* ══ 04 · PROMOTE — flow nodes light up stage-by-stage on scroll ══ */
function initPromote() {
  const nodes = $$('#promote-flow .flow-node');
  const arrows = $$('#promote-flow .flow-arrow');
  if (!nodes.length) return;
  if (reduceMo || !hasGSAP || !window.ScrollTrigger) {
    nodes.forEach(n => n.classList.add('lit')); arrows.forEach(a => a.classList.add('lit')); return;
  }
  ScrollTrigger.create({
    trigger: '#promote-diagram',
    start: 'top 75%',
    end: 'bottom 55%',
    scrub: 0.5,
    onUpdate: self => {
      const p = self.progress;
      nodes.forEach((n, i) => n.classList.toggle('lit', p > i / nodes.length * 0.9));
      arrows.forEach((a, i) => a.classList.toggle('lit', p > (i + 0.5) / nodes.length * 0.9));
    },
  });
}

/* ══ 05 · DEPLOY — interactive k8s-style simulator ══ */
function initDeploy() {
  const field = $('#pod-field'), log = $('#pod-log');
  if (!field) return;
  const countEl = $('#replica-count'), summary = $('#pod-summary'), statusEl = $('#cluster-status');
  let desired = 3, pods = [], uid = 0, loaded = false;

  const now = () => new Date().toLocaleTimeString('en-GB', { hour12: false });
  function say(ev, msg) {
    const line = document.createElement('div');
    line.innerHTML = `<span class="ts">${now()}</span> <span class="ev">${ev}</span> ${msg}`;
    log.prepend(line);
    while (log.children.length > 30) log.lastChild.remove();
  }
  function render() {
    field.innerHTML = '';
    pods.forEach(p => {
      const el = document.createElement('div');
      el.className = 'pod ' + p.state;
      el.title = p.name + ' · ' + p.state;
      el.setAttribute('aria-label', p.name + ' ' + p.state);
      field.appendChild(el);
      p.el = el;
    });
    const running = pods.filter(p => p.state === 'running').length;
    summary.textContent = running + '/' + desired;
    const healthy = running === desired && pods.every(p => p.state === 'running');
    statusEl.textContent = healthy ? 'Healthy' : 'Reconciling…';
    statusEl.style.color = healthy ? 'var(--ok)' : 'var(--accent)';
  }
  function spawn(state = 'pending') {
    const p = { id: ++uid, name: 'web-portal-' + Math.random().toString(36).slice(2, 7), state };
    pods.push(p); render();
    if (state === 'pending') setTimeout(() => { p.state = 'running'; render(); say('Started', p.name); }, 700 + Math.random() * 500);
    return p;
  }
  function reconcile() {
    const alive = pods.filter(p => p.state !== 'terminating');
    if (alive.length < desired) { say('Scaling', `+${desired - alive.length} pod(s) → desired ${desired}`); while (pods.filter(p => p.state !== 'terminating').length < desired) spawn('pending'); }
    else if (alive.length > desired) {
      say('Scaling', `-${alive.length - desired} pod(s) → desired ${desired}`);
      let over = alive.length - desired;
      for (let i = pods.length - 1; i >= 0 && over > 0; i--) {
        if (pods[i].state !== 'terminating') { pods[i].state = 'terminating'; over--; const dead = pods[i]; setTimeout(() => { pods = pods.filter(x => x !== dead); render(); }, 500); }
      }
      render();
    }
  }
  // seed
  for (let i = 0; i < desired; i++) spawn('running');
  say('Deploy', 'web-portal created · desired ' + desired);

  $('#scale-up').addEventListener('click', () => { if (desired < 9) { desired++; countEl.textContent = desired; reconcile(); } });
  $('#scale-down').addEventListener('click', () => { if (desired > 1) { desired--; countEl.textContent = desired; reconcile(); } });
  $('#kill-pod').addEventListener('click', () => {
    const alive = pods.filter(p => p.state === 'running');
    if (!alive.length) return;
    const victim = alive[Math.floor(Math.random() * alive.length)];
    victim.state = 'terminating'; render();
    say('Killed', victim.name + ' — self-healing…');
    setTimeout(() => { pods = pods.filter(x => x !== victim); render(); reconcile(); }, 550);
  });
  $('#rollout').addEventListener('click', () => {
    const running = pods.filter(p => p.state === 'running');
    if (!running.length) return;
    say('Rollout', 'rolling update v2 — one pod at a time');
    running.forEach((p, i) => setTimeout(() => {
      p.state = 'updating'; render();
      setTimeout(() => { p.state = 'running'; render(); if (i === running.length - 1) say('Rollout', 'update complete · all pods v2'); }, 500);
    }, i * 650));
  });
  $('#load-test').addEventListener('click', () => {
    if (loaded) return; loaded = true;
    say('HPA', 'load spike — autoscaling up');
    const prev = desired; desired = Math.min(9, desired + 3); countEl.textContent = desired; reconcile();
    setTimeout(() => { desired = prev; countEl.textContent = desired; say('HPA', 'load normal — scaling back'); reconcile(); loaded = false; }, 4200);
  });
}

/* ══ 06 · OBSERVE — vertical scroll drives horizontal pan (desktop) ══ */
function initObserve() {
  const track = $('#observe-track');
  const wrap = $('#observe-wrap');
  if (!track || !wrap) return;
  if (reduceMo || !hasGSAP || !window.ScrollTrigger || isMobile()) return; // mobile = vertical stack (CSS)

  const dist = () => track.scrollWidth - innerWidth + 120;
  gsap.to(track, {
    x: () => -dist(),
    ease: 'none',
    scrollTrigger: {
      trigger: '#observe',
      start: 'top top',
      end: () => '+=' + dist(),
      pin: true,
      scrub: 0.6,
      invalidateOnRefresh: true,
    },
  });
}

/* ── BOOT ── */
function boot() {
  initLenis();
  updateRail();
  initSource();
  initBuildDAG();
  initTestLedger();
  initPromote();
  initDeploy();
  initObserve();
}
if (document.readyState === 'loading') addEventListener('DOMContentLoaded', boot);
else boot();
