/* =========================================================
   Mohamed Mohsin — Cloud Platform Experience
   app.js  —  all content lives in DATA, UI renders from it
   ========================================================= */
'use strict';

/* ---------------------------------------------------------
   1. DATA  (single source of truth)
--------------------------------------------------------- */
const DATA = {
  profile: {
    name: 'Mohamed Mohsin',
    role: 'Cloud & Platform Engineer',
    location: 'Chennai, India',
    email: 'iamohsin0033@gmail.com',
    phone: '+91 7305421447',
    github: 'https://github.com/iamohsin1273',
    linkedin: 'https://linkedin.com/in/iam-mohsin',
    summary:
      'Junior DevOps Engineer working hands-on with Kubernetes, Docker and Jenkins to run containerized deployments and CI/CD pipelines. I support AWS infrastructure across EC2, EKS and ECS, with observability built on Prometheus and Grafana — already handling real production workflows.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'CI/CD', 'Observability'],
    photos: ['./assets/images/profile.jpeg', 'profile.jpeg', 'profile.jpg', 'profile.png', './assets/profile.jpeg', 'assets/profile.jpeg', 'assets/profile.jpg', 'images/profile.jpg']
  },

  roles: [
    'Cloud &amp; Platform Engineer',
    'DevOps Engineer',
    'Kubernetes Operator',
    'Infrastructure Automation',
    'Site Reliability Mindset'
  ],

  boot: [
    { t: 'aws configure --profile prod', s: 'AWS credentials verified · region ap-south-1' },
    { t: 'kubectl config use-context eks-prod', s: 'Switched to EKS production context' },
    { t: 'terraform init &amp;&amp; terraform plan', s: 'Infrastructure state synced · 0 drift' },
    { t: 'systemctl status platform', s: 'All services active (running)' }
  ],

  heroStats: [
    { n: 6, suffix: '+', label: 'Cloud services' },
    { n: 12, suffix: '+', label: 'Tools mastered' },
    { n: 99.9, suffix: '%', label: 'Uptime target', decimals: 1 }
  ],

  experience: [
    {
      type: 'work',
      date: 'Jan 2026 — Present',
      role: 'Junior DevOps Engineer',
      org: 'Revolite Infotech Pvt. Ltd., Chennai',
      points: [
        'Linux server administration, system troubleshooting and deployment support to keep applications available and stable.',
        'Support AWS services — EC2, IAM, S3, ECS, EKS and CloudFormation — for infrastructure provisioning and management.',
        'Coordinate release management and deployments with dev and QA teams using Git-based workflows.',
        'Automate configuration management with Ansible to streamline operational tasks.',
        'Troubleshoot networking, VPN, firewall and infrastructure issues to keep systems reliable.',
        'Monitor system performance, application logs and infrastructure health to improve uptime and deployment efficiency.'
      ]
    },
    {
      type: 'edu',
      date: 'Aug 2021 — May 2025',
      role: 'B.Tech, Computer Science & Engineering',
      org: 'D.R. M.G.R. University, Chennai',
      points: [
        'Focused on systems, networking and cloud computing fundamentals.',
        'Built a self-driven DevOps foundation across containers, orchestration and CI/CD.'
      ]
    }
  ],

  // Unified capability + toolchain map (merges old dashboard / skills / tech).
  // tier: 'Core' (daily, production) · 'Working' (hands-on) · 'Familiar' (used, growing)
  stack: [
    {
      title: 'Containers & Orchestration',
      accent: '#4d8dff',
      blurb: 'Packaging services and running them at scale on production Kubernetes.',
      tools: [
        { n: 'Kubernetes', slug: 'kubernetes', tier: 'Core' },
        { n: 'Docker',     slug: 'docker',     tier: 'Core' },
        { n: 'Helm',       slug: 'helm',       tier: 'Working' }
      ]
    },
    {
      title: 'Cloud & Infrastructure as Code',
      accent: '#ffb648',
      blurb: 'Provisioning repeatable, drift-free AWS environments from code.',
      tools: [
        { n: 'AWS',            slug: 'aws',       tier: 'Core' },
        { n: 'Terraform',      slug: 'terraform', tier: 'Core' },
        { n: 'Linux',          slug: 'linux',     tier: 'Core' }
      ]
    },
    {
      title: 'CI/CD & Automation',
      accent: '#2fe08a',
      blurb: 'Wiring commits to production through automated, security-gated pipelines.',
      tools: [
        { n: 'Jenkins',        slug: 'jenkins',       tier: 'Core' },
        { n: 'GitHub Actions', slug: 'githubactions', tier: 'Working' },
        { n: 'Ansible',        slug: 'ansible',       tier: 'Working' },
        { n: 'Git',            slug: 'git',           tier: 'Core' }
      ]
    },
    {
      title: 'Observability & Security',
      accent: '#ff5a72',
      blurb: 'Watching what runs and catching problems before they ship.',
      tools: [
        { n: 'Prometheus', slug: 'prometheus', tier: 'Working' },
        { n: 'Grafana',    slug: 'grafana',    tier: 'Working' },
        { n: 'Trivy',      slug: 'trivy',      tier: 'Working' },
        { n: 'SonarQube',  slug: 'sonarqube',  tier: 'Familiar' }
      ]
    },
    {
      title: 'Scripting',
      accent: '#7b6bff',
      blurb: 'Automating the operational glue that keeps platforms healthy.',
      tools: [
        { n: 'Python', slug: 'python', tier: 'Working' },
        { n: 'Shell',  slug: 'shell',  tier: 'Core' }
      ]
    }
  ],

  // Flagship DevSecOps pipeline
  flagship: {
    title: 'AI-Powered DevSecOps Pipeline',
    desc: 'An end-to-end, security-first delivery pipeline: every commit flows through build, test, quality gates, vulnerability scanning, image signing and GitOps deployment — with AI-assisted diagnostics closing the loop back to the team.',
    nodes: [
      { name: 'GitHub',     stage: 'Source',     ico: 'source',    color: '#8b949e', desc: 'Developers push to main; webhooks trigger the pipeline automatically.', tech: ['Git', 'Webhooks', 'Branch protection'],
        log: [['$ git push origin main','cmd'], ['Enumerating objects: 47, done.','dim'], ['remote: webhook → jenkins/devsecops triggered','cy'], ['commit a1f9c72 · "feat: add rate limiter"','']] },
      { name: 'Jenkins',    stage: 'Orchestrate',ico: 'orchestrate',color: '#e0662b', desc: 'Declarative pipeline orchestrates every downstream stage on ephemeral agents.', tech: ['Jenkinsfile', 'Groovy', 'Agents'],
        log: [['[Pipeline] Start of Pipeline','dim'], ['Provisioning ephemeral agent  k8s-agent-7f3','b'], ['Loading Jenkinsfile (declarative)','dim'], ['✓ agent online · 12 stages queued','g']] },
      { name: 'Build',      stage: 'Compile',    ico: 'build',     color: '#4d8dff', desc: 'Application is compiled and packaged into reproducible artifacts.', tech: ['Maven', 'Node', 'Cache'],
        log: [['$ npm ci && npm run build','cmd'], ['restored cache · 1,284 pkgs (3.1s)','dim'], ['vite build → dist/  (gzip 214 kb)','b'], ['✓ artifact packaged in 22.4s','g']] },
      { name: 'Unit Tests', stage: 'Verify',     ico: 'test',      color: '#2fe08a', desc: 'Automated unit and integration tests gate the build on every run.', tech: ['Jest', 'Coverage', 'Reports'],
        log: [['$ npm test -- --coverage','cmd'], ['PASS  src/  · 214 tests','g'], ['coverage: lines 91.4% · branches 87.2%','dim'], ['✓ quality gate: coverage ≥ 80%','g']] },
      { name: 'SonarQube',  stage: 'Quality',    ico: 'quality',   color: '#4e9bcd', desc: 'Static analysis enforces code quality gates and blocks regressions.', tech: ['SAST', 'Quality Gate', 'Debt'],
        log: [['$ sonar-scanner','cmd'], ['analyzing 318 files · 0 bugs · 2 smells','dim'], ['security hotspots: 0 · debt 14m','b'], ['✓ Quality Gate: PASSED','g']] },
      { name: 'Trivy',      stage: 'Scan',       ico: 'scan',      color: '#7b6bff', desc: 'Scans dependencies and image layers for CVEs before anything ships.', tech: ['CVE scan', 'SBOM', 'Policy'],
        log: [['$ trivy image app:a1f9c72','cmd'], ['scanning 6 layers · 412 packages','dim'], ['CRITICAL 0 · HIGH 0 · MEDIUM 3','y'], ['✓ no blocking vulnerabilities','g']] },
      { name: 'Docker',     stage: 'Package',    ico: 'package',   color: '#2496ed', desc: 'Builds a minimal, multi-stage container image for the service.', tech: ['Multi-stage', 'BuildKit'],
        log: [['$ docker build --target prod .','cmd'], ['[+] BuildKit · 8 layers cached','dim'], ['image app:a1f9c72 → 84.2 MB','b'], ['✓ built in 18.7s','g']] },
      { name: 'Harbor',     stage: 'Registry',   ico: 'registry',  color: '#35e0e0', desc: 'Signed images are pushed to a private, scanned registry.', tech: ['Registry', 'Cosign', 'Replication'],
        log: [['$ cosign sign && docker push','cmd'], ['pushing to harbor.mohsin.io/app','dim'], ['signature uploaded · attestation ok','cy'], ['✓ digest sha256:3b9d…e1 signed','g']] },
      { name: 'Kubernetes', stage: 'Deploy',     ico: 'deploy',    color: '#326ce5', desc: 'GitOps rollout to EKS with health checks and automatic rollback.', tech: ['EKS', 'Rollout', 'HPA'],
        log: [['$ argocd app sync app-prod','cmd'], ['rollout: 3/3 replicas · surge 1','dim'], ['readiness probes green · HPA armed','b'], ['✓ deployed to eks-prod (us-east-1)','g']] },
      { name: 'K8sGPT',     stage: 'Diagnose',   ico: 'diagnose',  color: '#b06bff', desc: 'Scans live cluster state and surfaces issues in plain language.', tech: ['Analyzers', 'CRDs'],
        log: [['$ k8sgpt analyze --explain','cmd'], ['scanning 42 resources across 6 ns','dim'], ['0 critical · 1 advisory (pdb)','y'], ['✓ cluster healthy','g']] },
      { name: 'Gemini',     stage: 'Reason',     ico: 'reason',    color: '#4285f4', desc: 'Enriches diagnostics with root-cause reasoning and remediation steps.', tech: ['LLM', 'RCA', 'Prompting'],
        log: [['→ k8sgpt findings sent to gemini-1.5-pro','dim'], ['advisory: add PodDisruptionBudget','cy'], ['remediation PR drafted automatically','b'], ['✓ summary attached to run','g']] },
      { name: 'Slack',      stage: 'Notify',     ico: 'notify',    color: '#ffb648', desc: 'Delivers actionable alerts and deployment status to the team channel.', tech: ['Webhooks', 'ChatOps'],
        log: [['POST hooks.slack.com/#deploys','dim'], ['🟢 app-prod · a1f9c72 · 2m14s','g'], ['thread: AI advisory + RCA link','cy'], ['✓ team notified','g']] },
      { name: 'Production', stage: 'Live',       ico: 'live',      color: '#2fe08a', desc: 'Traffic served from a monitored, auto-scaled production environment.', tech: ['SLOs', 'Monitoring', 'Autoscale'],
        log: [['traffic shifting 0% → 100%','dim'], ['p95 latency 41ms · error rate 0.00%','b'], ['SLO budget healthy · 3 pods · HPA','dim'], ['✓ release live 🚀','g']] }
    ]
  },

  projects: [
    {
      slug: 'kubernetes', title: 'Automated Zomato Clone on AWS', accent: '#ff9900',
      desc: 'React frontend deployed to Amazon EKS via Docker, with a full Jenkins CI/CD pipeline wired to AWS CodeCommit — checkout, build, security scan and automated EKS deploy.',
      tags: ['EKS', 'Docker', 'Jenkins', 'Trivy', 'SonarQube', 'Grafana'],
      links: [{ label: 'View repo', href: 'https://github.com/iamohsin1273' }]
    },
    {
      slug: 'terraform', title: 'AWS Cloud Infrastructure Automation', accent: '#7b6bff',
      desc: 'Reusable Terraform modules provisioning VPCs, EKS, IAM and networking with remote state — repeatable, drift-free environments across dev and prod.',
      tags: ['Terraform', 'AWS', 'IAM', 'VPC', 'IaC'],
      links: [{ label: 'View repo', href: 'https://github.com/iamohsin1273' }]
    },
    {
      slug: 'prometheus', title: 'Production Kubernetes Monitoring', accent: '#e6522c',
      desc: 'Prometheus + Grafana observability stack on EKS with curated dashboards, recording rules and alerting for latency, saturation and error budgets.',
      tags: ['Prometheus', 'Grafana', 'Kubernetes', 'Alerting'],
      links: [{ label: 'View repo', href: 'https://github.com/iamohsin1273' }]
    },
    {
      slug: 'docker', title: 'Cloud-Native Deployments', accent: '#2496ed',
      desc: 'Containerized microservices with Helm charts and GitHub Actions delivery — zero-downtime rolling updates and environment promotion.',
      tags: ['Helm', 'GitHub Actions', 'Docker', 'GitOps'],
      links: [{ label: 'View repo', href: 'https://github.com/iamohsin1273' }]
    }
  ],

  architecture: [
    { name: 'Edge & CDN', sub: 'Global entrypoint', ico: 'edge', icon: '🌐', color: '#35e0e0',
      nodes: [ { b: 'Cloudflare', s: 'DNS · WAF · CDN' }, { b: 'Route 53', s: 'DNS routing' }, { b: 'ALB', s: 'TLS termination' } ] },
    { name: 'Compute', sub: 'Kubernetes on AWS', ico: 'compute', icon: '⎈', color: '#326ce5',
      nodes: [ { b: 'EKS Cluster', s: 'Managed control plane' }, { b: 'Node Groups', s: 'Auto-scaled workers' }, { b: 'HPA', s: 'Pod autoscaling' } ] },
    { name: 'Data & State', sub: 'Persistence layer', ico: 'data', icon: '🗄', color: '#7b6bff',
      nodes: [ { b: 'RDS', s: 'Managed Postgres' }, { b: 'S3', s: 'Object storage' }, { b: 'ElastiCache', s: 'Redis caching' } ] },
    { name: 'Observability', sub: 'See everything', ico: 'observe', icon: '📊', color: '#ff5a72',
      nodes: [ { b: 'Prometheus', s: 'Metrics' }, { b: 'Grafana', s: 'Dashboards' }, { b: 'Loki', s: 'Log aggregation' } ] }
  ],

  deploy: ['GitHub', 'GitHub Actions', 'Validation', 'Performance', 'GitHub Pages', 'Cloudflare', 'Production'],

  // Live Kubernetes cluster playground
  cluster: {
    deployment: 'platform-api',
    image: 'v1.4.2',
    nextImages: ['v1.5.0', 'v1.5.1', 'v1.6.0', 'v2.0.0'],
    workers: [
      { name: 'ip-10-0-1-24',  zone: 'us-east-1a', cpu: 4, mem: '8Gi' },
      { name: 'ip-10-0-2-51',  zone: 'us-east-1b', cpu: 4, mem: '8Gi' },
      { name: 'ip-10-0-3-88',  zone: 'us-east-1c', cpu: 4, mem: '8Gi' }
    ],
    minReplicas: 3,
    maxReplicas: 8,
    startReplicas: 3,
    targetCpu: 60          // HPA scale-up threshold (%)
  }
};

