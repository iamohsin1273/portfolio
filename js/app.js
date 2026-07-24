/* ═══════════════════════════════════════════════════════
   MOHSIN.OS — JARVIS-style AI Operating System
   app.js — all content lives in DATA, UI renders from it
   ═══════════════════════════════════════════════════════ */
'use strict';

/* ─────────────────────────────────────────────
   1. DATA — single source of truth
───────────────────────────────────────────── */
const DATA = {
  profile: {
    name: 'Mohamed Mohsin',
    role: 'Cloud & Platform Engineer',
    location: 'Chennai, India',
    email: 'iamohsin0033@gmail.com',
    phone: '+91 7305421447',
    github: 'https://github.com/iamohsin1273',
    linkedin: 'https://linkedin.com/in/iam-mohsin',
    resume: './assets/resume/MohamedMohsinResume.pdf',
    summary:
      'Junior DevOps Engineer working hands-on with Kubernetes, Docker and Jenkins to run containerized deployments and CI/CD pipelines. I support AWS infrastructure across EC2, EKS and ECS, with observability built on Prometheus and Grafana — already handling real production workflows.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'CI/CD', 'Observability']
  },

  roles: ['Cloud & Platform Engineer', 'DevOps Engineer', 'Kubernetes Operator', 'Infrastructure Automation', 'Site Reliability Mindset'],

  boot: [
    'Initializing Mohsin.OS',
    'Authenticating User',
    'Loading AI Core',
    'Cloud Infrastructure Online',
    'Kubernetes Cluster Connected',
    'AWS Services Running',
    'AI Assistant Activated',
    'Access Granted'
  ],

  heroBoot: [
    { cmd: 'aws configure --profile prod', ok: 'AWS credentials verified · region ap-south-1' },
    { cmd: 'kubectl config use-context eks-prod', ok: 'Switched to EKS production context' },
    { cmd: 'terraform init && terraform plan', ok: 'Infrastructure state synced · 0 drift' },
    { cmd: 'systemctl status platform', ok: 'All services active (running)' }
  ],

  heroStats: [
    { n: 6, suffix: '+', label: 'Cloud services' },
    { n: 12, suffix: '+', label: 'Tools mastered' },
    { n: 99.9, suffix: '%', label: 'Uptime target', decimals: 1 }
  ],

  profileData: ['UID: mohsin-0033', 'CLEARANCE: ADMIN', 'REGION: ap-south-1', 'STATUS: AVAILABLE', 'LATENCY: 41ms'],

  experience: [
    {
      type: 'work', date: 'JAN 2026 — PRESENT',
      role: 'Junior DevOps Engineer', org: 'Revolite Infotech Pvt. Ltd., Chennai',
      points: [
        'Linux server administration, system troubleshooting and deployment support to keep applications available and stable.',
        'Support AWS services — EC2, IAM, S3, ECS, EKS and CloudFormation — for infrastructure provisioning and management.',
        'Coordinate release management and deployments with dev and QA teams using Git-based workflows.',
        'Automate configuration management with Ansible to streamline operational tasks.',
        'Monitor system performance, application logs and infrastructure health to improve uptime.'
      ]
    },
    {
      type: 'edu', date: 'AUG 2021 — MAY 2025',
      role: 'B.Tech, Computer Science & Engineering', org: 'D.R. M.G.R. University, Chennai',
      points: [
        'Focused on systems, networking and cloud computing fundamentals.',
        'Built a self-driven DevOps foundation across containers, orchestration and CI/CD.'
      ]
    }
  ],

  skills: [
    {
      title: 'Containers & Orchestration', slug: 'k8s', color: '#00d4ff', icon: '⎈',
      blurb: 'Packaging services and running them at scale on production Kubernetes.',
      tools: [
        { n: 'Kubernetes', tier: 'Core' }, { n: 'Docker', tier: 'Core' }, { n: 'Helm', tier: 'Working' }
      ]
    },
    {
      title: 'Cloud & IaC', slug: 'aws', color: '#ffb648', icon: '☁',
      blurb: 'Provisioning repeatable, drift-free AWS environments from code.',
      tools: [
        { n: 'AWS', tier: 'Core' }, { n: 'Terraform', tier: 'Core' }, { n: 'Linux', tier: 'Core' }
      ]
    },
    {
      title: 'CI/CD & Automation', slug: 'ci', color: '#26ffb0', icon: '⟳',
      blurb: 'Wiring commits to production through automated, security-gated pipelines.',
      tools: [
        { n: 'Jenkins', tier: 'Core' }, { n: 'GitHub Actions', tier: 'Working' }, { n: 'Ansible', tier: 'Working' }, { n: 'Git', tier: 'Core' }
      ]
    },
    {
      title: 'Observability & Security', slug: 'obs', color: '#ff4d6d', icon: '◉',
      blurb: 'Watching what runs and catching problems before they ship.',
      tools: [
        { n: 'Prometheus', tier: 'Working' }, { n: 'Grafana', tier: 'Working' }, { n: 'Trivy', tier: 'Working' }, { n: 'SonarQube', tier: 'Familiar' }
      ]
    },
    {
      title: 'Scripting', slug: 'script', color: '#a86bff', icon: '⌘',
      blurb: 'Automating the operational glue that keeps platforms healthy.',
      tools: [
        { n: 'Python', tier: 'Working' }, { n: 'Shell', tier: 'Core' }
      ]
    }
  ],

  flagship: {
    title: 'AI-Powered DevSecOps Pipeline',
    desc: 'An end-to-end, security-first delivery pipeline: every commit flows through build, test, quality gates, vulnerability scanning, image signing and GitOps deployment — with AI-assisted diagnostics closing the loop.',
    nodes: [
      { name: 'GitHub', stage: 'Source', ico: 'source', color: '#8b949e', log: [['$ git push origin main','cmd'],['Enumerating objects: 47, done.','dim'],['remote: webhook → jenkins triggered','cy'],['commit a1f9c72 · "feat: add rate limiter"','']] },
      { name: 'Jenkins', stage: 'Orchestrate', ico: 'orchestrate', color: '#e0662b', log: [['[Pipeline] Start of Pipeline','dim'],['Provisioning ephemeral agent k8s-agent-7f3','b'],['Loading Jenkinsfile (declarative)','dim'],['✓ agent online · 12 stages queued','g']] },
      { name: 'Build', stage: 'Compile', ico: 'build', color: '#4d8dff', log: [['$ npm ci && npm run build','cmd'],['restored cache · 1,284 pkgs (3.1s)','dim'],['vite build → dist/ (gzip 214 kb)','b'],['✓ artifact packaged in 22.4s','g']] },
      { name: 'Unit Tests', stage: 'Verify', ico: 'test', color: '#2fe08a', log: [['$ npm test -- --coverage','cmd'],['PASS src/ · 214 tests','g'],['coverage: lines 91.4% · branches 87.2%','dim'],['✓ quality gate: coverage ≥ 80%','g']] },
      { name: 'SonarQube', stage: 'Quality', ico: 'quality', color: '#4e9bcd', log: [['$ sonar-scanner','cmd'],['analyzing 318 files · 0 bugs · 2 smells','dim'],['security hotspots: 0 · debt 14m','b'],['✓ Quality Gate: PASSED','g']] },
      { name: 'Trivy', stage: 'Scan', ico: 'scan', color: '#7b6bff', log: [['$ trivy image app:a1f9c72','cmd'],['scanning 6 layers · 412 packages','dim'],['CRITICAL 0 · HIGH 0 · MEDIUM 3','y'],['✓ no blocking vulnerabilities','g']] },
      { name: 'Docker', stage: 'Package', ico: 'package', color: '#2496ed', log: [['$ docker build --target prod .','cmd'],['[+] BuildKit · 8 layers cached','dim'],['image app:a1f9c72 → 84.2 MB','b'],['✓ built in 18.7s','g']] },
      { name: 'Harbor', stage: 'Registry', ico: 'registry', color: '#35e0e0', log: [['$ cosign sign && docker push','cmd'],['pushing to harbor.mohsin.io/app','dim'],['signature uploaded · attestation ok','cy'],['✓ digest sha256:3b9d…e1 signed','g']] },
      { name: 'Kubernetes', stage: 'Deploy', ico: 'deploy', color: '#326ce5', log: [['$ argocd app sync app-prod','cmd'],['rollout: 3/3 replicas · surge 1','dim'],['readiness probes green · HPA armed','b'],['✓ deployed to eks-prod (us-east-1)','g']] },
      { name: 'K8sGPT', stage: 'Diagnose', ico: 'diagnose', color: '#b06bff', log: [['$ k8sgpt analyze --explain','cmd'],['scanning 42 resources across 6 ns','dim'],['0 critical · 1 advisory (pdb)','y'],['✓ cluster healthy','g']] },
      { name: 'Gemini', stage: 'Reason', ico: 'reason', color: '#4285f4', log: [['→ findings sent to gemini-1.5-pro','dim'],['advisory: add PodDisruptionBudget','cy'],['remediation PR drafted automatically','b'],['✓ summary attached to run','g']] },
      { name: 'Slack', stage: 'Notify', ico: 'notify', color: '#ffb648', log: [['POST hooks.slack.com/#deploys','dim'],['🟢 app-prod · a1f9c72 · 2m14s','g'],['thread: AI advisory + RCA link','cy'],['✓ team notified','g']] },
      { name: 'Production', stage: 'Live', ico: 'live', color: '#2fe08a', log: [['traffic shifting 0% → 100%','dim'],['p95 latency 41ms · error rate 0.00%','b'],['SLO budget healthy · 3 pods · HPA','dim'],['✓ release live 🚀','g']] }
    ]
  },

  projects: [
    {
      slug: 'zomato', title: 'Automated Zomato Clone on AWS', accent: '#ff9900',
      problem: 'A React app needed a fully automated, secure path from source to a production EKS cluster with quality and vulnerability gates baked in.',
      desc: 'React frontend deployed to Amazon EKS via Docker, with a full Jenkins CI/CD pipeline wired to AWS CodeCommit — checkout, build, security scan and automated EKS deploy.',
      tags: ['EKS', 'Docker', 'Jenkins', 'Trivy', 'SonarQube', 'Grafana'],
      pipeline: ['CodeCommit', 'Jenkins', 'SonarQube', 'Trivy', 'Docker', 'EKS', 'Grafana'],
      arch: 'ALB → EKS ingress → React pods (HPA) → CloudWatch + Grafana',
      challenges: 'Wiring Jenkins agents to authenticate against ECR and EKS without long-lived credentials; solved with IAM roles for service accounts (IRSA).',
      metrics: [['Deploy time', '2m 14s'], ['Test coverage', '91.4%'], ['CVEs blocked', '100%'], ['Uptime', '99.9%']],
      links: [{ label: 'VIEW REPO', href: 'https://github.com/iamohsin1273' }]
    },
    {
      slug: 'terraform', title: 'AWS Cloud Infrastructure Automation', accent: '#a86bff',
      problem: 'Manual environment setup was slow and drift-prone across dev and prod, making rollbacks and audits painful.',
      desc: 'Reusable Terraform modules provisioning VPCs, EKS, IAM and networking with remote state — repeatable, drift-free environments across dev and prod.',
      tags: ['Terraform', 'AWS', 'IAM', 'VPC', 'IaC'],
      pipeline: ['Git', 'terraform plan', 'Review', 'terraform apply', 'State (S3)', 'Verify'],
      arch: 'Reusable modules → VPC + subnets → EKS + node groups → IAM/IRSA → S3 remote state + DynamoDB lock',
      challenges: 'Managing state safely across a team; solved with S3 backend + DynamoDB state locking and workspace-per-environment.',
      metrics: [['Env provision', '~8 min'], ['State drift', '0'], ['Modules', '12'], ['Environments', '3']],
      links: [{ label: 'VIEW REPO', href: 'https://github.com/iamohsin1273' }]
    },
    {
      slug: 'monitoring', title: 'Production Kubernetes Monitoring', accent: '#ff4d6d',
      problem: 'The cluster had no visibility into latency, saturation or error budgets, so incidents were found by users first.',
      desc: 'Prometheus + Grafana observability stack on EKS with curated dashboards, recording rules and alerting for latency, saturation and error budgets.',
      tags: ['Prometheus', 'Grafana', 'Kubernetes', 'Alerting'],
      pipeline: ['Exporters', 'Prometheus', 'Recording rules', 'Alertmanager', 'Grafana', 'Slack'],
      arch: 'kube-state-metrics + node-exporter → Prometheus → Alertmanager → Slack; Grafana dashboards on top',
      challenges: 'Taming alert noise; solved with multi-window burn-rate SLO alerts instead of static thresholds.',
      metrics: [['MTTD', '< 2 min'], ['Dashboards', '9'], ['Alert rules', '24'], ['False alerts', '−80%']],
      links: [{ label: 'VIEW REPO', href: 'https://github.com/iamohsin1273' }]
    },
    {
      slug: 'gitops', title: 'Cloud-Native GitOps Deployments', accent: '#2496ed',
      problem: 'Deploys were manual and inconsistent between environments, risking downtime during releases.',
      desc: 'Containerized microservices with Helm charts and GitHub Actions delivery — zero-downtime rolling updates and environment promotion.',
      tags: ['Helm', 'GitHub Actions', 'Docker', 'GitOps'],
      pipeline: ['GitHub', 'Actions CI', 'Docker build', 'Helm package', 'ArgoCD sync', 'Rollout'],
      arch: 'GitHub Actions → registry → Helm chart → ArgoCD → K8s rolling update with readiness gates',
      challenges: 'Achieving zero-downtime; solved with readiness/liveness probes + surge rollout and automated rollback on failed health checks.',
      metrics: [['Downtime', '0s'], ['Rollback', '< 30s'], ['Services', '5'], ['Deploys/wk', '20+']],
      links: [{ label: 'VIEW REPO', href: 'https://github.com/iamohsin1273' }]
    }
  ],

  architecture: [
    { name: 'Edge & CDN', sub: 'Global entrypoint', ico: 'edge', color: '#00d4ff',
      nodes: [{ b: 'Cloudflare', s: 'DNS · WAF · CDN' }, { b: 'Route 53', s: 'DNS routing' }, { b: 'ALB', s: 'TLS termination' }] },
    { name: 'Compute', sub: 'Kubernetes on AWS', ico: 'compute', color: '#2a7fff',
      nodes: [{ b: 'EKS Cluster', s: 'Managed control plane' }, { b: 'Node Groups', s: 'Auto-scaled workers' }, { b: 'HPA', s: 'Pod autoscaling' }] },
    { name: 'Data & State', sub: 'Persistence layer', ico: 'data', color: '#a86bff',
      nodes: [{ b: 'RDS', s: 'Managed Postgres' }, { b: 'S3', s: 'Object storage' }, { b: 'ElastiCache', s: 'Redis caching' }] },
    { name: 'Observability', sub: 'See everything', ico: 'observe', color: '#ff4d6d',
      nodes: [{ b: 'Prometheus', s: 'Metrics' }, { b: 'Grafana', s: 'Dashboards' }, { b: 'Loki', s: 'Log aggregation' }] }
  ],

  cluster: {
    deployment: 'platform-api', image: 'v1.4.2',
    nextImages: ['v1.5.0', 'v1.5.1', 'v1.6.0', 'v2.0.0'],
    workers: [
      { name: 'ip-10-0-1-24', zone: 'us-east-1a' },
      { name: 'ip-10-0-2-51', zone: 'us-east-1b' },
      { name: 'ip-10-0-3-88', zone: 'us-east-1c' }
    ],
    minReplicas: 3, maxReplicas: 8, startReplicas: 3, targetCpu: 60
  },

  dashboard: [
    { label: 'TECHNOLOGIES', value: 12, suffix: '+', sub: 'mastered across the stack', pct: 80 },
    { label: 'PROJECTS', value: 4, suffix: '', sub: 'production-grade systems', pct: 65 },
    { label: 'CLOUD DEPLOYS', value: 120, suffix: '+', sub: 'via automated pipelines', pct: 90 },
    { label: 'UPTIME TARGET', value: 99.9, suffix: '%', sub: 'SLO across services', decimals: 1, pct: 99 },
    { label: 'CERTIFICATIONS', value: 3, suffix: '', sub: 'cloud & DevOps track', pct: 50 },
    { label: 'GITHUB REPOS', value: 24, suffix: '+', sub: 'public + private', pct: 70 }
  ],

  /* JARVIS knowledge base — intent-matched responses */
  jarvis: {
    greeting: "Good day. I am JARVIS — Mohsin's personal AI. Ask me about his experience, skills, projects, or why he'd be a strong addition to your team.",
    suggestions: ['Tell me about Mohsin', 'His Kubernetes experience', 'Show his AWS projects', 'Download résumé', 'Why hire him?'],
    intents: [
      { k: ['who', 'about', 'tell me about', 'introduce', 'yourself', 'mohsin'],
        a: "Mohamed Mohsin is a Cloud & Platform / DevOps Engineer based in Chennai, India. He works hands-on with Kubernetes, Docker and Jenkins to run containerized deployments and CI/CD pipelines, and supports AWS across EC2, EKS and ECS. He's a Junior DevOps Engineer at Revolite Infotech, already operating real production workflows." },
      { k: ['kubernetes', 'k8s', 'cluster', 'orchestration', 'eks', 'pod'],
        a: "On Kubernetes, Mohsin operates production EKS clusters — managing deployments, rolling updates, HPA-based autoscaling and self-healing workloads. He's built monitoring on top with Prometheus and Grafana, and packages services with Docker and Helm. Try the live Cluster Playground on this site — you can scale, kill pods and watch them self-heal." },
      { k: ['aws', 'cloud', 'amazon', 'ec2', 'ecs', 's3', 'infrastructure'],
        a: "Mohsin's AWS work spans EC2, IAM, S3, ECS, EKS and CloudFormation. His flagship projects include an automated Zomato clone deployed to EKS via a full Jenkins pipeline, and reusable Terraform modules that provision drift-free VPC/EKS/IAM environments. Open the Projects section to explore the holographic briefings." },
      { k: ['terraform', 'iac', 'infrastructure as code', 'provision'],
        a: "Mohsin writes reusable Terraform modules to provision VPCs, EKS clusters, IAM and networking — with S3 remote state and DynamoDB locking for safe team collaboration. Environments spin up in about 8 minutes with zero drift." },
      { k: ['docker', 'container', 'image'],
        a: "Docker is core to Mohsin's workflow — multi-stage builds producing minimal images, scanned with Trivy and signed before they ship. He orchestrates them on Kubernetes with Helm charts and zero-downtime rollouts." },
      { k: ['ci', 'cd', 'pipeline', 'jenkins', 'devops', 'devsecops'],
        a: "Mohsin builds security-first CI/CD pipelines: commit → build → test → SonarQube quality gate → Trivy scan → Docker → signed registry → GitOps deploy to EKS → AI-assisted diagnostics. The Flagship pipeline on this page actually runs — hit EXECUTE PIPELINE to watch it stream." },
      { k: ['technolog', 'skill', 'stack', 'tools', 'know', 'what can'],
        a: "Core: Kubernetes, Docker, AWS, Terraform, Linux, Jenkins, Git, Shell. Working: Helm, GitHub Actions, Ansible, Prometheus, Grafana, Trivy, Python. Explore the Skill Core orbit — click any node to expand its subsystem." },
      { k: ['hire', 'why', 'recruit', 'good fit', 'candidate', 'employ'],
        a: "Why hire Mohsin? He already runs real production workflows, not just tutorials — CI/CD, EKS, IaC and observability end-to-end. He automates relentlessly (Terraform, Ansible), builds security into pipelines by default (Trivy, SonarQube, image signing), and thinks in SLOs and error budgets. He's early-career, fast-learning, and ships reliable systems." },
      { k: ['contact', 'email', 'reach', 'hire him', 'get in touch', 'phone'],
        a: "You can reach Mohsin at iamohsin0033@gmail.com or +91 7305421447. He's on GitHub (@iamohsin1273) and LinkedIn (/in/iam-mohsin). Head to the Contact section to open a channel." },
      { k: ['resume', 'cv', 'download', 'curriculum'],
        a: "You can download Mohsin's résumé here: <a href='./assets/resume/MohamedMohsinResume.pdf' target='_blank' rel='noopener' download>MohamedMohsinResume.pdf</a>. There's also a RÉSUMÉ button in the hero section." },
      { k: ['experience', 'work', 'job', 'revolite', 'career'],
        a: "Mohsin is a Junior DevOps Engineer at Revolite Infotech, Chennai (Jan 2026–present). He handles Linux administration, AWS provisioning (EC2/IAM/S3/ECS/EKS/CloudFormation), Git-based release management, Ansible automation, and infrastructure monitoring. He holds a B.Tech in CSE from D.R. M.G.R. University." },
      { k: ['project', 'built', 'portfolio', 'work sample'],
        a: "Four flagship systems: (1) Automated Zomato clone on EKS with a Jenkins pipeline, (2) Terraform AWS infrastructure automation, (3) Production Kubernetes monitoring with Prometheus/Grafana, and (4) GitOps deployments with Helm + ArgoCD. Click any mission file in the Projects section to open its full briefing." },
      { k: ['monitor', 'observab', 'prometheus', 'grafana', 'metric', 'incident'],
        a: "Mohsin builds observability with Prometheus + Grafana — curated dashboards, recording rules and multi-window burn-rate SLO alerts routed to Slack. On his monitoring project, mean-time-to-detect dropped under 2 minutes and false alerts fell 80%." }
    ],
    interview: [
      "Let's begin the technical interview. Question 1: Explain what Kubernetes is and why an organization would adopt it.",
      "Question 2: Walk me through a CI/CD pipeline you'd design for a containerized web app.",
      "Question 3: How do you handle a production incident — say, a service showing high p95 latency?",
      "Question 4: Explain Terraform modules and why remote state matters.",
      "Question 5: How do you secure a container image before it reaches production?",
      "That concludes the interview. Mohsin would answer these from hands-on experience — feel free to ask me anything else."
    ],
    fallback: "I don't have a specific answer for that, but I can tell you about Mohsin's experience, Kubernetes and AWS work, his projects, technologies, or why he'd be a strong hire. What would you like to know?"
  }
};

