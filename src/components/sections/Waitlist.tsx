'use client';
import { useEffect } from 'react';
import Container from '../shared/Container';
import styles from './Waitlist.module.css';

export default function Waitlist() {
  useEffect(() => {
    const tsInput = document.getElementById('timestamp') as HTMLInputElement;
    if (tsInput) tsInput.value = Date.now().toString();
  }, []);

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xyz123';

  return (
    <section className={styles.waitlist} id="waitlist">
      <Container size="narrow">
        <form
          action={`https://formspree.io/f/${formspreeId}`}
          method="POST"
          className="tm-intake-form"
        >
          {/* Honeypot */}
          <div
            style={{
              opacity: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              height: 0,
              width: 0,
              zIndex: -1,
            }}
          >
            <label htmlFor="website">Leave this field empty</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Hidden Metadata */}
          <input type="hidden" name="form_version" value="founding_v3" />
          <input type="hidden" name="submission_timestamp" id="timestamp" />

          {/* GATE HEADER */}
          <div className="tm-gate-intro">
            <h1>Founding Client Qualification</h1>
            <p className="tm-subhead">
              TrustMonitor deploys exclusively for organizations where undetected downtime creates measurable financial loss.
            </p>
            <p className="tm-scarcity">
              <span className="accent-text">25 founding slots remaining</span> · Manual review · 48-hour response
            </p>
          </div>

          {/* SECTION 1: CONTACT */}
          <div className="tm-section">
            <h2>Primary Contact</h2>
            <div className="tm-field">
              <label htmlFor="name">
                Full name <span className="required">*</span>
              </label>
              <input type="text" id="name" name="name" required placeholder="Jane Smith" />
            </div>
            <div className="tm-field">
              <label htmlFor="email">
                Corporate email <span className="required">*</span>
              </label>
              <input type="email" id="email" name="email" required placeholder="jsmith@company.com" />
              <small>No personal domains (gmail, yahoo, etc.)</small>
            </div>
            <div className="tm-field">
              <label htmlFor="role">
                Role / Title <span className="required">*</span>
              </label>
              <input type="text" id="role" name="role" required placeholder="CTO / Head of DevOps / Founder" />
            </div>
          </div>

          {/* SECTION 2: ORGANIZATION */}
          <div className="tm-section">
            <h2>Organization Profile</h2>
            <div className="tm-field">
              <label htmlFor="company">
                Company / Domain <span className="required">*</span>
              </label>
              <input type="text" id="company" name="company" required placeholder="acme.com" />
            </div>
            <div className="tm-field">
              <label htmlFor="model">
                Business model <span className="required">*</span>
              </label>
              <select id="model" name="business_model" required>
                <option value="" disabled>
                  Select
                </option>
                <option value="saas">SaaS ($10k+ MRR)</option>
                <option value="agency">Agency (50+ client sites)</option>
                <option value="ecommerce">E-Commerce ($50k+ monthly revenue)</option>
                <option value="enterprise">Enterprise (500+ employees)</option>
                <option value="other">Other revenue-critical infrastructure</option>
              </select>
            </div>
            <div className="tm-field">
              <label htmlFor="revenue">
                Monthly revenue range <span className="required">*</span>
              </label>
              <select id="revenue" name="monthly_revenue" required>
                <option value="" disabled>
                  Select range
                </option>
                <option value="10k_50k">$10,000 – $50,000</option>
                <option value="50k_250k">$50,000 – $250,000</option>
                <option value="250k_1m">$250,000 – $1,000,000</option>
                <option value="1m_plus">$1,000,000+</option>
              </select>
            </div>
          </div>

          {/* SECTION 3: EXPOSURE & INCIDENT HISTORY */}
          <div className="tm-section">
            <h2>Financial Exposure & Incident History</h2>
            <div className="tm-field">
              <label htmlFor="hourly-loss">
                Estimated revenue loss per hour of downtime <span className="required">*</span>
              </label>
              <input type="text" id="hourly-loss" name="hourly_loss" required placeholder="$4,500" />
              <small>Approximate loss if payment processing, API, or critical service fails</small>
            </div>
            <div className="tm-field">
              <label htmlFor="missed-incidents">
                How many outages did your current monitoring tool miss or fail to alert you to in the past 12 months? <span className="required">*</span>
              </label>
              <select id="missed-incidents" name="missed_incidents" required>
                <option value="" disabled>
                  Select
                </option>
                <option value="0">0 (or unknown)</option>
                <option value="1-2">1–2 incidents</option>
                <option value="3-5">3–5 incidents</option>
                <option value="5+">5+ incidents</option>
              </select>
              <small>This is the pain question. Be honest — this qualifies you.</small>
            </div>
            <div className="tm-field">
              <label htmlFor="largest-loss">
                Largest financial loss from a single undetected outage (past 24 months)
              </label>
              <input type="text" id="largest-loss" name="largest_loss" placeholder="$43,000 (optional)" />
              <small>Optional — helps us understand your risk profile</small>
            </div>
            <div className="tm-field">
              <label htmlFor="current-tool">
                Current monitoring tool
              </label>
              <input type="text" id="current-tool" name="current_tool" placeholder="Datadog, Pingdom, Better Uptime, etc." />
              <small>Optional — helps us understand vendor migration complexity</small>
            </div>
          </div>

          {/* LIABILITY ACKNOWLEDGMENT */}
          <div className="tm-liability-box">
            <label>
              <input type="checkbox" name="liability_ack" value="acknowledged" required />
              <span>
                I acknowledge that undetected downtime creates direct financial exposure for my organization, and I am authorized to explore liability-backed monitoring contracts.
              </span>
            </label>
          </div>

          {/* PRIVACY */}
          <div className="tm-privacy-note">
            <p>
              🔒 Your information is never shared. <a href="/privacy">Privacy policy</a> · <a href="/security">Security questionnaire available</a>
            </p>
          </div>

          {/* SUBMIT */}
          <div className="tm-submit">
            <p className="tm-capacity-note">
              Due to infrastructure deployment limits, only a limited number of organizations are onboarded per review cycle.
            </p>
            <button type="submit" className="tm-button">SUBMIT FOUNDING APPLICATION</button>
            <p className="tm-review-note">
              Review within 48 hours. Qualified organizations receive contract SLA and onboarding timeline.
            </p>
          </div>
        </form>
      </Container>
    </section>
  );
}