/* ---------------------------------------------------------
   2. HELPERS
--------------------------------------------------------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const NAV = [
  ['projects', 'Work'], ['stack', 'Stack'], ['experience', 'Experience'],
  ['architecture', 'Architecture'], ['cluster', 'Cluster'], ['contact', 'Contact']
];

/* Brand-logo helper — self-hosted monochrome SVGs in assets/icons.
   Emoji icons were replaced with these for consistent cross-OS rendering. */
const ICON_BASE = './assets/icons/';
function logo(slug, label) {
  return `<img class="logo logo--${slug}" src="${ICON_BASE}${slug}.svg" alt="" aria-hidden="true" width="24" height="24" loading="lazy" />`;
}
// Prefer a brand logo when a node/project provides a slug, else fall back to its emoji.
function glyph(o) { return o.slug ? logo(o.slug) : (o.icon || ''); }

/* Custom line-icon set for the DevSecOps pipeline — one cohesive stroke style,
   tinted per-stage via currentColor, instead of mismatched brand logos + emoji. */
const PIPE_ICONS = {
  source:      '<path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.9 2.6 5.8 2.9 5.8 2.9a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.3c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.2V21"/>',
  orchestrate: '<circle cx="12" cy="12" r="2.5"/><path d="M12 2v4M12 18v4M4.9 4.9l2.9 2.9M16.2 16.2l2.9 2.9M2 12h4M18 12h4M4.9 19.1l2.9-2.9M16.2 7.8l2.9-2.9"/>',
  build:       '<path d="M14.7 6.3a4 4 0 0 0-5.2 5.2l-6.2 6.2a1.4 1.4 0 0 0 0 2l.7.7a1.4 1.4 0 0 0 2 0l6.2-6.2a4 4 0 0 0 5.2-5.2l-2.4 2.4-2.3-.4-.4-2.3z"/>',
  test:        '<path d="M9 3h6M10 3v6.5L5.2 18a2 2 0 0 0 1.8 3h10a2 2 0 0 0 1.8-3L14 9.5V3"/><path d="M7.5 15h9"/>',
  quality:     '<path d="M3 6a9 4 0 0 0 18 0M3 6a9 4 0 0 1 18 0v12a9 4 0 0 1-18 0z"/><path d="m8.5 11.5 2 2 4-4"/>',
  scan:        '<path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/>',
  package:     '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/>',
  registry:    '<rect x="3" y="4" width="18" height="5" rx="1"/><rect x="3" y="10.5" width="18" height="5" rx="1"/><rect x="3" y="17" width="18" height="3.5" rx="1"/><path d="M6.5 6.5h.01M6.5 13h.01"/>',
  deploy:      '<path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10A15 15 0 0 1 12 2z"/><circle cx="12" cy="9" r="2"/><path d="M8 15l-3 4M16 15l3 4"/>',
  diagnose:    '<rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9.5 16h5"/><path d="M2 12h2M20 12h2"/>',
  reason:      '<path d="M12 3l1.9 4.7L18.6 9l-3.6 3 1.1 5-4.1-2.7L7.9 17l1.1-5-3.6-3 4.7-1.3z"/>',
  notify:      '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  live:        '<path d="M4.5 16.5 3 21l4.5-1.5M14 4l-8 8 4 4 8-8a4 4 0 0 0-4-4z" /><circle cx="15" cy="6" r="1.2"/>'
};
function pipeIcon(name) {
  const body = PIPE_ICONS[name] || PIPE_ICONS.build;
  return `<svg class="pipe-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

/* Line icons for the architecture tiers — same cohesive stroke style. */
const ARCH_ICONS = {
  edge:    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3z"/>',
  compute: '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/><circle cx="12" cy="7.5" r="1.4"/>',
  data:    '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  observe: '<path d="M3 3v18h18"/><path d="m7 15 3-4 3 2 4-6"/><circle cx="17" cy="7" r="1.3"/>'
};
function archIcon(name) {
  const body = ARCH_ICONS[name] || ARCH_ICONS.compute;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

/* ---------------------------------------------------------
   3. RENDERERS
--------------------------------------------------------- */
function renderNav() {
  const wrap = $('#navLinks');
  NAV.forEach(([id, label]) => {
    const a = el('a', null, label);
    a.href = '#' + id;
    a.dataset.target = id;
    wrap.appendChild(a);
  });
}

function renderHero() {
  $('#heroDesc').innerHTML = DATA.profile.summary;

  const tags = $('#profileTags');
  DATA.profile.tags.forEach(t => tags.appendChild(el('span', null, t)));

  const cta = $('#heroCta');
  const gh = el('a', 'btn btn--primary', iconGithub() + ' GitHub'); gh.href = DATA.profile.github; gh.target = '_blank'; gh.rel = 'noopener';
  const li = el('a', 'btn', iconLinkedin() + ' LinkedIn'); li.href = DATA.profile.linkedin; li.target = '_blank'; li.rel = 'noopener';
  const ct = el('a', 'btn', iconMail() + ' Contact'); ct.href = '#contact';
  cta.append(gh, li, ct);

  const strip = $('#heroStatStrip');
  DATA.heroStats.forEach(s => {
    const d = el('div', 'hero__stat');
    d.innerHTML = `<div class="n" data-count="${s.n}" data-suffix="${s.suffix || ''}" data-decimals="${s.decimals || 0}">0</div><div class="l">${s.label}</div>`;
    strip.appendChild(d);
  });
}

function renderStack() {
  const grid = $('#stackGrid');
  DATA.stack.forEach((cat, ci) => {
    const card = el('div', 'stack-cat');
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String((ci % 3) * 60));
    card.style.setProperty('--accent', cat.accent);
    const tools = cat.tools.map(t => `
      <div class="stack-tool" data-tier="${t.tier}">
        <span class="stack-tool__logo">${logo(t.slug)}</span>
        <span class="stack-tool__name">${t.n}</span>
        <span class="stack-tool__tier tier--${t.tier.toLowerCase()}">${t.tier}</span>
      </div>`).join('');
    card.innerHTML = `
      <div class="stack-cat__head">
        <h3 class="stack-cat__title">${cat.title}</h3>
        <p class="stack-cat__blurb">${cat.blurb}</p>
      </div>
      <div class="stack-cat__tools">${tools}</div>`;
    grid.appendChild(card);
  });
}

function renderTimeline() {
  const wrap = $('#timeline');
  DATA.experience.forEach(x => {
    const item = el('div', 'tl-item' + (x.type === 'edu' ? ' edu' : ''));
    item.setAttribute('data-aos', 'fade-up');
    item.innerHTML = `
      <div class="tl-item__meta">
        <span class="tl-item__date">${x.date}</span>
        <span class="tl-item__role">${x.role}</span>
      </div>
      <div class="tl-item__org">${x.org}</div>
      <ul class="tl-item__list">${x.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
    wrap.appendChild(item);
  });
}

