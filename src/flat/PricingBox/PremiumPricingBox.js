function PremiumPricingBox() {
  return (
    <>
      <h2>Premium tier</h2>
      <div>
        <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'baseline' }}>
          <h1 style={{ marginBottom: 0 }}>Custom</h1>
          <h3 style={{
            marginTop: 0, marginBottom: 0, color: 'gray',
          }}
          >
            /month
          </h3>
        </div>
        <span style={{ color: 'gray', marginBottom: 20, display: 'block' }}>Set by the mentor</span>
      </div>
      <p className="pricing-description">
        Skyrocket your skills. This is the best choice for those
        who want their skills to go even further beyond.
      </p>
      <ul className="pro-list">
        <li style={{ fontWeight: 'bold' }}>
          All the previous and...
        </li>
        <li>
          All the content your mentor has to offer.
        </li>
        <li>
          Access to all the group projects.
        </li>
        <li>
          Direct feedback from your mentor.
        </li>
      </ul>
    </>
  );
}

export default PremiumPricingBox;
