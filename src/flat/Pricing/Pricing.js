import PricingBox from '../PricingBox';
import './pricing.css';

function Pricing() {
  return (
    <div className="pricing-container">
      <h1 style={{ margin: 60, color: 'white' }}>Pricing plans</h1>
      <div className="pricing-list">
        <PricingBox type="free" />
        <PricingBox type="basic" />
        <PricingBox type="premium" />
      </div>
    </div>
  );
}

export default Pricing;
