'use client';
import styles from './page.module.css';

import { useEffect, useState } from 'react';

export default function DownloadSLA() {
  const [sha256, setSha256] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'verifying' | 'verified' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/download-sla', { method: 'HEAD' })
      .then(res => {
        const hash = res.headers.get('TrustMonitor-Document-SHA256');
        if (hash) setSha256(hash);
      })
      .catch(() => setSha256('unavailable'));
  }, []);

  const handleDownload = async () => {
    if (!sha256 || sha256 === 'unavailable') {
      setStatus('error');
      setErrorMsg('SHA-256 checksum not available. Cannot proceed.');
      return;
    }

    setStatus('verifying');
    setErrorMsg(null);

    try {
      const res = await fetch('/api/download-sla');
      const arrayBuffer = await res.arrayBuffer();

      const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const clientHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

      if (clientHash !== sha256) {
        setStatus('error');
        setErrorMsg('Integrity check failed. Document may be tampered.');
        return;
      }

      const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'TrustMonitor-Service-Level-Agreement.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setStatus('verified');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Download or verification error. Try again.');
    }
  };

  return (
    <>
      <style>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .sla-root {
          min-height: 100vh;
          background: #0A0A0A;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(24px, 5vw, 64px) clamp(16px, 4vw, 32px);
          font-family: 'Helvetica Neue', Arial, sans-serif;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        .sla-card {
          width: 100%;
          max-width: 680px;
          border: 1px solid #1F1F1F;
          background: #111111;
        }

        /* ── Top bar ── */
        .sla-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
          border-bottom: 1px solid #1F1F1F;
          background: #0A0A0A;
          gap: 12px;
          flex-wrap: wrap;
        }
        .sla-topbar-brand {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #3A3A3A;
        }
        .sla-topbar-pill {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C8A96E;
          border: 1px solid #C8A96E22;
          background: #C8A96E0D;
          padding: 3px 10px;
        }

        /* ── Body ── */
        .sla-body {
          padding: clamp(28px, 5vw, 48px) clamp(20px, 4vw, 40px);
        }

        /* ── Header ── */
        .sla-eyebrow {
          display: block;
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #3A3A3A;
          margin-bottom: 16px;
        }
        .sla-title {
          font-size: clamp(22px, 4vw, 32px);
          font-weight: 700;
          color: #F5F5F5;
          letter-spacing: -0.025em;
          line-height: 1.1;
          margin-bottom: 12px;
        }
        .sla-subtitle {
          font-size: 14px;
          color: #4A4A4A;
          line-height: 1.6;
          max-width: 480px;
          margin-bottom: 36px;
        }

        /* ── Divider ── */
        .sla-divider {
          height: 1px;
          background: #1F1F1F;
          margin-bottom: 32px;
        }

        /* ── Notice block ── */
        .sla-notice {
          border: 1px solid #1F1F1F;
          background: #0D0D0D;
          padding: 18px 20px;
          margin-bottom: 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .sla-notice-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .sla-notice-icon {
          width: 18px;
          height: 18px;
          min-width: 18px;
          background: #C8A96E;
          color: #0A0A0A;
          font-size: 10px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          margin-top: 1px;
        }
        .sla-notice-text {
          font-size: 13px;
          color: #6B6B6B;
          line-height: 1.6;
        }
        .sla-notice-text strong {
          color: #9A9A9A;
          font-weight: 600;
        }

        /* ── Hash row ── */
        .sla-hash-block {
          border-top: 1px solid #1A1A1A;
          padding-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .sla-hash-label {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2E2E2E;
        }
        .sla-hash-value {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: clamp(9px, 1.5vw, 11px);
          color: #C8A96E;
          word-break: break-all;
          line-height: 1.7;
        }
        .sla-hash-value.unavailable {
          color: #3A3A3A;
        }

        /* ── Download area ── */
        .sla-download-area {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sla-btn {
          width: 100%;
          padding: 16px 24px;
          background: #F5F5F5;
          color: #0A0A0A;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          transition: background 0.15s ease;
          outline: none;
          -webkit-user-select: none;
          user-select: none;
        }
        .sla-btn:hover {
          background: #FFFFFF;
        }
        .sla-btn:active {
          background: #E0E0E0;
        }
        .sla-btn:disabled {
          background: #1F1F1F;
          color: #3A3A3A;
          cursor: not-allowed;
        }
        .sla-btn-arrow {
          font-size: 16px;
          line-height: 1;
          flex-shrink: 0;
        }
        .sla-btn-verifying {
          background: #1A1A1A;
          color: #C8A96E;
          cursor: not-allowed;
        }
        .sla-btn-verifying:hover {
          background: #1A1A1A;
        }

        /* ── Status ── */
        .sla-status {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px 16px;
          border: 1px solid;
        }
        .sla-status.verified {
          border-color: #1C3A2A;
          background: #0D1F16;
        }
        .sla-status.error {
          border-color: #3A1C1C;
          background: #1F0D0D;
        }
        .sla-status.verifying {
          border-color: #2A2516;
          background: #1A1800;
        }
        .sla-status-dot {
          width: 6px;
          height: 6px;
          min-width: 6px;
          border-radius: 50%;
          margin-top: 5px;
        }
        .verified .sla-status-dot { background: #2ECC71; }
        .error .sla-status-dot { background: #E74C3C; }
        .verifying .sla-status-dot { background: #C8A96E; }

        .sla-status-text {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.6;
        }
        .verified .sla-status-text { color: #2ECC71; }
        .error .sla-status-text { color: #E74C3C; }
        .verifying .sla-status-text { color: #C8A96E; }

        /* ── Footer ── */
        .sla-footer {
          padding: 16px clamp(20px, 4vw, 40px);
          border-top: 1px solid #1A1A1A;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          background: #0A0A0A;
        }
        .sla-footer-left {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 10px;
          color: #2A2A2A;
          letter-spacing: 0.08em;
        }
        .sla-footer-right {
          font-family: 'SF Mono', Monaco, 'Courier New', monospace;
          font-size: 10px;
          color: #2A2A2A;
        }

        @media (max-width: 480px) {
          .sla-topbar {
            padding: 10px 16px;
          }
          .sla-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="sla-root">
        <div className="sla-card">

          {/* Top bar */}
          <div className="sla-topbar">
            <span className="sla-topbar-brand">TrustMonitor</span>
            <span className="sla-topbar-pill">Legally Binding</span>
          </div>

          {/* Body */}
          <div className="sla-body">

            <span className="sla-eyebrow">Official Document · SLA-2026</span>
            <h1 className="sla-title">Service Level Agreement</h1>
            <p className="sla-subtitle">
              Cryptographically verified. SHA-256 integrity enforced client-side before delivery.
            </p>

            <div className="sla-divider" />

            {/* Notice */}
            <div className="sla-notice">
              <div className="sla-notice-row">
                <div className="sla-notice-icon">!</div>
                <p className="sla-notice-text">
                  <strong>Legally binding document.</strong> By downloading, you acknowledge
                  that you have read and agree to the terms contained within.
                </p>
              </div>

              {sha256 !== null && (
                <div className="sla-hash-block">
                  <span className="sla-hash-label">SHA-256 Checksum</span>
                  <span className={`sla-hash-value${sha256 === 'unavailable' ? ' unavailable' : ''}`}>
                    {sha256 === 'unavailable' ? 'Unavailable — verification disabled' : sha256}
                  </span>
                </div>
              )}
            </div>

            {/* Download */}
            <div className="sla-download-area">
              <button
                className={`sla-btn${status === 'verifying' ? ' sla-btn-verifying' : ''}`}
                onClick={handleDownload}
                disabled={status === 'verifying'}
              >
                <span>
                  {status === 'verifying' ? 'Verifying integrity...' : 'Download SLA PDF'}
                </span>
                <span className="sla-btn-arrow">
                  {status === 'verifying' ? '◌' : '↓'}
                </span>
              </button>

              {status !== 'idle' && (
                <div className={`sla-status ${status}`}>
                  <span className="sla-status-dot" />
                  <span className="sla-status-text">
                    {status === 'verifying' && 'Computing SHA-256 and matching against server checksum...'}
                    {status === 'verified' && 'Integrity verified. Document is authentic. Download complete.'}
                    {status === 'error' && (errorMsg ?? 'An unknown error occurred.')}
                  </span>
                </div>
              )}
            </div>

          </div>

          {/* Footer */}
          <div className="sla-footer">
            <span className="sla-footer-left">Fed. R. Evid. 902(13) · 902(14)</span>
            <span className="sla-footer-right">SHA-256 · Ed25519</span>
          </div>

        </div>
      </div>
    </>
  );
}