/* ---- Flagship: live CI/CD build replay ----
   The DevSecOps pipeline actually "runs": a stage rail lights up green as each
   stage passes while realistic build-log lines stream into the console. */
function renderFlagship() {
  $('#flagshipTitle').textContent = DATA.flagship.title;
  $('#flagshipDesc').textContent = DATA.flagship.desc;

  const nodes = DATA.flagship.nodes;
  const rail = $('#ciRail');
  rail.innerHTML = '';
  nodes.forEach((n, i) => {
    const stage = el('button', 'ci-stage');
    stage.type = 'button';
    stage.setAttribute('role', 'listitem');
    stage.style.setProperty('--node', n.color);
    stage.dataset.i = i;
    stage.innerHTML = `
      <span class="ci-stage__ico">${pipeIcon(n.ico)}</span>
      <span class="ci-stage__body">
        <span class="ci-stage__name">${n.name}</span>
        <span class="ci-stage__stage">${n.stage}</span>
      </span>
      <span class="ci-stage__tick" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </span>`;
    stage.addEventListener('click', () => ci.jumpTo(i));
    rail.appendChild(stage);
  });

  ci.init(nodes);
}

/* CI replay engine — sequential, cancellable, restartable. */
const ci = {
  nodes: [], stages: [], running: false, token: 0, t0: 0, rafId: 0,
  els: {},

  init(nodes) {
    this.nodes = nodes;
    this.stages = $$('.ci-stage');
    this.els = {
      log: $('#ciLog'), status: $('#ciStatus'), timer: $('#ciTimer'),
      bar: $('#ciProgressBar'), run: $('#ciRun'), runLabel: $('#ciRunLabel'),
      meta: $('#ciMeta')
    };
    this.els.run.addEventListener('click', () => this.running ? this.reset(true) : this.start());
    this.reset(false);

    // Auto-run once when scrolled into view.
    if (!prefersReduced && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { io.disconnect(); setTimeout(() => this.start(), 400); }
        });
      }, { threshold: 0.35 });
      io.observe($('#ciRail'));
    }
  },

  sleep(ms) {
    const tok = this.token;
    return new Promise(res => setTimeout(() => (tok === this.token) && res(), ms));
  },

  setStatus(text, cls) {
    this.els.status.className = 'ci__status' + (cls ? ' ' + cls : '');
    this.els.status.innerHTML = `<i class="dot"></i> ${text}`;
  },

  print(text, cls) {
    const line = el('div', 'ci__line' + (cls ? ' ' + cls : ''));
    line.textContent = text;
    this.els.log.appendChild(line);
    this.els.log.scrollTop = this.els.log.scrollHeight;
  },

  clock() {
    const tick = () => {
      if (!this.running) return;
      const s = (performance.now() - this.t0) / 1000;
      this.els.timer.textContent = s.toFixed(1).padStart(4, '0') + 's';
      this.rafId = requestAnimationFrame(tick);
    };
    tick();
  },

  reset(clearLog) {
    this.token++;
    this.running = false;
    cancelAnimationFrame(this.rafId);
    this.stages.forEach(s => s.classList.remove('done', 'active'));
    this.els.bar.style.width = '0%';
    this.els.timer.textContent = '00.0s';
    this.setStatus('idle', '');
    this.els.run.classList.remove('is-running');
    this.els.runLabel.textContent = 'Run pipeline';
    if (clearLog) this.els.log.innerHTML = '';
  },

  async start() {
    this.reset(false);
    this.els.log.innerHTML = '';
    const tok = ++this.token;
    this.running = true;
    this.t0 = performance.now();
    this.clock();
    this.els.run.classList.add('is-running');
    this.els.runLabel.textContent = 'Running…';
    this.setStatus('running', 'is-run');
    this.print('$ jenkins build --pipeline devsecops', 'cy');
    await this.sleep(500);
    if (tok !== this.token) return;

    for (let i = 0; i < this.nodes.length; i++) {
      await this.runStage(i, tok);
      if (tok !== this.token) return;
    }

    this.running = false;
    cancelAnimationFrame(this.rafId);
    this.setStatus('passed', 'is-ok');
    this.els.run.classList.remove('is-running');
    this.els.runLabel.textContent = 'Replay';
    this.print('', '');
    this.print('✓ Pipeline succeeded — all 13 stages green.', 'g');
  },

  async runStage(i, tok) {
    const n = this.nodes[i];
    const stage = this.stages[i];
    stage.classList.add('active');
    stage.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });

    this.print('', '');
    this.print(`▶ [${String(i + 1).padStart(2, '0')}/13] ${n.stage.toUpperCase()} · ${n.name}`, 'b');

    const lines = n.log || [[`Running ${n.name}…`, 'dim'], ['done', 'g']];
    for (const [text, cls] of lines) {
      await this.sleep(230 + Math.round(text.length * 4));
      if (tok !== this.token) return;
      this.print('  ' + text, cls);
    }

    await this.sleep(180);
    if (tok !== this.token) return;
    stage.classList.remove('active');
    stage.classList.add('done');
    this.els.bar.style.width = `${Math.round(((i + 1) / this.nodes.length) * 100)}%`;
  },

  jumpTo(target) {
    // Instant fast-forward: mark stages up to target done and dump their logs.
    this.token++;
    this.running = false;
    cancelAnimationFrame(this.rafId);
    this.els.log.innerHTML = '';
    this.stages.forEach((s, idx) => {
      s.classList.toggle('done', idx <= target);
      s.classList.toggle('active', idx === target);
    });
    for (let i = 0; i <= target; i++) {
      const n = this.nodes[i];
      this.print('', '');
      this.print(`▶ [${String(i + 1).padStart(2, '0')}/13] ${n.stage.toUpperCase()} · ${n.name}`, 'b');
      (n.log || []).forEach(([text, cls]) => this.print('  ' + text, cls));
    }
    this.els.bar.style.width = `${Math.round(((target + 1) / this.nodes.length) * 100)}%`;
    this.setStatus(`stage ${target + 1}/13`, 'is-run');
    this.els.run.classList.remove('is-running');
    this.els.runLabel.textContent = 'Run pipeline';
    this.stages[target].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
};

