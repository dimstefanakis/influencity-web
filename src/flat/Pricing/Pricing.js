import PricingBox from '../PricingBox';
import styles from './Pricing.module.css';

function Pricing() {
  return (
    <div className={styles.pricingContainer}>
      <h1 style={{ margin: 60, color: 'white' }}>Pricing plans</h1>
      <div className={styles.pricingList}>
        <PricingBox type="free" />
        <PricingBox type="basic" />
        <PricingBox type="premium" />
      </div>
    </div>
  );
}

export default Pricing;
