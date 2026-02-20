import React from 'react';
import Container from '../shared/Container';
import { COMPARISON_CONTENT } from '@/utils/constants';
import styles from './Comparison.module.css';

export default function Comparison() {
  return (
    <section className={styles.comparison} id="comparison">
      <Container>
        <div className={styles.header}>
          <h2>{COMPARISON_CONTENT.heading}</h2>
          <p className={styles.description}>{COMPARISON_CONTENT.description}</p>
        </div>
        
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Liability</th>
                <th>Evidence</th>
                <th>Payout Timeline</th>
                <th>Risk Absorption</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_CONTENT.vendors.map((vendor, index) => (
                <tr 
                  key={index}
                  className={vendor.name === 'TrustMonitor' ? styles.highlight : ''}
                >
                  <td className={styles.vendorName}>{vendor.name}</td>
                  <td>{vendor.liability}</td>
                  <td>{vendor.evidence}</td>
                  <td>{vendor.payout}</td>
                  <td className={styles.risk}>{vendor.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
