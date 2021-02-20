/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import { useState, useCallback, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import WhatWeOffer from '../WhatWeOffer/index';
import PrimaryPhone from '../Svgs/PrimaryPhone';
import OnlineLearningIllustration from '../Svgs/OnlineLearningIllustration';
import Header from '../Header';
import Pricing from '../Pricing';
import SubscribeForm from '../SignUpForm';
import './landingPage.css';

const pages = [
  ({ style }) => (
    <animated.div style={{
      ...style, position: 'absolute', height: '100%', width: '100%',
    }}
    >
      <img src={`${process.env.PUBLIC_URL}/6thimage.png`} className="image-in-phone" alt="1s" />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{
      ...style, position: 'absolute', height: '100%', width: '100%',
    }}
    >
      <img src={`${process.env.PUBLIC_URL}/5thimage.png`} className="image-in-phone" alt="1s" />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{
      ...style, position: 'absolute', height: '100%', width: '100%',
    }}
    >
      <img src={`${process.env.PUBLIC_URL}/3rdimage.png`} className="image-in-phone" alt="1s" />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{
      ...style, position: 'absolute', height: '100%', width: '100%',
    }}
    >
      <img src={`${process.env.PUBLIC_URL}/4thimage.png`} className="image-in-phone" alt="1s" />
    </animated.div>
  ),
];

function LandingPage() {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(() => setIndex((state) => (state + 1) % 4), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(index, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  function handleLearnMoreClick() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />
      <div className="landing-container">
        <div className="landing-left">
          <div className="landing-text-content">
            <h1>Introducing Troosh</h1>
            <h3>
              Get started on any skill and medium.
              Learn from a number of role models interactively,
              simply and affordably as online learning should be.
            </h3>
          </div>
        </div>
        <div className="landing-right">
          <div style={{ position: 'relative', width: '60%', maxWidth: 350 }}>
            <img src={`${process.env.PUBLIC_URL}/2stimage.png`} className="image-in-phone" alt="1s" />
            <PrimaryPhone style={{ width: '100%', height: '70%' }} />
          </div>
        </div>
        <button className="learn-more cool-button" type="button" onClick={handleLearnMoreClick}>
          learn more
        </button>
      </div>
      <div className="landing-second-container">
        <div className="online-learning-illustration-container">
          <OnlineLearningIllustration style={{ width: '75%', maxWidth: '75%' }} />
        </div>
        <div className="what-is-it-about-container">
          <div className="landing-text-content">
            <h1>What is it about</h1>
            <h3 style={{ fontWeight: 500 }}>
              Troosh is a mentoring app which primarily focuses on a closer interaction
              between role models and users. It is an innovative type of service where
              users can join their favorite role models and have access to exclusive
              content that would not be otherwise publicly available.
            </h3>
            {/* <h3 style={{ fontWeight: 500 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque metus sem, dictum eu sem et, ultricies tincidunt velit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3> */}
            <div className="secondary-screen-wrapper" onClick={onClick}>
              {transitions((style, item) => {
                const Image = pages[item];
                return <Image style={style} />;
              })}
              {/* <img src={`${process.env.PUBLIC_URL}/3rdimage.png`} className="image-in-phone" alt="1s" /> */}
              <PrimaryPhone style={{ width: '100%', height: '70%' }} />
            </div>
          </div>
        </div>
      </div>
      <WhatWeOffer />
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexFlow: 'column',
      }}
      >
        <SubscribeForm />
      </div>

      <Pricing />
    </div>
  );
}

export default LandingPage;
