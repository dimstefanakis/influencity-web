import ChainedBoxes from '../ChainedBoxes/index';
// import PrimaryPhone from '../Svgs/PrimaryPhone';

const data = [
  {
    description: '​Get all the necessary tools to get started with online mentoring',
  },
  {
    description: 'Take the opportunity to grow your revenue or simply earn a side-income',
  },
  // {
  //   description: 'Take the opportunity to monetize your knowdledge or expertise',
  // },
  // {
  //   description: 'Enhance your skills in managing various interactive projects',
  // },
  {
    description: 'Grow your audience by sharing your hobby or professional knowledge',
  },
];

function ForMentors({ transRef, phase }) {
  return (
    <div style={{ display: 'flex', flexFlow: 'row wrap', placeItems: 'center' }}>
      {/* <div className="point-container">
        {data.map((point) => (
          <p>{point.description}</p>
        ))}
      </div>
      <div style={{ position: 'relative', marginRight: 50 }}>
        <PrimaryPhone className="stacked-phone" style={{ left: 10, top: 30 }} />
        <PrimaryPhone className="stacked-phone" style={{ left: 20, top: 20 }} />
        <PrimaryPhone className="stacked-phone stacked-phone-front" style={{ left: 30, top: 10 }} />
      </div> */}
      <ChainedBoxes data={data} transRef={transRef} phase={phase} />
    </div>
  );
}

export default ForMentors;
