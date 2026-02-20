'use client';
import React, { useState, useEffect } from 'react';
import Container from '../shared/Container';
import { CALCULATOR_CONTENT } from '@/utils/constants';
import { calculatePayout, formatCurrency, getSuggestedTier } from '@/utils/calculator';
import styles from './Calculator.module.css';

export default function Calculator() {
  const [missedIncidents, setMissedIncidents] = useState<number>(3);
  const [avgLoss, setAvgLoss] = useState<number>(15000);
  const [result, setResult] = useState(calculatePayout({
    missedIncidents: 3,
    avgLossPerIncident: 15000,
  }));
  
  useEffect(() => {
    const newResult = calculatePayout({
      missedIncidents,
      avgLossPerIncident: avgLoss,
    });
    setResult(newResult);
  }, [missedIncidents, avgLoss]);
  
  const suggestedTier = getSuggestedTier({
    missedIncidents,
    avgLossPerIncident: avgLoss,
  });
  
  return (
    <section className={styles.calculator} id="calculator">
      <Container size="narrow">
        <div className={styles.header}>
          <h2>{CALCULATOR_CONTENT.heading}</h2>
          <p className={styles.description}>{CALCULATOR_CONTENT.description}</p>
        </div>
        
        <div className={styles.inputs}>
          <div className={styles.field}>
            <label htmlFor="incidents">
              {CALCULATOR_CONTENT.labels.incidents}
            </label>
            <div className={styles.sliderWrapper}>
              <input
                type="range"
                id="incidents"
                min="0"
                max="50"
                value={missedIncidents}
                onChange={(e) => setMissedIncidents(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.sliderValue}>{missedIncidents} incidents</div>
            </div>
          </div>
          
          <div className={styles.field}>
            <label htmlFor="avgLoss">
              {CALCULATOR_CONTENT.labels.avgLoss}
            </label>
            <div className={styles.inputWrapper}>
              <span className={styles.currencySymbol}>$</span>
              <input
                type="number"
                id="avgLoss"
                value={avgLoss}
                onChange={(e) => setAvgLoss(Number(e.target.value))}
                className={styles.numberInput}
                min="0"
                step="1000"
              />
            </div>
          </div>
        </div>
        
        <div className={styles.results}>
          <div className={styles.resultCard}>
            <div className={styles.resultLabel}>{CALCULATOR_CONTENT.labels.total}</div>
            <div className={styles.resultValue}>{formatCurrency(result.totalLosses)}</div>
          </div>
          
          <div className={styles.resultCard}>
            <div className={styles.resultLabel}>{CALCULATOR_CONTENT.labels.vendorPaid}</div>
            <div className={`${styles.resultValue} ${styles.zero}`}>
              {formatCurrency(result.vendorPaid)}
            </div>
          </div>
          
          <div className={`${styles.resultCard} ${styles.highlight}`}>
            <div className={styles.resultLabel}>{CALCULATOR_CONTENT.labels.trustmonitorPays}</div>
            <div className={`${styles.resultValue} ${styles.positive}`}>
              {formatCurrency(result.trustmonitorPays)}
            </div>
            <div className={styles.tierNote}>
              {result.numberOfPayouts} × ${result.perIncidentCap} cap ({suggestedTier} tier)
            </div>
          </div>
        </div>
        
        <div className={styles.disclaimer}>
          <p>{CALCULATOR_CONTENT.disclaimer}</p>
        </div>
      </Container>
    </section>
  );
}
