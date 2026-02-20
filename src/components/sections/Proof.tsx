'use client';

import React, { useEffect, useState } from 'react';
import Container from '../shared/Container';

// ─── Types ────────────────────────────────────────────────────────────────────

type Evidence = {
  incident: {
    incident_id: string;
    detected_at: string;
    endpoint: string;
    status: string;
    regions: string[];
    consensus: { required: number; total: number };
  };
  proof: {
    hash: { algorithm: string; value: string };
    bitcoin_anchor: {
      block_height: number;
      anchored_at: string;
      network: string;
      ots_proof_file: string;
    };
    signature: {
      algorithm: string;
      public_key_id: string;
      value: string;
    };
  };
  meta: {
    generated_at: string;
    service_version: string;
    environment: string;
  };
  distribution: {
    evidence_url: string;
    ots_proof_url: string;
  };
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(iso: string) {
  return new Date(iso).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
    timeZoneName: 'short',
  });
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Proof() {
  const [evidence, setEvidence] = useState<Evidence | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/evidence/inc_2026021002471234.json')
      .then((r) => {
        if (!r.ok) throw new Error('fetch failed');
        return r.json();
      })
      .then((d: Evidence) => {
        setEvidence(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <style>{`
        /* ── Reset & base ── */
        .proof-section {
          padding: 80px 0 96px;
          background: #fff;
          border-top: 1px solid #E5E7EB;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* ── Header ── */
        .proof-eyebrow {
          display: block;
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9CA3AF;
          margin-bottom: 20px;
        }
        .proof-heading {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: clamp(26px, 5vw, 40px);
          font-weight: 700;
          color: #111827;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin: 0 0 16px;
        }
        .proof-sub {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: clamp(14px, 2.5vw, 16px);
          color: #4B5563;
          line-height: 1.7;
          max-width: 580px;
          margin: 0 0 48px;
        }
        .proof-state-text {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 13px;
          color: #9CA3AF;
          margin-top: 24px;
        }
        .proof-error-text {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 13px;
          color: #7F1D1D;
          margin-top: 24px;
        }

        /* ── Card ── */
        .proof-card {
          border: 1px solid #111827;
          background: #FAFAFA;
          overflow: hidden;
        }
        .proof-card-inner {
          padding: clamp(16px, 4vw, 32px);
        }

        /* ── Card top bar ── */
        .proof-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          padding-bottom: 20px;
          border-bottom: 1px solid #E5E7EB;
          margin-bottom: 24px;
        }
        .proof-card-top-left {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .proof-incident-id {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: clamp(11px, 2vw, 13px);
          font-weight: 500;
          color: #111827;
          word-break: break-all;
        }
        .proof-badge {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: #fff;
          background: #111827;
          padding: 3px 8px;
          white-space: nowrap;
        }
        .proof-timestamp {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 12px;
          color: #9CA3AF;
          white-space: nowrap;
        }

        /* ── Stats grid ── */
        .proof-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #E5E7EB;
          background: #fff;
          margin-bottom: 32px;
        }
        @media (max-width: 640px) {
          .proof-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .proof-stat:nth-child(2) {
            border-right: none !important;
          }
          .proof-stat:nth-child(3),
          .proof-stat:nth-child(4) {
            border-top: 1px solid #E5E7EB;
          }
          .proof-stat:nth-child(4) {
            border-right: none !important;
          }
        }
        @media (max-width: 380px) {
          .proof-stats-grid {
            grid-template-columns: 1fr;
          }
          .proof-stat {
            border-right: none !important;
            border-top: 1px solid #E5E7EB;
          }
          .proof-stat:first-child {
            border-top: none;
          }
        }
        .proof-stat {
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-right: 1px solid #E5E7EB;
        }
        .proof-stat-label {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9CA3AF;
        }
        .proof-stat-val {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #111827;
        }
        .proof-stat-code {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 11px;
          color: #111827;
          word-break: break-all;
          line-height: 1.6;
        }

        /* ── Section label ── */
        .proof-section-label {
          display: block;
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9CA3AF;
          margin-bottom: 12px;
        }

        /* ── Chain ── */
        .proof-chain {
          border: 1px solid #E5E7EB;
          background: #fff;
          margin-bottom: 32px;
        }
        .proof-step {
          display: grid;
          grid-template-columns: 200px 1fr;
          border-bottom: 1px solid #E5E7EB;
        }
        .proof-step:last-child {
          border-bottom: none;
        }
        @media (max-width: 600px) {
          .proof-step {
            grid-template-columns: 1fr;
          }
          .proof-step-left {
            border-right: none !important;
            border-bottom: 1px solid #E5E7EB;
          }
        }
        .proof-step-left {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 18px 16px;
          border-right: 1px solid #E5E7EB;
          background: #F9FAFB;
        }
        .proof-step-num {
          width: 22px;
          height: 22px;
          min-width: 22px;
          flex-shrink: 0;
          background: #111827;
          color: #fff;
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .proof-step-title {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #111827;
          line-height: 1.4;
          padding-top: 2px;
        }
        .proof-step-right {
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          justify-content: center;
        }
        .proof-step-val {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: clamp(10px, 1.8vw, 12px);
          color: #111827;
          line-height: 1.7;
          word-break: break-all;
        }
        .proof-step-note {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 12px;
          color: #9CA3AF;
          line-height: 1.55;
        }
        .proof-meta-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .proof-meta-text {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 13px;
          color: #374151;
        }
        .proof-meta-strong {
          color: #111827;
          font-weight: 600;
        }
        .proof-pipe {
          color: #D1D5DB;
        }

        /* ── Verify grid ── */
        .proof-verify-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid #E5E7EB;
          background: #fff;
          margin-bottom: 24px;
        }
        @media (max-width: 680px) {
          .proof-verify-grid {
            grid-template-columns: 1fr;
          }
          .proof-verify-cmd {
            border-right: none !important;
            border-bottom: 1px solid #E5E7EB;
          }
          .proof-verify-cmd:last-child {
            border-bottom: none;
          }
        }
        .proof-verify-cmd {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-right: 1px solid #E5E7EB;
        }
        .proof-cmd-label {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 11px;
          color: #6B7280;
        }
        .proof-pre {
          margin: 0;
          padding: 8px 10px;
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: clamp(10px, 1.5vw, 11px);
          color: #111827;
          background: #F3F4F6;
          border: 1px solid #E5E7EB;
          overflow-x: auto;
          white-space: pre;
          line-height: 1.6;
        }
        .proof-link {
          color: #1E40AF;
          text-decoration: none;
          word-break: break-all;
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: clamp(10px, 1.5vw, 11px);
        }
        .proof-link:hover {
          text-decoration: underline;
        }

        /* ── Downloads ── */
        .proof-downloads {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 20px;
          border-top: 1px solid #E5E7EB;
        }
        .proof-downloads-label {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9CA3AF;
          margin-right: 4px;
        }
        .proof-dl-link {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 12px;
          color: #1E40AF;
          text-decoration: none;
        }
        .proof-dl-link:hover {
          text-decoration: underline;
        }

        /* ── Legal ── */
        .proof-legal {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #F3F4F6;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 11px;
          color: #9CA3AF;
          line-height: 1.65;
        }
      `}</style>

      <section className="proof-section" id="proof">
        <Container>
          {loading && (
            <p className="proof-state-text">Loading evidence bundle...</p>
          )}

          {!loading && !evidence && (
            <p className="proof-error-text">Evidence unavailable. Contact support.</p>
          )}

          {!loading && evidence && (() => {
            const { incident, proof, meta, distribution } = evidence;
            const hash = proof.hash.value;

            return (
              <>
                {/* Header */}
                <span className="proof-eyebrow">
                  Evidence Bundle · {incident.incident_id}
                </span>
                <h2 className="proof-heading">This is what proof looks like.</h2>
                <p className="proof-sub">
                  Every outage TrustMonitor detects is cryptographically sealed —
                  hashed, timestamped on the Bitcoin blockchain, and signed with an
                  Ed25519 key. You get a tamper-proof record you can verify without
                  trusting us.
                </p>

                {/* Card */}
                <div className="proof-card">
                  <div className="proof-card-inner">

                    {/* Top bar */}
                    <div className="proof-card-top">
                      <div className="proof-card-top-left">
                        <span className="proof-incident-id">{incident.incident_id}</span>
                        <span className="proof-badge">{incident.status.toUpperCase()}</span>
                      </div>
                      <time className="proof-timestamp">{fmt(incident.detected_at)}</time>
                    </div>

                    {/* Stats row */}
                    <div className="proof-stats-grid">
                      <div className="proof-stat">
                        <span className="proof-stat-label">Endpoint</span>
                        <code className="proof-stat-code">{incident.endpoint}</code>
                      </div>
                      <div className="proof-stat">
                        <span className="proof-stat-label">Consensus</span>
                        <span className="proof-stat-val">
                          {incident.consensus.total}/{incident.consensus.total} regions
                        </span>
                      </div>
                      <div className="proof-stat">
                        <span className="proof-stat-label">Environment</span>
                        <span className="proof-stat-val">{meta.environment}</span>
                      </div>
                      <div className="proof-stat" style={{ borderRight: 'none' }}>
                        <span className="proof-stat-label">Service Version</span>
                        <span className="proof-stat-val">v{meta.service_version}</span>
                      </div>
                    </div>

                    {/* Proof chain */}
                    <span className="proof-section-label">Cryptographic Proof Chain</span>
                    <div className="proof-chain">

                      <div className="proof-step">
                        <div className="proof-step-left">
                          <span className="proof-step-num">1</span>
                          <span className="proof-step-title">Multi-Region Consensus</span>
                        </div>
                        <div className="proof-step-right">
                          <span className="proof-step-val">
                            {incident.regions.join(' · ')}
                          </span>
                          <span className="proof-step-note">
                            {incident.consensus.total} probes confirmed independently.
                            Requires {incident.consensus.required} for consensus.
                            No single point of trust.
                          </span>
                        </div>
                      </div>

                      <div className="proof-step">
                        <div className="proof-step-left">
                          <span className="proof-step-num">2</span>
                          <span className="proof-step-title">SHA-256 Hash</span>
                        </div>
                        <div className="proof-step-right">
                          <span className="proof-step-val">
                            {hash.slice(0, 32)}
                            <br />
                            {hash.slice(32)}
                          </span>
                          <span className="proof-step-note">
                            Fingerprint of the complete evidence payload.
                            One byte changed → different hash.
                          </span>
                        </div>
                      </div>

                      <div className="proof-step">
                        <div className="proof-step-left">
                          <span className="proof-step-num">3</span>
                          <span className="proof-step-title">Bitcoin Mainnet Anchor</span>
                        </div>
                        <div className="proof-step-right">
                          <div className="proof-meta-row">
                            <span className="proof-meta-text">
                              Block{' '}
                              <strong className="proof-meta-strong">
                                {proof.bitcoin_anchor.block_height.toLocaleString()}
                              </strong>
                            </span>
                            <span className="proof-pipe">|</span>
                            <span className="proof-meta-text">
                              {fmt(proof.bitcoin_anchor.anchored_at)}
                            </span>
                          </div>
                          <span className="proof-step-note">
                            Hash embedded in the Bitcoin {proof.bitcoin_anchor.network}.
                            Immutable. No one can backdate this.
                          </span>
                        </div>
                      </div>

                      <div className="proof-step">
                        <div className="proof-step-left">
                          <span className="proof-step-num">4</span>
                          <span className="proof-step-title">Ed25519 Signature</span>
                        </div>
                        <div className="proof-step-right">
                          <span className="proof-step-val">
                            {proof.signature.public_key_id}
                          </span>
                          <span className="proof-step-note">
                            Signed with TrustMonitor's published key. Verify against
                            our public key registry independently.
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Verify yourself */}
                    <span className="proof-section-label">Verify It Yourself</span>
                    <div className="proof-verify-grid">

                      <div className="proof-verify-cmd">
                        <span className="proof-cmd-label">1. Verify Bitcoin timestamp</span>
                        <pre className="proof-pre">
                          <code>{`ots verify ${proof.bitcoin_anchor.ots_proof_file}`}</code>
                        </pre>
                      </div>

                      <div className="proof-verify-cmd">
                        <span className="proof-cmd-label">2. Check the hash</span>
                        <pre className="proof-pre">
                          <code>{`shasum -a 256 \\\n  ${incident.incident_id}.json`}</code>
                        </pre>
                      </div>

                      <div className="proof-verify-cmd" style={{ borderRight: 'none' }}>
                        <span className="proof-cmd-label">3. View on blockchain</span>
                        <pre className="proof-pre">
                          <a
                            href={`https://blockstream.info/block-height/${proof.bitcoin_anchor.block_height}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proof-link"
                          >
                            blockstream.info/block-height/
                            {proof.bitcoin_anchor.block_height} ↗
                          </a>
                        </pre>
                      </div>

                    </div>

                    {/* Downloads */}
                    <div className="proof-downloads">
                      <span className="proof-downloads-label">Download</span>
                      <a href={distribution.evidence_url} download className="proof-dl-link">
                        JSON bundle ↓
                      </a>
                      <span className="proof-pipe">·</span>
                      <a href={distribution.ots_proof_url} download className="proof-dl-link">
                        OTS proof ↓
                      </a>
                    </div>

                  </div>
                </div>

                {/* Legal */}
                <p className="proof-legal">
                  Generated {fmt(meta.generated_at)} · Self-authenticating electronic
                  record · Fed. R. Evid. 902(13) &amp; 902(14) · Bitcoin timestamp
                  provides proof-of-existence prior to any dispute.
                </p>
              </>
            );
          })()}
        </Container>
      </section>
    </>
  );
}
