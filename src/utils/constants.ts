// TrustMonitor Landing Page Constants
// Last updated: February 19, 2026

export const SITE_CONFIG = {
  name: 'TrustMonitor',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://trustmonitor.dev',
  launchDate: '2026-03-31',
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xyz123',
  foundingSlotsRemaining: 25,
} as const;

// HERO SECTION (Nuclear Version)
export const HERO_CONTENT = {
  timestamp: 'February 10, 2026 2:47 AM',
  incident: '22-Minute Revenue Interruption.\nNo Detection.',
  pain: [
    "Monitoring failed to escalate.",
    'Financial exposure accumulated in real time.',
    'Liability coverage: $0.',
  ],

  question: 'What if they had to pay you when they failed?',
  cta: {
    primary: 'CALCULATE YOUR EXPOSURE',
    secondary: 'REVIEW SLA TERMS',
  },
} as const;

// PAIN SECTION ($0 Liability)
export const PAIN_CONTENT = {
  heading: 'Their Contract. Your Risk.',
  subheading: "Every monitoring vendor limits liability to zero. Here's what that means for you:",
  scenarios: [
    {
      vendor: 'Datadog',
      clause: '"In no event shall Datadog be liable for lost profits or business opportunities."',
      impact: 'SLA breach? You get service credits worth $47.',
      loss: 'Your actual loss: $43,000',
    },
    {
      vendor: 'PagerDuty',
      clause: '"PagerDuty\'s total liability shall not exceed fees paid in the prior 12 months."',
      impact: 'Missed critical alert? Maximum payout: $240.',
      loss: 'Your actual loss: $68,000',
    },
    {
      vendor: 'Better Uptime',
      clause: '"We are not liable for any indirect, incidental, or consequential damages."',
      impact: 'False negative during incident? You get nothing.',
      loss: 'Your actual loss: $12,500',
    },
  ],
  conclusion: 'They absorbed zero risk. You absorbed all losses.',
} as const;

// CALCULATOR SECTION
export const CALCULATOR_CONTENT = {
  heading: 'Calculate Your Unprotected Exposure',
  description: 'Most CTOs underestimate how much monitoring failures cost them. Use this calculator to see your real number.',
  labels: {
    incidents: 'Incidents missed by current monitoring (last 12 months)',
    avgLoss: 'Average revenue lost per incident',
    total: 'Total losses you absorbed',
    vendorPaid: 'What your vendor paid you',
    trustmonitorPays: 'What TrustMonitor would pay',
  },
  disclaimer: 'TrustMonitor payouts are capped per tier. Professional tier caps at $500/incident. All payouts subject to service agreement terms and incident verification.',
} as const;

// PROOF SECTION
export const PROOF_CONTENT = {
  heading: 'Verifiable Cryptographic Evidence',
  description: "Every incident generates a timestamped evidence bundle. You verify independently. We can't fake it.",
  features: [
    {
      title: 'Multi-Region Verification',
      detail: 'Checks run from 3+ regions simultaneously. 2/3 consensus required to trigger payout.',
      technical: 'AWS us-east-1, eu-west-1, ap-southeast-2',
    },
    {
      title: 'Immutable Evidence',
      detail: 'Every check produces a signed JSON bundle with a Bitcoin-anchored proof. Download and independently verify using OpenTimestamps.',
      technical: 'Bitcoin blockchain anchoring via OpenTimestamps',
    },
    {
      title: 'Retention Guarantee',
      detail: 'Evidence stored for 7 years. Available via API at any time for audits or disputes.',
      technical: 'S3 Glacier Deep Archive + redundant backups',
    },
  ],
  example: {
    label: 'Sample Evidence Bundle',
    filename: 'incident-2026-02-10-0247.json',
  },
} as const;

// COMPARISON TABLE
export const COMPARISON_CONTENT = {
  heading: 'How TrustMonitor Differs',
  description: 'Direct comparison with monitoring vendors you already use or evaluate.',
  vendors: [
    {
      name: 'Datadog',
      liability: '$0 (service credits only)',
      evidence: 'Internal logs (not accessible)',
      payout: 'Never',
      risk: 'You absorb 100%',
    },
    {
      name: 'PagerDuty',
      liability: 'Capped at 12mo fees (~$240)',
      evidence: 'Internal logs (not accessible)',
      payout: 'Never (contractually excluded)',
      risk: 'You absorb 99.8%',
    },
    {
      name: 'Better Uptime',
      liability: '$0 (credit refunds)',
      evidence: 'Dashboard screenshots',
      payout: 'Never',
      risk: 'You absorb 100%',
    },
    {
      name: 'TrustMonitor',
      liability: '$200-$1,000 per incident',
      evidence: 'Cryptographically signed, publicly verifiable',
      payout: '3 business days',
      risk: 'Shared liability model',
    },
  ],
} as const;

