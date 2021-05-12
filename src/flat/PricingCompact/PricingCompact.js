/* eslint-disable react/no-unescaped-entities */
import BetweenHeader from '../BetweenHeader';
import ProjectPricingBox from '../ProjectPricingBox';
import './pricingCompact.css';

function PricingCompact() {
  return (
    <div>
      <BetweenHeader title="Pricing" details="Applied per mentor" />
      <div style={{
        width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <div style={{
          width: '50%',
          maxWidth: 500,
          backgroundColor: '#aaf0d1',
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          borderRadius: 10,
          position: 'relative',
          paddingBottom: 160,
          marginBottom: 60,
        }}
        >
          <h2>$7/monthly</h2>
          <p style={{ maxWidth: '80%', textAlign: 'center' }}>
            Troosh let's you start small and grow big.
            Start learning with a base subscription,
            once you are sure,
            you can go even further beyond
          </p>
          <p><b>Includes</b></p>
          <ul className="benefits-list">
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
