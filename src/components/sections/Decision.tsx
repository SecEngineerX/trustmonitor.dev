import React from 'react';
import Container from '../shared/Container';
import Button from '../shared/Button';
import { DECISION_CONTENT } from '@/utils/constants';
import styles from './Decision.module.css';

export default function Decision() {
  return (
    <section className={styles.decision} id="decision">
      <Container>
        <div className={styles.header}>
          <h2>{DECISION_CONTENT.heading}</h2>
          <p className={styles.description}>{DECISION_CONTENT.description}</p>
        </div>
        
        <div className={styles.options}>
          {DECISION_CONTENT.options.map((option, index) => (
            <div 
              key={index} 
              className={`${styles.option} ${option.action ? styles.recommended : styles.statusQuo}`}
            >
              <div className={styles.optionHeader}>
                <span className={styles.label}>{option.label}</span>
                <h3>{option.title}</h3>
              </div>
              
              <ul className={styles.consequences}>
                {option.consequences.map((consequence, cIndex) => (
                  <li key={cIndex}>{consequence}</li>
                ))}
              </ul>
              
              {option.action && (
                <Button 
                  variant="primary" 
                  size="large"
                  href="#waitlist"
                  className={styles.cta}
                >
                  {option.action}
                </Button>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
