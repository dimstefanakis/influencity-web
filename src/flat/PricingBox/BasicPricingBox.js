import styles from './PricingBox.module.css';

function BasicPricingBox() {
  return (
    <>
      <h2>Basic tier</h2>
      <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'baseline' }}>
        <h1 style={{ marginBottom: 0 }}>{(4.99).toLocaleString('en-US', { style: 'currency', currency: 'EUR' })}</h1>
        <h3 style={{ marginTop: 0, color: 'gray' }}>/month</h3>
      </div>
      <p className={styles.pricingDescription}>
        Start learning affordably. This is the best choice for those
        who are just getting started learning new skills.
      </p>
      <ul className={styles.proList}>
        <li>
          Wide variety of regular content by your mentor.
        </li>
        <li>
          Get awarded for your progress.
        </li>
        <li>
          Access to one group project.
        </li>
      </ul>
    </>
  );
}

export default BasicPricingBox;
