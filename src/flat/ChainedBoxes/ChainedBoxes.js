import {
  useTransition, animated,
} from 'react-spring/web.cjs';

function ChainedBoxes({ data, transRef, phase }) {
  console.log(phase);
  // check phase
  // if its leaving and show/hide items accordingly
  // use phase as an "open" variable from the docs
  const transitions = useTransition(phase === 'leave' ? [] : data, {
    ref: transRef,
    trail: 500 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });
  // useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6]);

  return (
    <div className="points-container">
      {transitions((style, item) => (
        (
          <animated.div style={style} className="point-box">
            {item.description}
          </animated.div>
        )
      ))}
    </div>
  );
}

export default ChainedBoxes;