function renderProjects() {
  const grid = $('#projectsGrid');
  DATA.projects.forEach(p => {
    const card = el('div', 'project');
    card.setAttribute('data-aos', 'fade-up');
    card.style.setProperty('--accent', p.accent);
    card.innerHTML = `
      <div class="project__ico" style="background:${p.accent}">${glyph(p)}</div>
      <div class="project__title">${p.title}</div>
      <div class="project__desc">${p.desc}</div>
      <div class="project__tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="project__links">${p.links.map(l => `<a href="${l.href}" target="_blank" rel="noopener">${l.label} ↗</a>`).join('')}</div>`;
    grid.appendChild(card);
  });
}

function renderArchitecture() {
  const wrap = $('#arch');
  const tiers = DATA.architecture;
  tiers.forEach((t, ti) => {
    const tier = el('div', 'arch__tier');
    tier.setAttribute('data-aos', 'fade-up');
    tier.style.setProperty('--tier', t.color);
    tier.style.setProperty('--i', ti);
    tier.innerHTML = `
      <div class="arch__glow"></div>
      <div class="arch__card">
        <div class="arch__sheen"></div>
        <div class="arch__tier-head">
          <div class="arch__ico" data-depth="40">${archIcon(t.ico)}</div>
          <div class="arch__tier-meta" data-depth="26">
            <div class="arch__tier-name">${t.name}</div>
            <div class="arch__tier-sub">${t.sub}</div>
          </div>
          <span class="arch__tier-num" data-depth="18">${String(ti + 1).padStart(2, '0')}</span>
        </div>
        <div class="arch__nodes" data-depth="30">
          ${t.nodes.map(n => `
            <div class="arch__node">
              <span class="arch__node-dot"></span>
              <b>${n.b}</b><span>${n.s}</span>
            </div>`).join('')}
        </div>
      </div>`;
    wrap.appendChild(tier);

    // Flow connector between tiers — traffic descends through the stack.
    if (ti < tiers.length - 1) {
      const flow = el('div', 'arch__flow');
      flow.setAttribute('aria-hidden', 'true');
      flow.innerHTML = `<span class="arch__flow-line"></span><span class="arch__flow-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>`;
      wrap.appendChild(flow);
    }
  });
}