/* ─────────────────────────────────────────────
   2. HELPERS
───────────────────────────────────────────── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const lerp = (a, b, t) => a + (b - a) * t;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const PIPE_ICONS = {
  source:      '<path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.9 2.6 5.8 2.9 5.8 2.9a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.3c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.2V21"/>',
  orchestrate: '<circle cx="12" cy="12" r="2.5"/><path d="M12 2v4M12 18v4M4.9 4.9l2.9 2.9M16.2 16.2l2.9 2.9M2 12h4M18 12h4M4.9 19.1l2.9-2.9M16.2 7.8l2.9-2.9"/>',
  build:       '<path d="M14.7 6.3a4 4 0 0 0-5.2 5.2l-6.2 6.2a1.4 1.4 0 0 0 0 2l.7.7a1.4 1.4 0 0 0 2 0l6.2-6.2a4 4 0 0 0 5.2-5.2l-2.4 2.4-2.3-.4-.4-2.3z"/>',
  test:        '<path d="M9 3h6M10 3v6.5L5.2 18a2 2 0 0 0 1.8 3h10a2 2 0 0 0 1.8-3L14 9.5V3"/><path d="M7.5 15h9"/>',
  quality:     '<path d="M3 6a9 4 0 0 0 18 0M3 6a9 4 0 0 1 18 0v12a9 4 0 0 1-18 0z"/><path d="m8.5 11.5 2 2 4-4"/>',
  scan:        '<path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/>',
  package:     '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/>',
  registry:    '<rect x="3" y="4" width="18" height="5" rx="1"/><rect x="3" y="10.5" width="18" height="5" rx="1"/><rect x="3" y="17" width="18" height="3.5" rx="1"/>',
  deploy:      '<path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10A15 15 0 0 1 12 2z"/><circle cx="12" cy="9" r="2"/>',
  diagnose:    '<rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01"/>',
  reason:      '<path d="M12 3l1.9 4.7L18.6 9l-3.6 3 1.1 5-4.1-2.7L7.9 17l1.1-5-3.6-3 4.7-1.3z"/>',
  notify:      '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  live:        '<path d="M4.5 16.5 3 21l4.5-1.5M14 4l-8 8 4 4 8-8a4 4 0 0 0-4-4z"/>'
};
const ARCH_ICONS = {
  edge:    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9S14.5 18.5 12 21"/>',
  compute: '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/>',
  data:    '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  observe: '<path d="M3 3v18h18"/><path d="m7 15 3-4 3 2 4-6"/>'
};
function pipeIco(name) {
  return `<svg class="pipe-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PIPE_ICONS[name]||PIPE_ICONS.build}</svg>`;
}
function archIco(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ARCH_ICONS[name]||ARCH_ICONS.compute}</svg>`;
}

/* ─────────────────────────────────────────────
   3. PARTICLES
───────────────────────────────────────────── */
function initParticles() {
  const canvas = $('#particleCanvas');
  if (!canvas || reduced) return;
  const ctx = canvas.getContext('2d');
  let W, H, pts;
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  function spawn() {
    pts = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.5 + .5, a: Math.random()
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${p.a * .4})`;
      ctx.fill();
    });
    pts.forEach((a, i) => {
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx*dx+dy*dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0,212,255,${(1-d/120)*.08})`;
          ctx.lineWidth = .5; ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }
  resize(); spawn(); draw();
  window.addEventListener('resize', () => { resize(); spawn(); });
}

