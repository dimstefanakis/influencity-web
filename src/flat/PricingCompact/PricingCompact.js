/* eslint-disable react/no-unescaped-entities */
import BetweenHeader from '../BetweenHeader';
import ProjectPricingBox from '../ProjectPricingBox';
import styles from './PricingCompact.module.css';

function PricingCompact() {
  return (
    <div>
      <BetweenHeader title="Pricing" details="Applied per mentor" />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className={styles.pricingCompact}>
          <h2>9€/monthly</h2>
          <p style={{ maxWidth: '80%', textAlign: 'center' }}>
            Troosh let's you start small and grow big. Start learning with a
            base subscription, once you are sure, you can go even further beyond
          </p>
          <p style={{ marginTop: 20 }}>
            <b>Includes</b>
          </p>
          <ul className={styles.benefitsList}>
            <li>Regular personalised content</li>
            <li>Free access to one project</li>
            <li>Direct email support</li>
          </ul>
          <ProjectPricingBox />
        </div>
      </div>
    </div>
  );
}

function Pricing2() {
  return (
    <div>
      <BetweenHeader title="Pricing" details="Applied per mentor" />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexFlow: 'row wrap',
        }}
      >
        <div
          className={styles.pricing}
          style={{ border: '3px solid #545454', borderRadius: 10 }}
        >
          <h2>Free</h2>
          <div className={styles.pricingDescription}>
            <p style={{ maxWidth: '80%', textAlign: 'center', height: 100 }}>
              Troosh let's you start small and grow big. Start learning free,
              once you are sure, you can go even further beyond
            </p>
            <p style={{ marginTop: 20 }}>
              <b>Includes</b>
            </p>
            <ul className={styles.benefitsList}>
              <li>Wide variety of regular content</li>
            </ul>
          </div>
        </div>
        <div
          className={styles.pricing}
          style={{
            border: '3px solid transparent',
            borderRadius: 10,
            backgroundColor: 'rgb(170, 240, 209)',
          }}
        >
          <h2>9€/monthly</h2>
          <div className={styles.pricingDescription}>
            <p style={{ maxWidth: '80%', textAlign: 'center', height: 100 }}>
              For when you feel that special connection with your mentor
            </p>
            <p style={{ marginTop: 20 }}>
              <b>Includes</b>
            </p>
            <ul className={styles.benefitsList}>
              <li>Direct chat with your mentor</li>
              <li>A free monthly project</li>
              <li>Countinuously updated resources by your mentor</li>
            </ul>
          </div>
        </div>
        <div
          className={styles.pricing}
          style={{
            border: '3px solid transparent',
            borderRadius: 10,
            backgroundColor: '#ffd29b',
          }}
        >
          <h2>Projects</h2>
          <div className={styles.pricingDescription}>
            <p style={{ maxWidth: '80%', textAlign: 'center', height: 100 }}>
              Individual interactive projects with
              {' '}
              <b>prices set by the mentors</b>
            </p>
            <p style={{ marginTop: 20 }}>
              <b>Includes</b>
            </p>
            <ul className={styles.benefitsList}>
              <li>Specialized exercises</li>
              <li>Direct feedback from your mentor</li>
              <li>Awards based on your progress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing2;
