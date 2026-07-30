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

/* ══ 02 · BUILD — a signal relay assembles on scroll ══ */
const DAG = {
  nodes: [
    { id: 'source', label: 'Source', caption: 'Git', x: 140, y: 120, detail: 'A commit arrives as the first signal and enters the pipeline.' },
    { id: 'build', label: 'Build', caption: 'Jenkins', x: 330, y: 90, detail: 'The build stage turns that signal into a validated artifact.' },
    { id: 'container', label: 'Container', caption: 'Docker', x: 170, y: 280, detail: 'Packaging makes the release portable and repeatable.' },
    { id: 'infra', label: 'Infra', caption: 'Terraform', x: 330, y: 360, detail: 'Infrastructure is provisioned as code before the rollout.' },
    { id: 'deploy', label: 'Deploy', caption: 'K8s', x: 560, y: 280, detail: 'The release is rolled out across the cluster with controlled pacing.' },
    { id: 'prometheus', label: 'Prometheus', caption: 'Observe', x: 560, y: 120, isMain: true, detail: 'Prometheus gathers the signal and turns it into evidence.' },
    { id: 'cloud', label: 'Cloud', caption: 'AWS', x: 775, y: 240, detail: 'Cloud runtime keeps the service available at production scale.' },
    { id: 'web', label: 'Runtime', caption: 'IIS', x: 775, y: 360, detail: 'The user-facing release lands on the target host.' },
  ],
  edges: [
    ['source', 'build'], ['build', 'prometheus'], ['prometheus', 'deploy'],
    ['source', 'container'], ['container', 'deploy'], ['deploy', 'cloud'],
    ['deploy', 'web'], ['infra', 'deploy'], ['build', 'infra'], ['prometheus', 'cloud'],
  ],
};
function initBuildDAG() {
  const svg = $('#dag-svg');
  if (!svg) return;
  const nodeG = $('#dag-nodes'), edgeG = $('#dag-edges');
  const NS = 'http://www.w3.org/2000/svg';
  const byId = Object.fromEntries(DAG.nodes.map(n => [n.id, n]));
  const detailTitle = $('#build-detail strong');
  const detailBody = $('#build-detail span');
  const edgePairs = DAG.edges.map(([a, b]) => [a, b]);

  const edgeEls = DAG.edges.map(([a, b]) => {
    const n1 = byId[a], n2 = byId[b];
    const p = document.createElementNS(NS, 'path');
    const mx = (n1.x + n2.x) / 2;
    const my = (n1.y + n2.y) / 2 - 24;
    p.setAttribute('d', `M${n1.x} ${n1.y} C ${mx} ${my}, ${mx} ${my}, ${n2.x} ${n2.y}`);
    p.setAttribute('class', 'dag-edge');
    edgeG.appendChild(p);
    return p;
  });

  const nodeEls = DAG.nodes.map(n => {
    const g = document.createElementNS(NS, 'g');
    g.setAttribute('class', 'dag-node');
    g.setAttribute('transform', `translate(${n.x} ${n.y})`);
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    g.setAttribute('aria-label', `${n.label} — ${n.caption}`);
    g.dataset.nodeId = n.id;

    const ring = document.createElementNS(NS, 'circle');
    ring.setAttribute('class', 'dag-node-ring');
    ring.setAttribute('r', n.isMain ? 54 : 42);

    const core = document.createElementNS(NS, 'circle');
    core.setAttribute('class', 'dag-node-core');
    core.setAttribute('r', n.isMain ? 38 : 31);

    const label = document.createElementNS(NS, 'text');
    label.setAttribute('class', 'dag-label');
    label.setAttribute('y', n.isMain ? 6 : 4);
    label.textContent = n.label;

    const caption = document.createElementNS(NS, 'text');
    caption.setAttribute('class', 'dag-caption');
    caption.setAttribute('y', n.isMain ? 34 : 30);
    caption.textContent = n.caption;

    g.appendChild(ring); g.appendChild(core); g.appendChild(label); g.appendChild(caption);
    nodeG.appendChild(g);
    return g;
  });

  let activeOverride = null;
  const setDetail = nodeId => {
    const node = DAG.nodes.find(item => item.id === nodeId);
    if (!node || !detailTitle || !detailBody) return;
    detailTitle.textContent = node.label;
    detailBody.textContent = node.detail;
  };

  const renderGraph = p => {
    const index = Math.min(DAG.nodes.length - 1, Math.max(0, Math.floor(p * DAG.nodes.length)));
    const activeId = activeOverride || DAG.nodes[index].id;
    setDetail(activeId);

    nodeEls.forEach((n, i) => {
      const item = DAG.nodes[i];
      const on = p > (i / nodeEls.length) * 0.82;
      const isActive = item.id === activeId;
      const connectedToActive = !!activeOverride && edgePairs.some(([a, b]) => (a === activeOverride && b === item.id) || (b === activeOverride && a === item.id));
      const lit = on || isActive || connectedToActive;
      gsap.to(n, { opacity: lit ? 1 : 0.16, scale: isActive ? 1.04 : lit ? 1 : 0.72, duration: 0.25, overwrite: 'auto' });
      n.classList.toggle('lit', lit);
      n.classList.toggle('active', isActive);
    });

    edgeEls.forEach((e, i) => {
      const [a, b] = edgePairs[i];
      const connectedToActive = !!activeOverride && (a === activeOverride || b === activeOverride);
      const on = p > (i / edgeEls.length) * 0.82 + 0.04 || connectedToActive;
      e.classList.toggle('drawn', on);
    });
  };

  const revealAll = () => { edgeEls.forEach(e => e.classList.add('drawn')); nodeEls.forEach(n => n.classList.add('lit')); };

  nodeEls.forEach(n => {
    const id = n.dataset.nodeId;
    n.addEventListener('mouseenter', () => { activeOverride = id; renderGraph(1); });
    n.addEventListener('focus', () => { activeOverride = id; renderGraph(1); });
    n.addEventListener('click', () => { activeOverride = id; renderGraph(1); });
    n.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activeOverride = id; renderGraph(1); } });
  });

  if (reduceMo || !hasGSAP || !window.ScrollTrigger) { revealAll(); setDetail('prometheus'); return; }

  const dag = $('#build-dag');
  gsap.set(nodeEls, { opacity: 0, scale: 0.72, transformOrigin: '50% 50%' });

  ScrollTrigger.create({
    trigger: '#build',
    start: 'top top',
    end: '+=1500',
    pin: !isMobile(),
    scrub: 0.6,
    onUpdate: self => {
      const p = self.progress;
      renderGraph(p);
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
