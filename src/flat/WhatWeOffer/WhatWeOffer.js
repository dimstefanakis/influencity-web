/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useTransition, animated } from 'react-spring/web.cjs';
import ForMentors from './ForMentors';
import ForMentees from './ForMentees';
import './whatWeOffer.css';

function WhatWeOffer() {
  const [index, setIndex] = useState(0);

  // 80 is calculated from the height + margin of the top tabs
  // without it the user experiences jumping
  const transitions = useTransition(index, {
    from: {
      opacity: 0, transform: 'translate3d(0,100%,0)', position: 'absolute', top: 80, width: '100%',
    },
    enter: {
      opacity: 1, transform: 'translate3d(0,0%,0)', position: 'static', width: '100%',
    },
    leave: {
      opacity: 0, transform: 'translate3d(0,50%,0)', position: 'absolute', top: 80, width: '100%',
    },
  });
  /* const mentorRef = useRef();
  const menteeRef = useRef();

  useChain(index === 0 ? [menteeRef, mentorRef] : [mentorRef, menteeRef],
    [0, index === 0 ? 0.1 : 0.6]); */

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column',
    }}
    >
      <h1 style={{ maxWidth: 300, textAlign: 'center', margin: 60 }}>The best place to start any skill</h1>
      <div className="what-we-offer-content-container">
        <div className="offer-selector">
          <div className="offer-selector-button" style={{ backgroundColor: index === 0 ? '#efb46c' : null }} onClick={() => setIndex(0)} role="tab">For mentees</div>
          <div className="offer-selector-button" style={{ backgroundColor: index === 1 ? '#efb46c' : null }} onClick={() => setIndex(1)} role="tab">For mentors</div>
        </div>
        {transitions((style, item, t) => {
          if (item === 0) {
            return (
              <animated.div style={style}>
                <ForMentees phase={t.phase} />
              </animated.div>
            );
          }
          return (
            <animated.div style={style}>
              <ForMentors phase={t.phase} />
            </animated.div>
          );
        })}
      </div>
    </div>
  );
}

export default WhatWeOffer;