/* ─────────────────────────────────────────────
   4. BOOT SEQUENCE
───────────────────────────────────────────── */
function runBoot() {
  return new Promise(resolve => {
    const log = $('#bootLog'), fill = $('#bootFill'), pct = $('#bootPct');
    const steps = DATA.boot;
    const total = steps.length;
    let i = 0;
    // animate rings
    const rings = $$('.boot__ring circle');
    rings.forEach((c, idx) => {
      setTimeout(() => { c.style.strokeDashoffset = '0'; }, idx * 300);
    });
    function next() {
      if (i >= total) {
        setTimeout(() => {
          const boot = $('#boot');
          boot.classList.add('hidden');
          setTimeout(() => { boot.style.display = 'none'; resolve(); }, 700);
        }, 400);
        return;
      }
      const p = Math.round(((i + 1) / total) * 100);
      fill.style.width = p + '%';
      pct.textContent = p + '%';
      const line = el('div', 'boot__log-line');
      line.innerHTML = `<span class="ok">✓</span><span class="label">${steps[i]}</span>`;
      log.appendChild(line);
      log.scrollTop = log.scrollHeight;
      i++;
      setTimeout(next, 280 + Math.random() * 180);
    }
    setTimeout(next, 600);
  });
}

/* ─────────────────────────────────────────────
   5. CURSOR
───────────────────────────────────────────── */
function initCursor() {
  const ring = $('#cursorRing'), dot = $('#cursorDot');
  if (!ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
  function loop() {
    rx = lerp(rx, mx, .12); ry = lerp(ry, my, .12);
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  }
  loop();
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a,button,[role="button"]')) document.body.classList.add('cursor-hover');
    else document.body.classList.remove('cursor-hover');
  });
}

