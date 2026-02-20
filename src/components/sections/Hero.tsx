import React from 'react';
import Container from '../shared/Container';
import Button from '../shared/Button';
import { HERO_CONTENT } from '@/utils/constants';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container size="narrow">
        <div className={styles.content}>
          {/* Timestamp */}
          <div className={styles.timestamp}>
            {HERO_CONTENT.timestamp}
          </div>
          
          {/* Incident Declaration */}
          <h1 className={styles.incident}>
            {HERO_CONTENT.incident.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < HERO_CONTENT.incident.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          
          {/* Pain Points */}
          <div className={styles.pain}>
            {HERO_CONTENT.pain.map((point, index) => (
              <p key={index} className={styles.painPoint}>
                {point}
              </p>
            ))}
          </div>
          
          {/* Question */}
          <p className={styles.question}>
            {HERO_CONTENT.question}
          </p>
          
          {/* CTA Buttons */}
          <div className={styles.cta}>
            <Button 
              variant="primary" 
              size="large"
              href="#calculator"
            >
              {HERO_CONTENT.cta.primary}
            </Button>
            <Button 
              variant="outline" 
              size="large"
              href="/sla-preview.pdf"
            >
              {HERO_CONTENT.cta.secondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