/* 3D tilt — tiers follow the cursor with parallax-depth layers and a moving sheen. */
function setupArchTilt() {
  if (prefersReduced) return;
  const MAX = 7;                                   // max tilt in degrees
  $$('.arch__tier').forEach(tier => {
    const card = $('.arch__card', tier);
    const sheen = $('.arch__sheen', tier);
    const layers = $$('[data-depth]', tier);
    let raf = 0;

    function onMove(e) {
      const r = tier.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width  - 0.5;   // -0.5 … 0.5
      const py = (e.clientY - r.top)  / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `rotateX(${(-py * MAX).toFixed(2)}deg) rotateY(${(px * MAX).toFixed(2)}deg)`;
        layers.forEach(l => {
          const d = +l.dataset.depth;
          l.style.transform = `translate3d(${(px * d * 0.6).toFixed(1)}px, ${(py * d * 0.6).toFixed(1)}px, ${d}px)`;
        });
        sheen.style.setProperty('--mx', ((px + 0.5) * 100).toFixed(1) + '%');
        sheen.style.setProperty('--my', ((py + 0.5) * 100).toFixed(1) + '%');
        sheen.style.opacity = '1';
      });
    }
    function onLeave() {
      cancelAnimationFrame(raf);
      card.style.transform = '';
      layers.forEach(l => { l.style.transform = ''; });
      sheen.style.opacity = '0';
    }
    tier.addEventListener('pointermove', onMove);
    tier.addEventListener('pointerleave', onLeave);
  });
}