/* ─────────────────────────────────────────────
   6. NAV
───────────────────────────────────────────── */
const NAV_LINKS = [
  ['skills','SKILLS'],['projects','PROJECTS'],['experience','TIMELINE'],
  ['architecture','ARCH'],['cluster','CLUSTER'],['dashboard','DASHBOARD'],['contact','CONTACT']
];
function initNav() {
  const wrap = $('#navLinks');
  NAV_LINKS.forEach(([id, label]) => {
    const a = el('a', null, label);
    a.href = '#' + id; a.dataset.target = id;
    wrap.appendChild(a);
  });
  // scroll spy
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        $$('.nav__links a').forEach(a => a.classList.toggle('active', a.dataset.target === e.target.id));
      }
    });
  }, { threshold: .3 });
  NAV_LINKS.forEach(([id]) => { const s = document.getElementById(id); if (s) obs.observe(s); });
  // scrolled class
  window.addEventListener('scroll', () => {
    $('#nav').classList.toggle('scrolled', window.scrollY > 40);
    const prog = $('#scrollProgress .scroll-progress__fill');
    if (prog) prog.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
  }, { passive: true });
  // burger
  const burger = $('#navBurger'), links = $('#navLinks');
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  // mode menu
  const modeBtn = $('#modeBtnToggle'), modeMenu = $('#modeModeMenu');
  modeBtn.addEventListener('click', e => {
    e.stopPropagation();
    const open = modeMenu.classList.toggle('open');
    modeBtn.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', () => modeMenu.classList.remove('open'));
  $$('[data-mode]').forEach(btn => btn.addEventListener('click', () => {
    setMode(btn.dataset.mode);
    modeMenu.classList.remove('open');
  }));
  // scroll progress bar
  const sp = el('div', 'scroll-progress');
  sp.innerHTML = '<div class="scroll-progress__fill" id="scrollProgressFill"></div>';
  document.body.insertBefore(sp, document.body.firstChild);
}

/* ─────────────────────────────────────────────
   7. MODE SYSTEM
───────────────────────────────────────────── */
let currentMode = 'recruiter';
const MODE_LABELS = { recruiter: 'RECRUITER', engineer: 'ENGINEER', client: 'CLIENT', interview: 'AI INTERVIEW' };
function setMode(mode) {
  currentMode = mode;
  $('#modeLabel').textContent = MODE_LABELS[mode] || mode.toUpperCase();
  // update badge
  const badge = $('#heroBadgeMode');
  if (badge) badge.textContent = (MODE_LABELS[mode] || mode.toUpperCase()) + ' MODE ACTIVE';
  // if interview mode, open JARVIS and start interview
  if (mode === 'interview') {
    openJarvis();
    setTimeout(() => jarvisReply(DATA.jarvis.interview[0]), 400);
  }
}

/* ─────────────────────────────────────────────
   8. HERO
───────────────────────────────────────────── */

function initHero() {
  $('#heroDesc').textContent = DATA.profile.summary;
  // profile tags
  const tags = $('#profileTags');
  DATA.profile.tags.forEach(t => tags.appendChild(el('span', null, t)));
  // profile data sidebar
  const pd = $('#profileData');
  DATA.profileData.forEach(d => {
    const item = el('div', 'profile-holo__data-item', d);
    pd.appendChild(item);
  });
  // CTA buttons
  const cta = $('#heroCta');
  const gh = el('a', 'btn-holo btn-holo--primary', `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.9 2.6 5.8 2.9 5.8 2.9a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.3c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.2V21"/></svg> GITHUB`);
  gh.href = DATA.profile.github; gh.target = '_blank'; gh.rel = 'noopener';
  const li = el('a', 'btn-holo', `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> LINKEDIN`);
  li.href = DATA.profile.linkedin; li.target = '_blank'; li.rel = 'noopener';
  const cv = el('a', 'btn-holo', `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> RÉSUMÉ`);
  cv.href = DATA.profile.resume; cv.target = '_blank'; cv.rel = 'noopener'; cv.setAttribute('download', '');
  const ct = el('a', 'btn-holo btn-holo--gold', `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> CONTACT`);
  ct.href = '#contact';
  cta.append(gh, li, cv, ct);
  // stats
  const stats = $('#heroStats');
  DATA.heroStats.forEach(s => {
    const d = el('div', 'hero__stat');
    d.innerHTML = `<div class="n" data-count="${s.n}" data-suffix="${s.suffix||''}" data-decimals="${s.decimals||0}">0</div><div class="l">${s.label}</div>`;
    stats.appendChild(d);
  });
  // boot log
  const bl = $('#heroBoot');
  DATA.heroBoot.forEach((b, i) => {
    setTimeout(() => {
      const line = el('div', 'line');
      line.innerHTML = `<span class="cmd">$ ${b.cmd}</span>`;
      bl.appendChild(line);
      setTimeout(() => {
        const ok = el('div', 'line');
        ok.innerHTML = `<span class="ok">✓ ${b.ok}</span>`;
        bl.appendChild(ok);
      }, 300);
    }, 600 + i * 800);
  });
  // typed role
  new Typed('#typedRole', {
    strings: DATA.roles, typeSpeed: 55, backSpeed: 30, backDelay: 2000, loop: true, showCursor: false
  });
  // 3D tilt on profile card
  const card = $('#profileCard');
  if (card) {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(600px) rotateY(${x*14}deg) rotateX(${-y*14}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  }
  // counter animation
  function animateCounters() {
    $$('.hero__stat .n').forEach(n => {
      const target = parseFloat(n.dataset.count);
      const suffix = n.dataset.suffix;
      const dec = parseInt(n.dataset.decimals) || 0;
      let start = null;
      function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1800, 1);
        const val = target * p;
        n.textContent = val.toFixed(dec) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  const heroObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateCounters(); heroObs.disconnect(); }
  }, { threshold: .5 });
  heroObs.observe($('#hero'));
}

/* ─────────────────────────────────────────────
   9. SKILLS ORBIT
───────────────────────────────────────────── */
function initSkills() {
  const field = $('#orbitField');
  const wrap = $('#orbitWrap');
  const detail = $('#orbitDetail');
  const detailInner = $('#orbitDetailInner');
  const nodes = [];

  DATA.skills.forEach((s, i) => {
    const node = el('button', 'orbit-node');
    node.type = 'button';
    node.style.setProperty('--node-color', s.color);
    node.dataset.i = i;
    node.innerHTML = `<span class="orbit-node__icon" style="color:${s.color}">${s.icon}</span><span class="orbit-node__label">${s.title.split(' ')[0]}</span>`;
    node.setAttribute('aria-label', s.title);
    node.addEventListener('click', () => openSkill(i, node));
    field.appendChild(node);
    nodes.push({ el: node, angle: (i / DATA.skills.length) * Math.PI * 2, speed: 0.0002 + i * 0.00003 });
  });

  let paused = false;
  wrap.addEventListener('mouseenter', () => paused = true);
  wrap.addEventListener('mouseleave', () => paused = false);

  function orbit(t) {
    const rect = wrap.getBoundingClientRect();
    const cx = rect.width / 2, cy = rect.height / 2;
    const radius = Math.min(rect.width, rect.height) * 0.34;
    nodes.forEach(n => {
      if (!paused && !reduced) n.angle += n.speed * 16;
      const x = cx + Math.cos(n.angle) * radius;
      const y = cy + Math.sin(n.angle) * radius * 0.7;
      n.el.style.left = x + 'px';
      n.el.style.top = y + 'px';
      n.el.style.zIndex = Math.round(50 + Math.sin(n.angle) * 10);
    });
    requestAnimationFrame(orbit);
  }
  requestAnimationFrame(orbit);

  function openSkill(i, node) {
    const s = DATA.skills[i];
    $$('.orbit-node').forEach(n => n.classList.remove('active'));
    node.classList.add('active');
    detailInner.innerHTML = `
      <div class="orbit-detail__title" style="color:${s.color}">${s.title}</div>
      <div class="orbit-detail__blurb">${s.blurb}</div>
      <div class="orbit-detail__tools">
        ${s.tools.map(t => `<div class="orbit-detail__tool"><span>${t.n}</span><span class="orbit-detail__tier tier--${t.tier.toLowerCase()}">${t.tier}</span></div>`).join('')}
      </div>`;
    detail.classList.add('visible');
  }
}

/* ─────────────────────────────────────────────
   10. CI PIPELINE (flagship)
───────────────────────────────────────────── */
const ci = {
  nodes: [], stages: [], running: false, timer: 0, timerInt: null,
  init(nodes) {
    this.nodes = nodes;
    this.stages = $$('.ci-stage');
  },
  reset() {
    clearInterval(this.timerInt);
    this.running = false; this.timer = 0;
    this.stages.forEach(s => s.classList.remove('running', 'done', 'failed'));
    $('#ciLog').innerHTML = '';
    $('#ciProgressBar').style.width = '0%';
    $('#ciTimer').textContent = '00.0s';
    $('#ciStatus').innerHTML = '<span class="pulse"></span>idle';
  },
  async run() {
    if (this.running) return;
    this.reset();
    this.running = true;
    $('#ciRunLabel').textContent = 'RUNNING…';
    $('#ciStatus').innerHTML = '<span class="pulse" style="background:var(--gold);box-shadow:0 0 8px var(--gold)"></span>building';
    this.timer = 0;
    this.timerInt = setInterval(() => { this.timer += 0.1; $('#ciTimer').textContent = this.timer.toFixed(1) + 's'; }, 100);

    for (let i = 0; i < this.nodes.length; i++) {
      await this.stage(i);
    }
    clearInterval(this.timerInt);
    this.running = false;
    $('#ciRunLabel').textContent = 'RE-RUN PIPELINE';
    $('#ciStatus').innerHTML = '<span class="pulse"></span>success';
    $('#ciProgressBar').style.width = '100%';
  },
  stage(i) {
    return new Promise(resolve => {
      const st = this.stages[i], node = this.nodes[i];
      st.classList.add('running');
      st.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      const log = $('#ciLog');
      const header = el('div', 'ci__log-line');
      header.innerHTML = `<span class="dim">▶ [${node.stage}] ${node.name}</span>`;
      log.appendChild(header);
      let li = 0;
      const emit = () => {
        if (li >= node.log.length) {
          st.classList.remove('running'); st.classList.add('done');
          $('#ciProgressBar').style.width = ((i + 1) / this.nodes.length * 100) + '%';
          setTimeout(resolve, 120);
          return;
        }
        const [txt, cls] = node.log[li];
        const line = el('div', 'ci__log-line');
        line.innerHTML = `<span class="${cls}">${txt}</span>`;
        log.appendChild(line);
        log.scrollTop = log.scrollHeight;
        li++;
        setTimeout(emit, 180 + Math.random() * 140);
      };
      setTimeout(emit, 200);
    });
  },
  jumpTo(i) {
    if (this.running) return;
    this.reset();
    const log = $('#ciLog');
    const node = this.nodes[i];
    this.stages[i].classList.add('done');
    const header = el('div', 'ci__log-line');
    header.innerHTML = `<span class="dim">▶ [${node.stage}] ${node.name}</span>`;
    log.appendChild(header);
    node.log.forEach(([txt, cls]) => {
      const line = el('div', 'ci__log-line');
      line.innerHTML = `<span class="${cls}">${txt}</span>`;
      log.appendChild(line);
    });
  }
};

function initFlagship() {
  $('#flagshipTitle').textContent = DATA.flagship.title;
  $('#flagshipDesc').textContent = DATA.flagship.desc;
  const rail = $('#ciRail');
  DATA.flagship.nodes.forEach((n, i) => {
    const stage = el('button', 'ci-stage');
    stage.type = 'button';
    stage.style.setProperty('--node', n.color);
    stage.innerHTML = `
      <span class="ci-stage__ico">${pipeIco(n.ico)}</span>
      <span class="ci-stage__body">
        <span class="ci-stage__name">${n.name}</span>
        <span class="ci-stage__stage">${n.stage}</span>
      </span>
      <span class="ci-stage__tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>`;
    stage.addEventListener('click', () => ci.jumpTo(i));
    rail.appendChild(stage);
  });
  ci.init(DATA.flagship.nodes);
  $('#ciRun').addEventListener('click', () => ci.run());
}

/* ─────────────────────────────────────────────
   11. PROJECTS + HOLOGRAM MODAL
───────────────────────────────────────────── */
function initProjects() {
  const grid = $('#projectsGrid');
  DATA.projects.forEach((p, i) => {
    const card = el('div', 'proj-card');
    card.style.setProperty('--proj-accent', p.accent);
    card.innerHTML = `
      <div class="proj-card__tag">MISSION_0${i + 1}</div>
      <div class="proj-card__title">${p.title}</div>
      <div class="proj-card__desc">${p.desc}</div>
      <div class="proj-card__tags">${p.tags.slice(0, 4).map(t => `<span>${t}</span>`).join('')}</div>
      <button class="proj-card__open">OPEN BRIEFING <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>`;
    card.addEventListener('click', () => openProject(p));
    grid.appendChild(card);
  });
}

function openProject(p) {
  const panel = $('#holoPanel');
  const pipe = p.pipeline.map((n, i) => `
    <span class="holo-pipeline__step">
      <span class="holo-pipeline__node">${n}</span>
      ${i < p.pipeline.length - 1 ? '<span class="holo-pipeline__arrow">→</span>' : ''}
    </span>`).join('');
  panel.innerHTML = `
    <button class="holo-modal__close" id="holoClose" aria-label="Close"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
    <div class="holo-modal__title" style="color:${p.accent}">${p.title}</div>
    <div class="holo-modal__desc">${p.desc}</div>

    <div class="holo-modal__section">
      <div class="holo-modal__section-title">◇ PROBLEM STATEMENT</div>
      <p style="font-size:.85rem;color:var(--txt-dim);line-height:1.7">${p.problem}</p>
    </div>

    <div class="holo-modal__section">
      <div class="holo-modal__section-title">◇ ARCHITECTURE</div>
      <p style="font-family:var(--mono);font-size:.78rem;color:var(--cyan);line-height:1.8">${p.arch}</p>
    </div>

    <div class="holo-modal__section">
      <div class="holo-modal__section-title">◇ CI/CD PIPELINE · LIVE DEPLOYMENT FLOW</div>
      <div class="holo-pipeline">${pipe}</div>
    </div>

    <div class="holo-modal__section">
      <div class="holo-modal__section-title">◇ TECHNOLOGIES</div>
      <div class="holo-modal__tags">${p.tags.map(t => `<span class="holo-modal__tag">${t}</span>`).join('')}</div>
    </div>

    <div class="holo-modal__section">
      <div class="holo-modal__section-title">◇ CHALLENGES FACED</div>
      <p style="font-size:.85rem;color:var(--txt-dim);line-height:1.7">${p.challenges}</p>
    </div>

    <div class="holo-modal__section">
      <div class="holo-modal__section-title">◇ PERFORMANCE METRICS</div>
      <div class="dashboard" style="grid-template-columns:repeat(auto-fill,minmax(140px,1fr))">
        ${p.metrics.map(m => `<div class="dash-card"><div class="dash-card__label">${m[0]}</div><div class="dash-card__value" style="font-size:1.4rem;color:${p.accent}">${m[1]}</div></div>`).join('')}
      </div>
    </div>

    <div class="holo-modal__links">
      ${p.links.map(l => `<a class="btn-holo" href="${l.href}" target="_blank" rel="noopener">${l.label} <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17 17 7M7 7h10v10"/></svg></a>`).join('')}
    </div>`;
  const modal = $('#holoModal');
  modal.classList.add('open');
  document.body.classList.add('noscroll');
  $('#holoClose').addEventListener('click', closeProject);
  // animate pipeline steps deploying
  if (!reduced) {
    const steps = $$('.holo-pipeline__node', panel);
    steps.forEach((s, i) => {
      s.style.opacity = '0';
      setTimeout(() => {
        s.style.transition = 'opacity .3s, border-color .3s';
        s.style.opacity = '1';
        s.style.borderColor = p.accent;
        setTimeout(() => { s.style.borderColor = ''; }, 500);
      }, i * 180);
    });
  }
}
function closeProject() {
  $('#holoModal').classList.remove('open');
  document.body.classList.remove('noscroll');
}

/* ─────────────────────────────────────────────
   12. TIMELINE
───────────────────────────────────────────── */
function initTimeline() {
  const wrap = $('#timeline');
  DATA.experience.forEach(x => {
    const item = el('div', 'tl-item' + (x.type === 'edu' ? ' edu' : ''));
    item.innerHTML = `
      <span class="tl-item__date">${x.date}</span>
      <div class="tl-item__role">${x.role}</div>
      <div class="tl-item__org">${x.org}</div>
      <ul class="tl-item__list">${x.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
    wrap.appendChild(item);
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: .2 });
  $$('.tl-item').forEach(i => obs.observe(i));
}

