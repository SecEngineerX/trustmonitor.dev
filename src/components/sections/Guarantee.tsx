import React from 'react';
import Container from '../shared/Container';
import Button from '../shared/Button';
import Badge from '../shared/Badge';
import { GUARANTEE_CONTENT } from '@/utils/constants';
import styles from './Guarantee.module.css';

export default function Guarantee() {
  return (
    <section className={styles.guarantee} id="guarantee">
      <Container>
        <div className={styles.header}>
          <h2>{GUARANTEE_CONTENT.heading}</h2>
          <p className={styles.description}>{GUARANTEE_CONTENT.description}</p>
          <div className={styles.discount}>
            <Badge variant="accent">
              FOUNDING OFFER: {GUARANTEE_CONTENT.foundingDiscount.percentage}% OFF FOR {GUARANTEE_CONTENT.foundingDiscount.duration}
            </Badge>
            <p className={styles.expires}>Expires {GUARANTEE_CONTENT.foundingDiscount.expiresDate}</p>
          </div>
        </div>
        
        <div className={styles.tiers}>
          {GUARANTEE_CONTENT.tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`${styles.tier} ${tier.badge ? styles.popular : ''}`}
            >
              {tier.badge && (
                <div className={styles.badge}>
                  <Badge variant="secondary">{tier.badge}</Badge>
                </div>
              )}
              
              <div className={styles.tierHeader}>
                <h3>{tier.name}</h3>
                <div className={styles.price}>
                  {tier.price ? (
                    <>
                      <span className={styles.currency}>$</span>
                      <span className={styles.amount}>{tier.price.toLocaleString()}</span>
                      <span className={styles.interval}>/{tier.interval}</span>
                    </>
                  ) : (
                    <span className={styles.custom}>Custom</span>
                  )}
                </div>
                {tier.price && (
                  <div className={styles.foundingPrice}>
                    Founding: ${(tier.price * 0.6).toLocaleString()}/mo
                  </div>
                )}
              </div>
              
              <div className={styles.liability}>
                <div className={styles.liabilityLabel}>Per Incident Payout</div>
                <div className={styles.liabilityAmount}>${tier.liability.toLocaleString()}</div>
              </div>
              
              <div className={styles.specs}>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Checks per minute:</span>
                  <span className={styles.specValue}>{tier.checks}</span>
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Regions:</span>
                  <span className={styles.specValue}>{tier.regions}</span>
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Support:</span>
                  <span className={styles.specValue}>{tier.support}</span>
                </div>
              </div>
              
              <ul className={styles.features}>
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
              
              <Button 
                variant={tier.badge ? 'primary' : 'outline'}
                href="#waitlist"
                className={styles.cta}
              >
                {tier.price ? 'APPLY NOW' : 'CONTACT SALES'}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