function renderContact() {
  const grid = $('#contactGrid');
  const cards = [
    { icon: iconMail(),     label: 'Email',    value: DATA.profile.email,    href: 'mailto:' + DATA.profile.email },
    { icon: iconGithub(),   label: 'GitHub',   value: 'iamohsin1273',        href: DATA.profile.github },
    { icon: iconLinkedin(), label: 'LinkedIn', value: 'in/iam-mohsin',       href: DATA.profile.linkedin }
  ];
  cards.forEach(c => {
    const a = el('a', 'contact__card');
    a.href = c.href;
    if (c.href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
    a.innerHTML = `<div class="contact__ico">${c.icon}</div><div class="contact__label">${c.label}</div><div class="contact__value">${c.value}</div>`;
    grid.appendChild(a);
  });
}

function renderFooter() {
  $('#footerYear').textContent = '© ' + new Date().getFullYear() + ' Mohamed Mohsin';
  const d = $('#footerDeploy');
  DATA.deploy.forEach((s, i) => {
    d.appendChild(el('span', 'step', s));
    if (i < DATA.deploy.length - 1) d.appendChild(el('span', 'arr', '→'));
  });
}

/* ---------- inline SVG icons ---------- */
function iconGithub() { return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>'; }
function iconLinkedin() { return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 3H3.6C2.7 3 2 3.7 2 4.6v14.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V4.6c0-.9-.7-1.6-1.6-1.6zM8.3 18.3H5.6V9.7h2.7v8.6zM7 8.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zm11.3 9.8h-2.7v-4.2c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.7v4.2H10s.1-6.8 0-8.6h2.7v1.2c.4-.6 1-1.4 2.5-1.4 1.8 0 3.1 1.2 3.1 3.7v5.1z"/></svg>'; }
function iconMail() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'; }

/* ---------------------------------------------------------
   4. ANIMATIONS & BEHAVIOUR
--------------------------------------------------------- */
function runLoader() {
  const bar = $('#loaderBar'), pct = $('#loaderPct'), label = $('#loaderLabel'), loader = $('#loader');
  const steps = ['Booting kernel', 'Mounting volumes', 'Connecting to AWS', 'Starting Kubernetes', 'Platform ready'];
  let p = 0;
  const tick = setInterval(() => {
    p = Math.min(100, p + Math.random() * 18 + 6);
    bar.style.width = p + '%';
    pct.textContent = Math.floor(p) + '%';
    label.textContent = steps[Math.min(steps.length - 1, Math.floor(p / 20))];
    if (p >= 100) {
      clearInterval(tick);
      setTimeout(() => { loader.classList.add('hide'); startIntro(); }, 350);
    }
  }, 220);
  // safety fallback
  setTimeout(() => { if (!loader.classList.contains('hide')) { loader.classList.add('hide'); startIntro(); } }, 4000);
}

let introStarted = false;
function startIntro() {
  if (introStarted) return; introStarted = true;
  typeRoles();
  typeBootLog();
  if (window.gsap) {
    gsap.from('.hero__title', { y: 30, opacity: 0, duration: .8, ease: 'power3.out' });
  }
}

function typeRoles() {
  const target = $('#typedRole');
  if (window.Typed) {
    new Typed(target, {
      strings: DATA.roles.map(r => `<span class="grad">${r}</span>`),
      typeSpeed: 55, backSpeed: 28, backDelay: 1600, loop: true, smartBackspace: false
    });
  } else {
    target.innerHTML = `<span class="grad">${DATA.roles[0]}</span>`;
  }
}

function typeBootLog() {
  const log = $('#bootLog');
  let i = 0;
  function next() {
    if (i >= DATA.boot.length) return;
    const b = DATA.boot[i];
    const line = el('div');
    line.innerHTML = `<span class="pt">$</span> ${b.t}`;
    log.appendChild(line);
    setTimeout(() => {
      const res = el('div'); res.innerHTML = `<span class="ok">✓</span> ${b.s}`;
      log.appendChild(res);
      // keep only last 6 lines
      while (log.children.length > 6) log.removeChild(log.firstChild);
      i++;
      setTimeout(next, 900);
    }, 500);
  }
  next();
}

/* count-up on view */
function animateCount(node) {
  const target = parseFloat(node.dataset.count);
  const decimals = parseInt(node.dataset.decimals || '0', 10);
  const suffix = node.dataset.suffix || '';
  if (prefersReduced) { node.textContent = target.toFixed(decimals) + suffix; return; }
  const dur = 1400, t0 = performance.now();
  function step(now) {
    const p = Math.min(1, (now - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    node.textContent = (target * eased).toFixed(decimals) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else node.textContent = target.toFixed(decimals) + suffix;
  }
  requestAnimationFrame(step);
}

function setupObservers() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('[data-count]').forEach(n => { if (!n.dataset.done) { n.dataset.done = '1'; animateCount(n); } });
      io.unobserve(e.target);
    });
  }, { threshold: 0.25 });
  $$('#hero').forEach(s => io.observe(s));
  // observe individual elements that hold counters
  $$('.hero__stat').forEach(s => io.observe(s));
}

/* scrollspy + progress + nav bg */
function setupScroll() {
  const nav = $('#nav'), prog = $('#scrollProgress');
  const links = $$('#navLinks a');
  const sections = links.map(l => $('#' + l.dataset.target)).filter(Boolean);
  function onScroll() {
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    nav.classList.toggle('scrolled', y > 30);
    let cur = sections[0]?.id;
    sections.forEach(s => { if (s.getBoundingClientRect().top <= 120) cur = s.id; });
    links.forEach(l => l.classList.toggle('active', l.dataset.target === cur));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* mobile menu */
function setupMenu() {
  const burger = $('#navBurger'), links = $('#navLinks');
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  $$('#navLinks a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded', 'false');
  }));
}

/* cursor glow + particles */
function setupCursor() {
  const glow = $('#cursorGlow');
  if (window.matchMedia('(hover: none)').matches) { glow.style.display = 'none'; return; }
  let tx = 0, ty = 0, cx = 0, cy = 0;
  window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
  (function loop() {
    cx += (tx - cx) * 0.15; cy += (ty - cy) * 0.15;
    glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  })();
}

function setupParticles() {
  if (prefersReduced) return;
  const layer = $('#particles');
  const count = window.innerWidth < 720 ? 22 : 46;
  for (let i = 0; i < count; i++) {
    const p = el('span', 'particle');
    const size = Math.random() * 3 + 1;
    p.style.width = p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = Math.random() * 100 + 'vh';
    p.style.opacity = (Math.random() * 0.5 + 0.15).toFixed(2);
    const dur = (Math.random() * 18 + 12).toFixed(1);
    p.style.animation = `floatP ${dur}s linear ${(-Math.random() * dur).toFixed(1)}s infinite`;
    layer.appendChild(p);
  }
  // inject keyframes once
  const style = document.createElement('style');
  style.textContent = '@keyframes floatP{0%{transform:translateY(0)}50%{transform:translateY(-40px)}100%{transform:translateY(0)}}';
  document.head.appendChild(style);
}

/* profile card 3D tilt (manual + vanilla-tilt fallback) */
function setupProfileCard() {
  const card = $('#profileCard'), inner = $('#profileInner'), shine = $('.profile-card__shine');
  if (!card || prefersReduced) return;
  if (window.VanillaTilt) {
    VanillaTilt.init(inner, { max: 12, speed: 400, glare: true, 'max-glare': 0.25, scale: 1.02 });
  }
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    const my = ((e.clientY - r.top) / r.height) * 100;
    if (shine) { shine.style.setProperty('--mx', mx + '%'); shine.style.setProperty('--my', my + '%'); }
    if (!window.VanillaTilt) {
      const rx = ((my - 50) / 50) * -8, ry = ((mx - 50) / 50) * 8;
      inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
  });
  card.addEventListener('mouseleave', () => { if (!window.VanillaTilt) inner.style.transform = ''; });
}