/* ─────────────────────────────────────────────
   13. ARCHITECTURE
───────────────────────────────────────────── */
function initArch() {
  const wrap = $('#arch');
  DATA.architecture.forEach(t => {
    const tier = el('div', 'arch-tier');
    tier.style.setProperty('--tier-color', t.color);
    tier.innerHTML = `
      <div class="arch-tier__head">
        <span class="arch-tier__icon">${archIco(t.ico)}</span>
        <div>
          <div class="arch-tier__title">${t.name}</div>
          <div class="arch-tier__sub">${t.sub}</div>
        </div>
      </div>
      <div class="arch-tier__nodes">
        ${t.nodes.map(n => `<div class="arch-node"><div class="arch-node__b">${n.b}</div><div class="arch-node__s">${n.s}</div></div>`).join('')}
      </div>`;
    wrap.appendChild(tier);
  });
}

/* ─────────────────────────────────────────────
   14. KUBERNETES PLAYGROUND
───────────────────────────────────────────── */
const k8s = (() => {
  const cfg = DATA.cluster;
  let replicas = cfg.startReplicas, desired = cfg.startReplicas;
  let cpu = 6, loadInt = null, imgIdx = 0;

  function podHTML(state) {
    return `<div class="k8s-pod ${state}" title="${state}">⬡</div>`;
  }
  function render() {
    $('#k8sReady').textContent = replicas;
    $('#k8sDesired').textContent = desired;
    $('#k8sCpu').textContent = cpu + '%';
    $('#k8sCpuBar').style.width = clamp(cpu, 0, 100) + '%';
    const hpaState = cpu >= cfg.targetCpu ? 'scaling ↑' : 'idle';
    $('#k8sHpa').textContent = `${hpaState} · ${cfg.minReplicas}–${cfg.maxReplicas}`;
    $$('.k8s-node').forEach((node, ni) => {
      const podWrap = node.querySelector('.k8s-node__pods');
      podWrap.innerHTML = '';
      const perNode = Math.ceil(replicas / cfg.workers.length);
      const start = ni * perNode;
      for (let i = start; i < Math.min(start + perNode, replicas); i++) {
        podWrap.innerHTML += podHTML('running');
      }
    });
  }
  function event(msg, cls = '') {
    const log = $('#k8sEvents');
    const ts = new Date().toTimeString().slice(0, 8);
    const line = el('div', 'k8s-event');
    line.innerHTML = `<span class="ts">${ts}</span><span class="${cls}">${msg}</span>`;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
    if (log.children.length > 40) log.removeChild(log.firstChild);
  }
  function init() {
    const nodesWrap = $('#k8sNodes');
    cfg.workers.forEach(w => {
      const node = el('div', 'k8s-node');
      node.innerHTML = `<div class="k8s-node__head"><span class="k8s-node__name">${w.name}</span><span class="k8s-node__zone">${w.zone}</span></div><div class="k8s-node__pods"></div>`;
      nodesWrap.appendChild(node);
    });
    render();
    event('Cluster initialized · 3 nodes ready', 'ok');
    $$('.k8s__btn').forEach(btn => btn.addEventListener('click', () => act(btn.dataset.act)));
  }
  function act(action) {
    switch (action) {
      case 'scale-up':
        if (desired >= cfg.maxReplicas) { event('Max replicas reached (' + cfg.maxReplicas + ')', 'warn'); return; }
        desired++; replicas++;
        event(`Scaled up → ${desired} replicas`, 'ok');
        render(); break;
      case 'scale-down':
        if (desired <= cfg.minReplicas) { event('Min replicas reached (' + cfg.minReplicas + ')', 'warn'); return; }
        desired--; replicas--;
        event(`Scaled down → ${desired} replicas`, 'ok');
        render(); break;
      case 'kill': {
        if (replicas <= 1) { event('Cannot kill last pod', 'err'); return; }
        replicas--;
        event('Pod terminated · self-healing...', 'err');
        render();
        setTimeout(() => {
          replicas++;
          event('Pod restarted · Running', 'ok');
          render();
        }, 2200);
        break;
      }
      case 'rollout': {
        imgIdx = (imgIdx + 1) % cfg.nextImages.length;
        const newImg = cfg.nextImages[imgIdx];
        event(`Rolling update → ${newImg}`, 'ok');
        $('#k8sImage').textContent = newImg;
        let i = 0;
        const roll = setInterval(() => {
          event(`Pod ${i + 1}/${replicas} updated`, 'ok');
          i++;
          if (i >= replicas) { clearInterval(roll); event(`Rollout complete · ${newImg}`, 'ok'); }
        }, 600);
        break;
      }
      case 'load': {
        const btn = $('#k8sLoadBtn');
        if (loadInt) {
          clearInterval(loadInt); loadInt = null;
          cpu = 6; render();
          event('Load simulation stopped', 'warn');
          btn.style.borderColor = '';
          return;
        }
        btn.style.borderColor = 'var(--gold)';
        event('Load simulation started · CPU climbing', 'warn');
        loadInt = setInterval(() => {
          cpu = Math.min(cpu + 8, 95);
          render();
          if (cpu >= cfg.targetCpu && replicas < cfg.maxReplicas) {
            replicas++; desired++;
            event(`HPA triggered · scaled to ${replicas} replicas`, 'ok');
            render();
          }
          if (cpu >= 95) {
            clearInterval(loadInt); loadInt = null;
            btn.style.borderColor = '';
            setTimeout(() => {
              cpu = 6; render();
              event('Load subsided · CPU normalizing', 'ok');
            }, 3000);
          }
        }, 800);
        break;
      }
    }
  }
  return { init };
})();

