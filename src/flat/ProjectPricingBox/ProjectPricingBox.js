import styles from './ProjectPricingBox.module.css';

function ProjectPricingBox() {
  return (
    <div
      className={styles.projectPricingBox}
    >
      <h3 className={styles.projectPricingHeader}>
        Projects
      </h3>
      <p style={{ fontSize: '0.8rem', textAlign: 'center' }}>
        You get a
        {' '}
        <b>free project</b>
        {' '}
        <i>(for each mentor)</i>
        {' '}
        with the start of your monthly subscription.
        After this projects are purchased individually at
        {' '}
        <b><i>prices set by the mentors</i></b>
        .
      </p>
    </div>
  );
}

export default ProjectPricingBox;
