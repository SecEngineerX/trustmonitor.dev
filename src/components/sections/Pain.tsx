import React from 'react';
import Container from '../shared/Container';
import { PAIN_CONTENT } from '@/utils/constants';
import styles from './Pain.module.css';

export default function Pain() {
  return (
    <section className={styles.pain} id="pain">
      <Container>
        <div className={styles.header}>
          <h2>{PAIN_CONTENT.heading}</h2>
          <p className={styles.subheading}>{PAIN_CONTENT.subheading}</p>
        </div>
        
        <div className={styles.scenarios}>
          {PAIN_CONTENT.scenarios.map((scenario, index) => (
            <div key={index} className={styles.scenario}>
              <div className={styles.vendor}>
                <h3>{scenario.vendor}</h3>
              </div>
              
              <div className={styles.clause}>
                <p className={styles.label}>Their SLA Says:</p>
                <blockquote>
                  {scenario.clause}
                </blockquote>
              </div>
              
              <div className={styles.impact}>
                <p className={styles.label}>What You Got:</p>
                <p>{scenario.impact}</p>
              </div>
              
              <div className={styles.loss}>
                <p className={styles.label}>What You Lost:</p>
                <p className={styles.lossAmount}>{scenario.loss}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.conclusion}>
          <p>{PAIN_CONTENT.conclusion}</p>
        </div>
      </Container>
    </section>
  );
}
