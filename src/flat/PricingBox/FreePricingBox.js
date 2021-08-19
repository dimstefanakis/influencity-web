import styles from './PricingBox.module.css';

function FreePricingBox() {
  return (
    <>
      <h2>Starter tier</h2>
      <div>
        <h1>FREE</h1>
      </div>
      <p className={styles.pricingDescription}>
        Free forever.
        Check out what each mentor has to offer and decide
        if they are the perfect fit for your needs!
      </p>
    </>
  );
}

export default FreePricingBox;
