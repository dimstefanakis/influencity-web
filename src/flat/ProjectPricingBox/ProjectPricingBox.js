import './projectPricingBox.css';

function ProjectPricingBox() {
  return (
    <div
      className="project-pricing-box"
    >
      <h3>
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
