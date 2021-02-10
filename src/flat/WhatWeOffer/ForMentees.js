import ChainedBoxes from '../ChainedBoxes/index';
// import PrimaryPhone from '../Svgs/PrimaryPhone';

const data = [
  {
    description: 'Learn a new skill that interests you from your favorite mentor​',
  },
  {
    description: 'Enhance your teamwork skills by partaking in group projects',
  },
  {
    description: 'Improve your skills, reach milestones and collect awards',
  },
];

function ForMentees({ transRef, phase }) {
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

export default ForMentees;