// GUARANTEE SECTION (Pricing)
export const GUARANTEE_CONTENT = {
  heading: 'Real Money. Real Liability.',
  description: 'Performance-backed guarantee: We pay when we fail to detect outages. No service credits. Actual compensation. All payouts subject to service agreement verification.',
  tiers: [
    {
      name: 'Standard',
      price: 299,
      interval: 'month',
      liability: 100,
      checks: 60,
      regions: 2,
      support: 'Email (8hr response)',
      features: [
        'HTTP/HTTPS monitoring',
        'Multi-region checks (2)',
        'OpenTimestamps verification',
        '30-day evidence retention',
        '$100 per verified incident',
      ],
      badge: undefined,
    },
    {
      name: 'Professional',
      price: 999,
      interval: 'month',
      liability: 500,
      checks: 180,
      regions: 5,
      support: 'Priority (2hr response)',
      features: [
        'Everything in Standard',
        'API/TCP/DNS monitoring',
        'Multi-region checks (3+)',
        'Custom check intervals (10s minimum)',
        '7-year evidence retention',
        '$500 per verified incident',
        'SLA review with legal team',
      ],
      badge: 'MOST SELECTED',
    },
    {
      name: 'Enterprise',
      price: 1,499,
      interval: 'custom',
      liability: 7000,
      checks: 'Unlimited',
      regions: 'Custom',
      support: 'Dedicated Slack channel',
      features: [
        'Everything in Professional',
        'Custom liability caps ($700+)',
        'On-premise deployment option',
        'Custom evidence retention policies',
        'Contractual SLA guarantees',
        'Quarterly legal review',
      ],
      badge: undefined,
    },
  ],
  foundingDiscount: {
    percentage: 40,
    duration: '12 months',
    expiresDate: '2026-03-31',
  },
} as const;

// DECISION SECTION
export const DECISION_CONTENT = {
  heading: 'The Decision',
  description: 'You have two options. Only one changes your risk profile.',
  options: [
    {
      title: 'Continue Current Vendor',
      label: 'Status Quo',
      consequences: [
        'Pay $99-$5,000/month in monitoring fees',
        'Absorb 100% of incident losses',
        'Vendor liability: $0',
        'Next incident: Same outcome',
      ],
      action: null,
    },
    {
      title: 'Switch to TrustMonitor',
      label: 'Liability Transfer',
      consequences: [
        'Pay $299-$1499/month in monitoring fees',
        'TrustMonitor pays $100-$700 per verified miss',
        'Cryptographic proof for every incident',
        'Defined risk model vs. undefined losses',
      ],
      action: 'APPLY FOR FOUNDING PROGRAM',
    },
  ],
} as const;

// WAITLIST SECTION
export const WAITLIST_CONTENT = {
  heading: 'Founding Client Qualification',
  subheading: 'TrustMonitor deploys exclusively for organizations where undetected downtime creates measurable financial loss.',
  scarcity: `${SITE_CONFIG.foundingSlotsRemaining} founding slots remaining`,
  timeline: '72-hour response',
  fields: {
    contact: 'Primary Contact',
    organization: 'Organization Profile',
    exposure: 'Financial Exposure & Incident History',
  },
} as const;

// FOOTER
export const FOOTER_CONTENT = {
  disclaimer: 'TrustMonitor is a pre-launch product. This site validates founding customer interest. No monitoring services are currently operational. All guarantees subject to service agreement terms.',
  legal: [
    { label: 'SLA Preview', href: '/sla-preview.pdf' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Security', href: '/security' },
  ],
  contact: 'founding@trustmonitor.dev',
  copyright: `© ${new Date().getFullYear()} TrustMonitor. All rights reserved.`,
} as const;

// COMPETITOR DATA (for accurate quotes)
export const COMPETITOR_SLAS = {
  datadog: {
    name: 'Datadog',
    url: 'https://www.datadoghq.com/legal/msa/',
    liabilityClause: 'In no event shall Datadog be liable for lost profits or business opportunities.',
    maxCredit: 10,
  },
  pagerduty: {
    name: 'PagerDuty',
    url: 'https://www.pagerduty.com/service-level-agreement/',
    liabilityClause: 'PagerDuty\'s total liability shall not exceed fees paid in the prior 12 months.',
    capMultiplier: 1,
  },
  betterUptime: {
    name: 'Better Uptime',
    url: 'https://betteruptime.com/terms',
    liabilityClause: 'We are not liable for any indirect, incidental, or consequential damages.',
    maxCredit: 0,
  },
} as const;

// EVIDENCE BUNDLE EXAMPLE
export const EVIDENCE_EXAMPLE = {
  incident: {
    incident_id: 'inc_2026021002471234',
    detected_at: '2026-02-10T07:47:22.000Z',
    endpoint: 'https://api.example.com/payment',
    status: 'down',
    regions: ['us-east-1', 'eu-west-1', 'ap-southeast-2'],
    consensus: {
      required: 2,
      total: 3,
    },
  },

  proof: {
    hash: {
      algorithm: 'sha256',
      value: 'abc123...',
    },

    bitcoin_anchor: {
      block_height: 834921,
      anchored_at: '2026-02-10T02:47:11Z',
      ots_proof_file: 'incident-2026-02-10-0247.ots',
    },

    signature: {
      algorithm: 'ed25519',
      value: 'base64-signature-string...',
      public_key_id: 'trustmonitor-prod-2026-q1',
    },
  },

  meta: {
    generated_at: '2026-02-10T07:47:25.112Z',
    service_version: '1.3.2',
  },

  distribution: {
    evidence_url: 'https://evidence.trustmonitor.dev/2026/02/inc_2026021002471234.json',
    ots_proof_url: 'https://evidence.trustmonitor.dev/2026/02/inc_2026021002471234.ots',
  },
} as const;

// SEO / META
export const SEO = {
  title: 'TrustMonitor — We Pay When We Fail',
  description: 'The only monitoring platform with real liability. Get compensated when we miss incidents. Founding program now open for CTOs managing $10K+ monitoring spend.',
  ogImage: '/og-image.png',
  twitterHandle: '@trustmonitor',
} as const;


