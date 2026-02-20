import React from 'react';
import Container from '../shared/Container';
import styles from './TrustSignals.module.css';

export default function TrustSignals() {
  return (
    <section className={styles.trustSignals} id="trust-signals">
      <Container>
        <div className={styles.content}>
          <div className={styles.signals}>
            {/* Enterprise Infrastructure */}
            <div className={styles.signal}>
              <div className={styles.icon}>🔐</div>
              <div className={styles.text}>
                <h4>Enterprise-Grade Infrastructure</h4>
                <p>Hosted on AWS with multi-region redundancy and automated failover</p>
              </div>
            </div>

            {/* Cryptographic Verification */}
            <div className={styles.signal}>
              <div className={styles.icon}>✓</div>
              <div className={styles.text}>
                <h4>Cryptographically Verifiable</h4>
                <p>All incident evidence is signed with Ed25519 and anchored to Bitcoin blockchain</p>
              </div>
            </div>

            {/* Data Protection */}
            <div className={styles.signal}>
              <div className={styles.icon}>🛡️</div>
              <div className={styles.text}>
                <h4>GDPR & Data Protection Compliant</h4>
                <p>End-to-end encryption for all customer data with 7-year retention guarantee</p>
              </div>
            </div>

            {/* Security Standards */}
            <div className={styles.signal}>
              <div className={styles.icon}>⚙️</div>
              <div className={styles.text}>
                <h4>Industry-Standard Security Practices</h4>
                <p>Built on SOC 2-aligned infrastructure with continuous security audits</p>
              </div>
            </div>

            {/* Transparent Operations */}
            <div className={styles.signal}>
              <div className={styles.icon}>📋</div>
              <div className={styles.text}>
                <h4>Transparent Operations</h4>
                <p>All incident evidence is publicly verifiable and independently auditable</p>
              </div>
            </div>

            {/* Legal Backing */}
            <div className={styles.signal}>
              <div className={styles.icon}>⚖️</div>
              <div className={styles.text}>
                <h4>Legally Binding Contracts</h4>
                <p>Guaranteed liability with explicit payout terms and no exclusion clauses</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
