import React from 'react';
import Container from '../shared/Container';
import { FOOTER_CONTENT } from '@/utils/constants';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.trustBadges}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🔐</span>
              <span className={styles.badgeText}>End-to-End Encrypted</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>GDPR Compliant</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>⚙️</span>
              <span className={styles.badgeText}>SOC 2-Aligned</span>
            </div>
          </div>

          <div className={styles.disclaimer}>
            <p>{FOOTER_CONTENT.disclaimer}</p>
          </div>
          
          <div className={styles.links}>
            {FOOTER_CONTENT.legal.map((link, index) => (
              <a key={index} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>
          
          <div className={styles.contact}>
            <p>
              For inquiries: <a href={`mailto:${FOOTER_CONTENT.contact}`}>{FOOTER_CONTENT.contact}</a>
            </p>
          </div>
          
          <div className={styles.copyright}>
            <p>{FOOTER_CONTENT.copyright}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
