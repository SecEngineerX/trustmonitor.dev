import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import styles from './page.module.css';

export default function ThankYou() {
  return (
    <main className={styles.thankYou}>
      <Container size="narrow">
        <div className={styles.content}>
          <h1>Application Received</h1>
          
          <div className={styles.confirmation}>
            <p className={styles.lead}>
              Your founding client application has been submitted successfully.
            </p>
            
            <div className={styles.next}>
              <h2>What Happens Next</h2>
              <ol className={styles.steps}>
                <li>
                  <strong>Manual Review</strong>
                  <p>Our team reviews each application within 48 hours to assess fit and infrastructure requirements.</p>
                </li>
                <li>
                  <strong>Qualification Call</strong>
                  <p>If your organization qualifies, we schedule a 30-minute technical review to discuss your monitoring needs.</p>
                </li>
                <li>
                  <strong>Contract & SLA</strong>
                  <p>Qualified organizations receive our complete SLA, liability terms, and onboarding timeline.</p>
                </li>
                <li>
                  <strong>Infrastructure Deployment</strong>
                  <p>We deploy your dedicated monitoring infrastructure and begin verification testing.</p>
                </li>
              </ol>
            </div>
            
            <div className={styles.timeline}>
              <p>
                <strong>Expected Timeline:</strong> 48-hour review → 7-day onboarding → Production deployment
              </p>
            </div>
            
            <div className={styles.contact}>
              <p>
                Questions before your review? Email <a href="mailto:founding@trustmonitor.dev">founding@trustmonitor.dev</a>
              </p>
            </div>
            
            <div className={styles.cta}>
              <Button href="/" variant="outline">
                Return to Homepage
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