/* profile image fallback across common paths */
function setupProfileImage() {
  const img = $('#profileImg');
  const paths = DATA.profile.photos.slice();
  let idx = 0;
  img.addEventListener('error', () => {
    idx++;
    if (idx < paths.length) { img.src = paths[idx]; }
    else {
      // final SVG monogram fallback
      const initials = DATA.profile.name.split(' ').map(w => w[0]).join('').slice(0, 2);
      img.src = 'data:image/svg+xml,' + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="460"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4d8dff"/><stop offset="1" stop-color="#b06bff"/></linearGradient></defs><rect width="400" height="460" fill="url(#g)"/><text x="50%" y="52%" font-size="140" font-family="sans-serif" font-weight="700" fill="#fff" text-anchor="middle" dominant-baseline="middle">${initials}</text></svg>`
      );
    }
  });
  // set first candidate (HTML already points to the deployed asset path)
  if (!img.getAttribute('src')) img.src = paths[0];
}

/* ---------------------------------------------------------
   5. KUBERNETES CLUSTER PLAYGROUND
   A simulated, operable cluster. Pods have a real lifecycle
   (Pending → ContainerCreating → Running → Terminating), the
   scheduler spreads them across worker nodes, killed pods
   self-heal, rolling updates cycle the image one pod at a time,
   and an HPA scales replicas from simulated CPU load.
--------------------------------------------------------- */
const k8s = {
  cfg: null, pods: [], seq: 0, cpu: 6, desired: 0,
  loadOn: false, hpaState: 'idle', busy: false,
  loadTimer: null, hpaTimer: null,
  els: {},

  init() {
    this.cfg = DATA.cluster;
    this.desired = this.cfg.startReplicas;
    this.image = this.cfg.image;
    this.els = {
      nodes:  $('#k8sNodes'),  events: $('#k8sEvents'),
      ready:  $('#k8sReady'),  desired: $('#k8sDesired'),
      image:  $('#k8sImage'),  hpa: $('#k8sHpa'),
      cpu:    $('#k8sCpu'),    cpuBar: $('#k8sCpuBar'),
      deploy: $('#k8sDeploy'), loadBtn: $('#k8sLoadBtn')
    };
    this.els.deploy.textContent = this.cfg.deployment;
    this.els.image.textContent = this.image;

    // Render the worker-node shells once; pods slot into them.
    this.els.nodes.innerHTML = '';
    this.cfg.workers.forEach((w, i) => {
      const node = el('div', 'k8s-node');
      node.dataset.node = i;
      node.innerHTML = `
        <div class="k8s-node__head">
          <span class="k8s-node__ico">${pipeIcon('deploy')}</span>
          <div class="k8s-node__meta">
            <b>${w.name}</b>
            <span>${w.zone} · ${w.cpu} vCPU · ${w.mem}</span>
          </div>
          <span class="k8s-node__badge">Ready</span>
        </div>
        <div class="k8s-node__pods" data-pods="${i}"></div>`;
      this.els.nodes.appendChild(node);
    });

    // Wire controls.
    $$('.k8s__btn').forEach(btn => {
      btn.addEventListener('click', () => this.action(btn.dataset.act));
    });

    this.event('cluster', `Connected to eks-prod · ${this.cfg.workers.length} nodes Ready`, 'dim');

    // Boot the initial replicas when scrolled into view.
    if (!prefersReduced && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { io.disconnect(); setTimeout(() => this.boot(), 350); }
        });
      }, { threshold: 0.3 });
      io.observe(this.els.nodes);
    } else {
      this.boot(true);
    }

    this.startHpaLoop();
  },

  // ---- helpers ----
  podName() {
    const hash = (this.seq++).toString(16).padStart(4, '0');
    const rnd = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // Deterministic-ish suffix without Math.random (varies by seq).
    let suf = '';
    for (let i = 0; i < 5; i++) suf += rnd[(this.seq * 7 + i * 13) % rnd.length];
    return `${this.cfg.deployment}-${hash}-${suf}`;
  },

  // Least-loaded node → spreads pods for anti-affinity feel.
  pickNode() {
    const counts = this.cfg.workers.map((_, i) =>
      this.pods.filter(p => p.node === i && p.phase !== 'Terminating').length);
    let min = 0;
    counts.forEach((c, i) => { if (c < counts[min]) min = i; });
    return min;
  },

  runningCount() { return this.pods.filter(p => p.phase === 'Running').length; },

  event(kind, msg, cls) {
    const line = el('div', 'k8s-ev' + (cls ? ' ' + cls : ''));
    line.innerHTML = `<span class="k8s-ev__k">${kind}</span><span>${msg}</span>`;
    this.els.events.appendChild(line);
    while (this.els.events.children.length > 60) this.els.events.removeChild(this.els.events.firstChild);
    this.els.events.scrollTop = this.els.events.scrollHeight;
  },

  sync() {
    this.els.ready.textContent = this.runningCount();
    this.els.desired.textContent = this.desired;
    this.els.image.textContent = this.image;
    const c = Math.round(this.cpu);
    this.els.cpu.textContent = c + '%';
    this.els.cpuBar.style.width = Math.min(100, c) + '%';
    this.els.cpuBar.classList.toggle('hot', c >= this.cfg.targetCpu);
    this.els.hpa.textContent = `${this.hpaState} · ${this.cfg.minReplicas}–${this.cfg.maxReplicas}`;
  },

  // ---- pod lifecycle ----
  spawnPod() {
    const node = this.pickNode();
    const pod = { id: ++this.seq, name: this.podName(), node, phase: 'Pending', image: this.image, restarts: 0 };
    this.pods.push(pod);

    const chip = el('div', 'k8s-pod is-pending');
    chip.dataset.id = pod.id;
    chip.innerHTML = `<i class="k8s-pod__dot"></i><span class="k8s-pod__name">${pod.name.split('-').slice(-1)[0]}</span>`;
    chip.title = `${pod.name}\nimage: ${pod.image}`;
    $(`[data-pods="${node}"]`, this.els.nodes).appendChild(chip);
    pod.chip = chip;

    this.event('scheduler', `Scheduled ${pod.name} → ${this.cfg.workers[node].name}`, 'dim');

    // Pending → ContainerCreating → Running
    this.after(420, () => {
      if (pod.phase !== 'Pending') return;
      pod.phase = 'ContainerCreating';
      chip.className = 'k8s-pod is-creating';
      this.event('kubelet', `Pulling image "${pod.image}" for ${pod.name.split('-').slice(-1)[0]}`, 'dim');
    });
    this.after(1150, () => {
      if (pod.phase !== 'ContainerCreating') return;
      pod.phase = 'Running';
      chip.className = 'k8s-pod is-running';
      this.event('kubelet', `Started ${pod.name.split('-').slice(-1)[0]} · readiness ✓`, 'g');
      this.sync();
    });
    this.sync();
    return pod;
  },

  removePod(pod, reason) {
    if (!pod || pod.phase === 'Terminating') return;
    pod.phase = 'Terminating';
    if (pod.chip) pod.chip.className = 'k8s-pod is-terminating';
    this.after(700, () => {
      if (pod.chip && pod.chip.parentNode) pod.chip.parentNode.removeChild(pod.chip);
      this.pods = this.pods.filter(p => p !== pod);
      this.sync();
    });
    if (reason) this.event('kubelet', reason, 'y');
  },

  // Bring running pods up to `desired`, remove extras.
  reconcile(silent) {
    const alive = this.pods.filter(p => p.phase !== 'Terminating');
    let diff = this.desired - alive.length;
    while (diff > 0) { this.spawnPod(); diff--; }
    if (diff < 0) {
      // Remove the newest extras.
      const extras = alive.slice(diff);
      extras.forEach(p => this.removePod(p, `Scaling down — stopping ${p.name.split('-').slice(-1)[0]}`));
    }
    if (!silent) this.event('deploy', `Reconciling ${this.cfg.deployment} → ${this.desired} replicas`, 'cy');
  },

  boot(instant) {
    this.event('deploy', `Rolling out ${this.cfg.deployment}:${this.image} · ${this.desired} replicas`, 'cy');
    for (let i = 0; i < this.desired; i++) {
      if (instant) this.spawnPod();
      else this.after(i * 260, () => this.spawnPod());
    }
  },

  // ---- user actions ----
  action(act) {
    switch (act) {
      case 'scale-up':   return this.scale(+1);
      case 'scale-down': return this.scale(-1);
      case 'kill':       return this.kill();
      case 'rollout':    return this.rollout();
      case 'load':       return this.toggleLoad();
    }
  },

  scale(delta) {
    const next = Math.max(1, Math.min(this.cfg.maxReplicas, this.desired + delta));
    if (next === this.desired) {
      this.event('hpa', delta > 0 ? `Already at max ${this.cfg.maxReplicas} replicas` : 'Minimum 1 replica', 'y');
      return;
    }
    this.desired = next;
    this.event('kubectl', `scaled deployment/${this.cfg.deployment} to ${this.desired}`, 'b');
    this.reconcile(true);
    this.sync();
  },

  kill() {
    const running = this.pods.filter(p => p.phase === 'Running');
    if (!running.length) { this.event('cluster', 'No running pods to kill', 'y'); return; }
    // Kill a pod, deterministically pick by seq to avoid Math.random.
    const victim = running[(this.seq) % running.length];
    victim.chip && victim.chip.classList.add('is-killed');
    this.event('pod', `${victim.name.split('-').slice(-1)[0]} killed (SIGKILL) — node reported NotReady`, 'r');
    this.removePod(victim);
    // ReplicaSet notices the gap and self-heals.
    this.after(900, () => {
      this.event('replicaset', 'Observed 1 missing replica — creating replacement', 'cy');
      this.reconcile(true);
    });
  },

  async rollout() {
    if (this.busy) { this.event('deploy', 'A rollout is already in progress', 'y'); return; }
    const pool = this.cfg.nextImages.filter(v => v !== this.image);
    const nextImg = pool[(this.seq) % pool.length] || this.cfg.nextImages[0];
    this.busy = true;
    this.setBtns(true);
    this.event('deploy', `kubectl set image ${this.cfg.deployment}=${nextImg} · RollingUpdate (maxSurge 1)`, 'b');
    const old = this.image;
    this.image = nextImg;
    this.sync();

    // Replace old-version pods one at a time: surge a new pod, then retire an old one.
    const stale = this.pods.filter(p => p.image === old && p.phase !== 'Terminating');
    for (const p of stale) {
      const fresh = this.spawnPod();               // new pod on the new image (surge)
      await this.wait(1250);                        // wait until it's Running-ish
      this.removePod(p, `Terminating ${p.name.split('-').slice(-1)[0]} (old revision)`);
      await this.wait(750);
      void fresh;
    }
    this.event('deploy', `Rollout complete — ${this.cfg.deployment} now at ${nextImg} ✓`, 'g');
    this.busy = false;
    this.setBtns(false);
  },

  toggleLoad() {
    this.loadOn = !this.loadOn;
    this.els.loadBtn.classList.toggle('is-active', this.loadOn);
    this.event('loadgen', this.loadOn ? 'Traffic ramp started — 200 → 4k req/s' : 'Traffic ramp stopped', this.loadOn ? 'y' : 'dim');
  },

  // ---- HPA + CPU simulation loop ----
  startHpaLoop() {
    if (prefersReduced) return;
    const tick = () => {
      const running = Math.max(1, this.runningCount());
      // Load pushes CPU up; more replicas spread it out. Drift toward a target.
      const pressure = this.loadOn ? 78 + (this.seq % 12) : 6 + (this.seq % 5);
      const perPod = pressure * (this.desired / running);   // fewer ready pods → hotter
      const target = Math.min(99, perPod);
      this.cpu += (target - this.cpu) * 0.25;

      // HPA control loop.
      const c = this.cpu;
      if (c >= this.cfg.targetCpu && this.desired < this.cfg.maxReplicas && !this.busy) {
        this.hpaState = 'scaling ▲';
        this.desired++;
        this.event('hpa', `CPU ${Math.round(c)}% > ${this.cfg.targetCpu}% target — scaling up to ${this.desired}`, 'cy');
        this.reconcile(true);
      } else if (c < this.cfg.targetCpu * 0.5 && this.desired > this.cfg.minReplicas && !this.loadOn && !this.busy) {
        this.hpaState = 'scaling ▼';
        this.desired--;
        this.event('hpa', `CPU ${Math.round(c)}% low — scaling down to ${this.desired}`, 'dim');
        this.reconcile(true);
      } else {
        this.hpaState = this.loadOn ? 'watching' : 'idle';
      }
      this.sync();
      this.hpaTimer = setTimeout(tick, 2200);
    };
    this.hpaTimer = setTimeout(tick, 2200);
  },

  setBtns(disabled) {
    $$('.k8s__btn').forEach(b => {
      if (b.dataset.act === 'load') return;         // load stays togglable
      b.disabled = disabled;
    });
  },

  // Timers that we don't need to cancel individually.
  after(ms, fn) { return setTimeout(fn, ms); },
  wait(ms) { return new Promise(res => setTimeout(res, ms)); }
};

function setupCluster() {
  if (!$('#k8sNodes')) return;
  k8s.init();
}

/* ---------------------------------------------------------
   6. INIT
--------------------------------------------------------- */
function init() {
  renderNav();
  renderHero();
  renderStack();
  renderTimeline();
  renderFlagship();
  renderProjects();
  renderArchitecture();
  renderContact();
  renderFooter();

  setupProfileImage();
  setupProfileCard();
  setupCursor();
  setupParticles();
  setupMenu();
  setupScroll();
  setupObservers();
  setupCluster();
  setupArchTilt();

  if (window.AOS) AOS.init({ duration: 700, once: true, offset: 80, disable: prefersReduced });

  runLoader();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