/* ─────────────────────────────────────────────
   15. DASHBOARD
───────────────────────────────────────────── */
function initDashboard() {
  const wrap = $('#dashboard');
  DATA.dashboard.forEach(d => {
    const card = el('div', 'dash-card');
    card.innerHTML = `
      <div class="dash-card__label">${d.label}</div>
      <div class="dash-card__value" data-count="${d.value}" data-suffix="${d.suffix}" data-decimals="${d.decimals||0}">0${d.suffix}</div>
      <div class="dash-card__sub">${d.sub}</div>
      <div class="dash-card__bar"><span style="width:${d.pct}%"></span></div>`;
    wrap.appendChild(card);
  });
  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    $$('.dash-card__value').forEach(n => {
      const target = parseFloat(n.dataset.count);
      const suffix = n.dataset.suffix;
      const dec = parseInt(n.dataset.decimals) || 0;
      let start = null;
      function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1400, 1);
        n.textContent = (target * p).toFixed(dec) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: .3 });
  obs.observe(wrap);
}

/* ─────────────────────────────────────────────
   16. CONTACT
───────────────────────────────────────────── */
function initContact() {
  const grid = $('#contactGrid');
  const items = [
    { label: 'EMAIL', value: DATA.profile.email, href: 'mailto:' + DATA.profile.email,
      icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>' },
    { label: 'PHONE', value: DATA.profile.phone, href: 'tel:' + DATA.profile.phone,
      icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>' },
    { label: 'GITHUB', value: '@iamohsin1273', href: DATA.profile.github, target: '_blank',
      icon: '<path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.9 2.6 5.8 2.9 5.8 2.9a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.3c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.2V21"/>' },
    { label: 'LINKEDIN', value: '/in/iam-mohsin', href: DATA.profile.linkedin, target: '_blank',
      icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>' },
    { label: 'LOCATION', value: DATA.profile.location, href: '#',
      icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>' }
  ];
  items.forEach(item => {
    const a = el('a', 'contact-card');
    a.href = item.href;
    if (item.target) { a.target = item.target; a.rel = 'noopener'; }
    a.innerHTML = `
      <div class="contact-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${item.icon}</svg></div>
      <div class="contact-card__label">${item.label}</div>
      <div class="contact-card__value">${item.value}</div>`;
    grid.appendChild(a);
  });
}

/* ─────────────────────────────────────────────
   17. JARVIS AI ASSISTANT
───────────────────────────────────────────── */
let jarvisOpen = false;
let interviewIdx = 0;

function openJarvis() {
  jarvisOpen = true;
  const panel = $('#jarvis');
  panel.classList.add('open');
  panel.removeAttribute('aria-hidden');
  document.body.classList.add('noscroll');
  $('#jarvisInput').focus();
}
function closeJarvis() {
  jarvisOpen = false;
  $('#jarvis').classList.remove('open');
  $('#jarvis').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('noscroll');
}

function jarvisReply(text) {
  const msgs = $('#jarvisMessages');
  // typing indicator
  const typing = el('div', 'jarvis-msg jarvis-msg--bot');
  typing.innerHTML = '<div class="jarvis-msg__bubble"><div class="jarvis-msg__typing"><span></span><span></span><span></span></div></div>';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;
  setTimeout(() => {
    msgs.removeChild(typing);
    const msg = el('div', 'jarvis-msg jarvis-msg--bot');
    msg.innerHTML = `<div class="jarvis-msg__bubble">${text}</div>`;
    msgs.appendChild(msg);
    msgs.scrollTop = msgs.scrollHeight;
  }, 900 + Math.random() * 400);
}

function jarvisAsk(text) {
  const msgs = $('#jarvisMessages');
  const msg = el('div', 'jarvis-msg jarvis-msg--user');
  msg.innerHTML = `<div class="jarvis-msg__bubble">${text}</div>`;
  msgs.appendChild(msg);
  msgs.scrollTop = msgs.scrollHeight;

  // interview mode
  if (currentMode === 'interview') {
    interviewIdx++;
    const q = DATA.jarvis.interview[interviewIdx] || "Thank you. Feel free to ask me anything else about Mohsin.";
    jarvisReply(q);
    return;
  }

  // intent matching
  const lower = text.toLowerCase();
  const match = DATA.jarvis.intents.find(intent => intent.k.some(k => lower.includes(k)));
  jarvisReply(match ? match.a : DATA.jarvis.fallback);
}

function initJarvis() {
  // greeting
  setTimeout(() => jarvisReply(DATA.jarvis.greeting), 300);

  // suggestions
  const sugg = $('#jarvisSuggestions');
  DATA.jarvis.suggestions.forEach(s => {
    const btn = el('button', 'jarvis__suggestion', s);
    btn.addEventListener('click', () => jarvisAsk(s));
    sugg.appendChild(btn);
  });

  // FAB
  $('#jarvisFab').addEventListener('click', openJarvis);
  $('#jarvisClose').addEventListener('click', closeJarvis);
  $('#jarvisBackdrop').addEventListener('click', closeJarvis);

  // send
  const input = $('#jarvisInput'), send = $('#jarvisSend');
  function submit() {
    const v = input.value.trim();
    if (!v) return;
    input.value = '';
    jarvisAsk(v);
  }
  send.addEventListener('click', submit);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });

  // keyboard shortcut: J to open
  document.addEventListener('keydown', e => {
    if (e.key === 'j' && !e.ctrlKey && !e.metaKey && document.activeElement.tagName !== 'INPUT') {
      jarvisOpen ? closeJarvis() : openJarvis();
    }
    if (e.key === 'Escape') {
      if (jarvisOpen) closeJarvis();
      if ($('#holoModal').classList.contains('open')) closeProject();
      if ($('#secret').classList.contains('open')) closeSecret();
    }
  });
}

/* ─────────────────────────────────────────────
   18. EASTER EGGS & HIDDEN INTERACTIONS
───────────────────────────────────────────── */
const secrets = [
  { cmd: 'sudo rm -rf /', msg: 'Nice try. This cluster has RBAC.\nPermission denied: insufficient clearance level.\nIncident logged. 😄' },
  { cmd: 'kubectl get secrets', msg: 'NAME                    TYPE     DATA\nmohsin-skills           Opaque   12\nmohsin-ambition         Opaque   ∞\nmohsin-coffee-intake    Opaque   [REDACTED]' },
  { cmd: 'docker run mohsin', msg: 'Pulling image mohsin:latest...\nStatus: Image is up to date\nStarting container...\n✓ Cloud engineer online. Ready to deploy.' },
  { cmd: 'terraform apply', msg: 'Plan: 1 engineer to add, 0 to change, 0 to destroy.\n\nDo you want to perform these actions? yes\n\nApply complete! Resources: 1 added.' },
  { cmd: 'aws iam get-user', msg: '{\n  "User": {\n    "UserName": "mohsin",\n    "Arn": "arn:aws:iam::cloud:user/mohsin",\n    "Tags": [{"Key":"role","Value":"cloud-engineer"}]\n  }\n}' }
];
let secretIdx = 0;

function openSecret(msg) {
  $('#secretMsg').textContent = msg;
  $('#secret').classList.add('open');
}
function closeSecret() { $('#secret').classList.remove('open'); }

function initEasterEggs() {
  $('#secretClose').addEventListener('click', closeSecret);

  // Konami code
  const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let ki = 0;
  document.addEventListener('keydown', e => {
    if (e.key === konami[ki]) { ki++; if (ki === konami.length) { ki = 0; openSecret('KONAMI CODE ACCEPTED\n\nMohsin.OS CHEAT MODE ACTIVATED\n\nAll systems unlocked. Infinite coffee. Zero downtime.\n\n🎮 Achievement unlocked: "Found the Easter Egg"'); } }
    else ki = 0;
  });

  // secret terminal commands in JARVIS input
  const input = $('#jarvisInput');
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const v = input.value.trim().toLowerCase();
      const s = secrets.find(s => v.includes(s.cmd.split(' ')[0]) && v.includes(s.cmd.split(' ')[1] || ''));
      if (s) { openSecret(s.msg); input.value = ''; e.stopPropagation(); }
    }
  });

  // triple-click on nav brand = secret
  let clicks = 0;
  $('.nav__brand').addEventListener('click', e => {
    clicks++;
    if (clicks === 3) {
      clicks = 0;
      openSecret('CLASSIFIED PERSONNEL FILE\n\nName: Mohamed Mohsin\nClearance: CLOUD_ADMIN\nSpecialty: Breaking things in dev, fixing them in prod\nWeakness: Kubernetes YAML indentation\nSuperpower: Turning coffee into infrastructure\n\n"Any sufficiently advanced DevOps is indistinguishable from magic."');
    }
    setTimeout(() => { clicks = 0; }, 800);
  });

  // hover on profile image = glitch
  const img = $('.profile-holo__img');
  if (img) {
    img.addEventListener('mouseenter', () => { img.style.filter = 'saturate(2) hue-rotate(180deg)'; });
    img.addEventListener('mouseleave', () => { img.style.filter = ''; });
  }
}

/* ─────────────────────────────────────────────
   19. MODAL BACKDROP CLOSE
───────────────────────────────────────────── */
$('#holoBackdrop').addEventListener('click', closeProject);

/* ─────────────────────────────────────────────
   20. FOOTER
───────────────────────────────────────────── */
function initFooter() {
  $('#footerYear').textContent = '© ' + new Date().getFullYear();
}

/* ─────────────────────────────────────────────
   21. INIT
───────────────────────────────────────────── */
async function init() {
  await runBoot();
  initParticles();
  initCursor();
  initNav();
  initHero();
  initSkills();
  initFlagship();
  initProjects();
  initTimeline();
  initArch();
  k8s.init();
  initDashboard();
  initContact();
  initJarvis();
  initEasterEggs();
  initFooter();
}

document.addEventListener('DOMContentLoaded', init);
