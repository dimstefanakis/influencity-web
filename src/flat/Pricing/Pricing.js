import PricingBox from '../PricingBox';
import './pricing.css';

function Pricing() {
  return (
    <div className="pricing-container">
      <h1 style={{ margin: 60, color: 'white' }}>Pricing plans</h1>
      <div className="pricing-list">
        <PricingBox />
        <PricingBox />
        <PricingBox />
      </div>
    </div>
  );
}

export default Pricing;
