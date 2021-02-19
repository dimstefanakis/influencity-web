import FreePricingBox from './FreePricingBox';
import BasicPricingBox from './BasicPricingBox';
import PremiumPricingBox from './PremiumPricingBox';
import './pricingBox.css';

function PricingBox({ type }) {
  return (
    <div className="pricing-box">
      {type === 'free' ? <FreePricingBox /> : null}
      {type === 'basic' ? <BasicPricingBox /> : null}
      {type === 'premium' ? <PremiumPricingBox /> : null}
    </div>
  );
}

export default PricingBox;
