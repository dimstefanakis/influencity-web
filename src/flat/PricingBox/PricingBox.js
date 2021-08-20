import FreePricingBox from './FreePricingBox';
import BasicPricingBox from './BasicPricingBox';
import PremiumPricingBox from './PremiumPricingBox';
import styles from './PricingBox.module.css';

function PricingBox({ type }) {
  return (
    <div className={styles.pricingBox}>
      {type === 'free' ? <FreePricingBox /> : null}
      {type === 'basic' ? <BasicPricingBox /> : null}
      {type === 'premium' ? <PremiumPricingBox /> : null}
    </div>
  );
}

export default PricingBox;
