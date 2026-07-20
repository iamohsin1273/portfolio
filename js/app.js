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
      { name: 'GitHub',     stage: 'Source',     ico: 'source',    color: '#8b949e', desc: 'Developers push to main; webhooks trigger the pipeline automatically.', tech: ['Git', 'Webhooks', 'Branch protection'] },
      { name: 'Jenkins',    stage: 'Orchestrate',ico: 'orchestrate',color: '#e0662b', desc: 'Declarative pipeline orchestrates every downstream stage on ephemeral agents.', tech: ['Jenkinsfile', 'Groovy', 'Agents'] },
      { name: 'Build',      stage: 'Compile',    ico: 'build',     color: '#4d8dff', desc: 'Application is compiled and packaged into reproducible artifacts.', tech: ['Maven', 'Node', 'Cache'] },
      { name: 'Unit Tests', stage: 'Verify',     ico: 'test',      color: '#2fe08a', desc: 'Automated unit and integration tests gate the build on every run.', tech: ['JUnit', 'Coverage', 'Reports'] },
      { name: 'SonarQube',  stage: 'Quality',    ico: 'quality',   color: '#4e9bcd', desc: 'Static analysis enforces code quality gates and blocks regressions.', tech: ['SAST', 'Quality Gate', 'Debt'] },
      { name: 'Trivy',      stage: 'Scan',       ico: 'scan',      color: '#7b6bff', desc: 'Scans dependencies and images for CVEs before anything ships.', tech: ['CVE scan', 'SBOM', 'Policy'] },
      { name: 'Docker',     stage: 'Package',    ico: 'package',   color: '#2496ed', desc: 'Builds a minimal, multi-stage container image for the service.', tech: ['Multi-stage', 'BuildKit'] },
      { name: 'Harbor',     stage: 'Registry',   ico: 'registry',  color: '#35e0e0', desc: 'Signed images are pushed to a private, scanned registry.', tech: ['Registry', 'Cosign', 'Replication'] },
      { name: 'Kubernetes', stage: 'Deploy',     ico: 'deploy',    color: '#326ce5', desc: 'GitOps rollout to EKS with health checks and automatic rollback.', tech: ['EKS', 'Rollout', 'HPA'] },
      { name: 'K8sGPT',     stage: 'Diagnose',   ico: 'diagnose',  color: '#b06bff', desc: 'Scans cluster state and surfaces issues in plain language.', tech: ['Analyzers', 'CRDs'] },
      { name: 'OpenAI',     stage: 'Reason',     ico: 'reason',    color: '#10a37f', desc: 'Enriches diagnostics with root-cause reasoning and remediation steps.', tech: ['LLM', 'RCA', 'Prompting'] },
      { name: 'Slack',      stage: 'Notify',     ico: 'notify',    color: '#ffb648', desc: 'Delivers actionable alerts and deployment status to the team channel.', tech: ['Webhooks', 'ChatOps'] },
      { name: 'Production', stage: 'Live',       ico: 'live',      color: '#2fe08a', desc: 'Traffic served from a monitored, auto-scaled production environment.', tech: ['SLOs', 'Monitoring', 'Autoscale'] }
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
    { name: 'Edge & CDN', sub: 'Global entrypoint', icon: '🌐', color: '#35e0e0',
      nodes: [ { b: 'Cloudflare', s: 'DNS · WAF · CDN' }, { b: 'Route 53', s: 'DNS routing' }, { b: 'ALB', s: 'TLS termination' } ] },
    { name: 'Compute', sub: 'Kubernetes on AWS', icon: '⎈', color: '#326ce5',
      nodes: [ { b: 'EKS Cluster', s: 'Managed control plane' }, { b: 'Node Groups', s: 'Auto-scaled workers' }, { b: 'HPA', s: 'Pod autoscaling' } ] },
    { name: 'Data & State', sub: 'Persistence layer', icon: '🗄', color: '#7b6bff',
      nodes: [ { b: 'RDS', s: 'Managed Postgres' }, { b: 'S3', s: 'Object storage' }, { b: 'ElastiCache', s: 'Redis caching' } ] },
    { name: 'Observability', sub: 'See everything', icon: '📊', color: '#ff5a72',
      nodes: [ { b: 'Prometheus', s: 'Metrics' }, { b: 'Grafana', s: 'Dashboards' }, { b: 'Loki', s: 'Log aggregation' } ] }
  ],

  deploy: ['GitHub', 'GitHub Actions', 'Validation', 'Performance', 'GitHub Pages', 'Cloudflare', 'Production'],

  // Interactive terminal
  terminal: {
    commands: {
      'kubectl get pods': [
        'NAME                          READY   STATUS    RESTARTS   AGE',
        'platform-api-7d9f8c-abc12     1/1     Running   0          4d',
        'platform-web-6c7b5d-def34     1/1     Running   0          4d',
        'prometheus-0                  2/2     Running   0          9d',
        'grafana-5f6a7b-ghi56          1/1     Running   0          9d'
      ],
      'terraform apply': [
        'Terraform will perform the following actions:',
        '  + aws_eks_cluster.prod',
        '  + aws_s3_bucket.artifacts',
        '  + module.vpc.aws_vpc.this',
        '',
        'Apply complete! Resources: 3 added, 0 changed, 0 destroyed.'
      ],
      'docker ps': [
        'CONTAINER ID   IMAGE                 STATUS         PORTS',
        'a1b2c3d4e5f6   platform-api:1.8.0    Up 4 days      0.0.0.0:8080->8080/tcp',
        'f6e5d4c3b2a1   grafana:11.1          Up 9 days      0.0.0.0:3000->3000/tcp'
      ],
      'aws s3 ls': [
        '2026-01-12 09:14:22 mohsin-platform-artifacts',
        '2026-02-03 17:41:08 mohsin-terraform-state',
        '2026-03-21 11:02:55 mohsin-backups'
      ],
      'helm install monitoring': [
        'NAME: monitoring',
        'STATUS: deployed',
        'NAMESPACE: observability',
        'Prometheus + Grafana stack deployed successfully.'
      ],
      'kubectl get deployments': [
        'NAME            READY   UP-TO-DATE   AVAILABLE   AGE',
        'platform-api    3/3     3            3           4d',
        'platform-web    2/2     2            2           4d'
      ],
      'git push origin main': [
        'Enumerating objects: 12, done.',
        'To github.com:iamohsin1273/platform.git',
        '   9f3a1c2..7b6e4d8  main -> main',
        'Pipeline triggered ✓'
      ],
      'ansible-playbook site.yml': [
        'PLAY [Configure platform nodes] ***********************',
        'TASK [Install packages] ... ok',
        'TASK [Harden sshd] ... changed',
        'PLAY RECAP : ok=14  changed=3  failed=0'
      ],
      'jenkins build pipeline': [
        '[Pipeline] stage: Build ✓',
        '[Pipeline] stage: Test ✓',
        '[Pipeline] stage: Scan (Trivy/Sonar) ✓',
        '[Pipeline] stage: Deploy to EKS ✓',
        'Finished: SUCCESS'
      ]
    },
    autoplay: ['kubectl get pods', 'terraform apply', 'docker ps', 'aws s3 ls', 'helm install monitoring', 'jenkins build pipeline']
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
  ['architecture', 'Architecture'], ['terminal', 'Terminal'], ['contact', 'Contact']
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

function renderFlagship() {
  $('#flagshipTitle').textContent = DATA.flagship.title;
  $('#flagshipDesc').textContent = DATA.flagship.desc;
  const pipe = $('#pipeline');
  DATA.flagship.nodes.forEach((n, i) => {
    const node = el('div', 'pipe-node');
    node.setAttribute('role', 'listitem');
    node.style.setProperty('--node', n.color);
    node.dataset.i = i;
    node.innerHTML = `
      <span class="pipe-node__idx">${String(i + 1).padStart(2, '0')}</span>
      <div class="pipe-node__ico">${pipeIcon(n.ico)}</div>
      <div class="pipe-node__name">${n.name}</div>
      <div class="pipe-node__stage">${n.stage}</div>`;
    node.addEventListener('click', () => selectPipe(i));
    node.addEventListener('mouseenter', () => selectPipe(i));
    pipe.appendChild(node);
  });
  selectPipe(0);
}

function selectPipe(i) {
  const n = DATA.flagship.nodes[i];
  $$('.pipe-node').forEach((el2, idx) => el2.classList.toggle('active', idx === i));
  const d = $('#pipelineDetail');
  d.style.setProperty('--node', n.color);
  d.innerHTML = `
    <div class="pd__head">
      <div class="pd__ico">${pipeIcon(n.ico)}</div>
      <div>
        <div class="pd__title">${n.name}</div>
        <div class="pd__stage">Stage ${i + 1}/${DATA.flagship.nodes.length} · ${n.stage}</div>
      </div>
    </div>
    <div class="pd__desc">${n.desc}</div>
    <div class="pd__tech">${n.tech.map(t => `<span>${t}</span>`).join('')}</div>`;
}

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
  DATA.architecture.forEach(t => {
    const tier = el('div', 'arch__tier');
    tier.setAttribute('data-aos', 'fade-up');
    tier.style.setProperty('--tier', t.color);
    tier.innerHTML = `
      <div class="arch__tier-head">
        <div class="ico">${t.icon}</div>
        <div><div class="arch__tier-name">${t.name}</div><div class="arch__tier-sub">${t.sub}</div></div>
      </div>
      <div class="arch__nodes">${t.nodes.map(n => `<div class="arch__node"><b>${n.b}</b><span>${n.s}</span></div>`).join('')}</div>`;
    wrap.appendChild(tier);
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
   5. INTERACTIVE TERMINAL
--------------------------------------------------------- */
function setupTerminal() {
  const body = $('#termBody'), input = $('#termInput');
  const cmds = DATA.terminal.commands;

  function print(text, cls) {
    const line = el('div', cls || null);
    line.textContent = text;
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
    return line;
  }
  function printPrompt(cmd) {
    const line = el('div', 'term__line');
    line.innerHTML = `<span style="color:var(--green)">mohsin@platform:~$</span> <span style="color:var(--txt)">${escapeHtml(cmd)}</span>`;
    body.appendChild(line);
  }
  function run(cmd) {
    cmd = cmd.trim();
    if (!cmd) return;
    printPrompt(cmd);
    if (cmd === 'clear') { body.innerHTML = ''; return; }
    if (cmd === 'help') {
      print('Available commands:', 'term__muted');
      Object.keys(cmds).forEach(c => print('  ' + c));
      print('  clear    — clear the screen');
      body.scrollTop = body.scrollHeight;
      return;
    }
    const out = cmds[cmd] || matchCommand(cmd);
    if (out) { out.forEach(l => print(l)); }
    else { print(`command not found: ${cmd} — type "help"`, 'term__err'); }
    body.scrollTop = body.scrollHeight;
  }
  function matchCommand(cmd) {
    const key = Object.keys(cmds).find(k => k.startsWith(cmd) || cmd.startsWith(k));
    return key ? cmds[key] : null;
  }
  function escapeHtml(s) { return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { autoIdx = -1; run(input.value); input.value = ''; }
  });

  // autoplay demo until user interacts
  let autoIdx = 0, autoTimer = null;
  const seq = DATA.terminal.autoplay;
  function autoStep() {
    if (autoIdx < 0) return;
    const cmd = seq[autoIdx % seq.length];
    typeInto(cmd, () => {
      run(cmd);
      input.value = '';
      autoIdx = (autoIdx + 1);
      // trim history
      while (body.children.length > 40) body.removeChild(body.firstChild);
      autoTimer = setTimeout(autoStep, 2600);
    });
  }
  function typeInto(cmd, done) {
    if (autoIdx < 0) return;
    let i = 0;
    (function t() {
      if (autoIdx < 0) { input.value = ''; return; }
      input.value = cmd.slice(0, i);
      if (i++ < cmd.length) setTimeout(t, 55);
      else setTimeout(done, 350);
    })();
  }
  input.addEventListener('focus', () => { autoIdx = -1; clearTimeout(autoTimer); input.value = ''; });

  print('Welcome to mohsin@platform — a live cloud shell.', 'term__muted');
  print('Type "help" to see available commands, or watch the demo run.', 'term__muted');
  if (!prefersReduced) autoTimer = setTimeout(autoStep, 1400);
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
  setupTerminal();

  if (window.AOS) AOS.init({ duration: 700, once: true, offset: 80, disable: prefersReduced });

  runLoader();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
