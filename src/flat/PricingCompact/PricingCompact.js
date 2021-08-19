/* eslint-disable react/no-unescaped-entities */
import BetweenHeader from '../BetweenHeader';
import ProjectPricingBox from '../ProjectPricingBox';
import styles from './PricingCompact.module.css';

function PricingCompact() {
  return (
    <div>
      <BetweenHeader title="Pricing" details="Applied per mentor" />
      <div style={{
        width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <div className={styles.pricingCompact}>
          <h2>$9/monthly</h2>
          <p style={{ maxWidth: '80%', textAlign: 'center' }}>
            Troosh let's you start small and grow big.
            Start learning with a base subscription,
            once you are sure,
            you can go even further beyond
          </p>
          <p><b>Includes</b></p>
          <ul className={styles.benefitsList}>
            <li>
              Regular personalised content
            </li>
            <li>
              Free access to one project
            </li>
            <li>
              Direct email support
            </li>
          </ul>
          <ProjectPricingBox />
        </div>
      </div>
    </div>
  );
}

export default PricingCompact;
