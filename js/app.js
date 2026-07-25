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
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
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
  // split into chars (spaces preserved) for the git-blame settle
  nameEl.setAttribute('aria-label', text);
  nameEl.innerHTML = [...text].map(c =>
    c === ' ' ? ' ' : `<span class="char" aria-hidden="true">${c}</span>`
  ).join('');
  const chars = $$('.char', nameEl);
  const fades = ['.source-role', '.source-tagline', '.source-cta', '.source-annotation', '#scroll-hint']
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

/* ══ 02 · BUILD — dependency DAG assembles on scroll ══ */
const DAG = {
  nodes: [
    { id: 'linux', label: 'Linux', x: 140, y: 210 },
    { id: 'git', label: 'Git', x: 320, y: 90 },
    { id: 'docker', label: 'Docker', x: 320, y: 210 },
    { id: 'jenkins', label: 'Jenkins', x: 320, y: 330 },
    { id: 'k8s', label: 'Kubernetes', x: 520, y: 150 },
    { id: 'iis', label: 'IIS', x: 520, y: 330 },
    { id: 'terraform', label: 'Terraform', x: 720, y: 210 },
    { id: 'aws', label: 'AWS', x: 900, y: 210, cert: 'CP certified' },
  ],
  edges: [
    ['linux', 'git'], ['linux', 'docker'], ['linux', 'jenkins'],
    ['docker', 'k8s'], ['jenkins', 'iis'], ['jenkins', 'k8s'],
    ['terraform', 'aws'], ['k8s', 'terraform'], ['git', 'jenkins'],
  ],
};
function initBuildDAG() {
  const svg = $('#dag-svg');
  if (!svg) return;
  const nodeG = $('#dag-nodes'), edgeG = $('#dag-edges');
  const NS = 'http://www.w3.org/2000/svg';
  const byId = Object.fromEntries(DAG.nodes.map(n => [n.id, n]));

  // edges first (behind nodes)
  const edgeEls = DAG.edges.map(([a, b]) => {
    const n1 = byId[a], n2 = byId[b];
    const p = document.createElementNS(NS, 'path');
    const mx = (n1.x + n2.x) / 2;
    p.setAttribute('d', `M${n1.x} ${n1.y} C ${mx} ${n1.y}, ${mx} ${n2.y}, ${n2.x} ${n2.y}`);
    p.setAttribute('class', 'dag-edge');
    edgeG.appendChild(p);
    return p;
  });
  // nodes
  const nodeEls = DAG.nodes.map(n => {
    const g = document.createElementNS(NS, 'g');
    g.setAttribute('class', 'dag-node');
    g.setAttribute('transform', `translate(${n.x} ${n.y})`);
    const c = document.createElementNS(NS, 'circle'); c.setAttribute('r', 34);
    const t = document.createElementNS(NS, 'text'); t.setAttribute('y', 5); t.textContent = n.label;
    g.appendChild(c); g.appendChild(t);
    if (n.cert) {
      const ct = document.createElementNS(NS, 'text');
      ct.setAttribute('class', 'dag-cert'); ct.setAttribute('y', 52); ct.textContent = n.cert;
      g.appendChild(ct);
    }
    nodeG.appendChild(g);
    return g;
  });

  const litAll = () => { edgeEls.forEach(e => e.classList.add('drawn')); nodeEls.forEach(n => n.classList.add('lit')); };

  if (reduceMo || !hasGSAP || !window.ScrollTrigger) { litAll(); return; }

  // scrubbed assembly + horizontal pan of the DAG as the section pins (desktop only)
  const wrap = $('#build-scroll'), dag = $('#build-dag');
  gsap.set(nodeEls, { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' });

  ScrollTrigger.create({
    trigger: '#build',
    start: 'top top',
    end: '+=1600',
    pin: !isMobile(),
    scrub: 0.6,
    onUpdate: self => {
      const p = self.progress;
      // light nodes in order
      nodeEls.forEach((n, i) => {
        const thresh = i / nodeEls.length * 0.8;
        const on = p > thresh;
        gsap.to(n, { opacity: on ? 1 : 0.15, scale: on ? 1 : 0.6, duration: 0.3, overwrite: 'auto' });
        n.classList.toggle('lit', on);
      });
      edgeEls.forEach((e, i) => e.classList.toggle('drawn', p > (i / edgeEls.length * 0.8 + 0.05)));
      // gentle horizontal pan across the graph on desktop
      if (!isMobile() && dag) {
        const maxPan = Math.max(0, dag.scrollWidth - dag.clientWidth);
        dag.scrollLeft = maxPan * p;
      }
    },
  });
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
