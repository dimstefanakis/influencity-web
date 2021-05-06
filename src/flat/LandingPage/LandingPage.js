/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import { useState, useCallback, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { Helmet } from 'react-helmet';
import WhatWeOffer from '../WhatWeOffer/index';
import SideBySideFeature from '../SideBySideFeature';
import BetweenHeader from '../BetweenHeader';
import PrimaryPhone from '../Svgs/PrimaryPhone';
import OnlineLearningIllustration from '../Svgs/OnlineLearningIllustration';
import Header from '../Header';
import Pricing from '../Pricing';
import Faq from '../Faq';
import SubscribeForm from '../SignUpForm';
import Footer from '../Footer';
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Troosh</title>
        <link rel="canonical" href="https://troosh.app" />
        <meta name="description" content="The best place to start any skill. Start learning today with the innovative application, affordably." />
      </Helmet>
      <Header />
      <div className="landing-container">
        <div className="landing-full">
          <div className="hero-container">
            <div className="hero-text-container">
              <div className="hero-inner-container">
                <h1 className="hero-header">
                  The most interactive coaching app
                </h1>
                <h2 style={{ maxWidth: 400, fontWeight: 300 }}>Get started on any skill affordably, as learning should be</h2>
                <div>
                  <span>
                    <b>When is it released? </b>
                    <span style={{ fontStyle: 'italic' }}>
                      Join our
                      {' '}
                      <a href="#newsletter">newsletter</a>
                      {' '}
                      and be the first to know!
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="primary-image-container">
              <img src={`${process.env.PUBLIC_URL}/smartmockups_ko9a7vk7.png`} style={{ objectFit: 'contain', maxHeight: '80vh' }} alt="phone" />
            </div>
          </div>
        </div>
        {/* <div className="landing-left" />
        <div className="landing-right" /> */}
        <button className="learn-more cool-button" type="button" onClick={handleLearnMoreClick}>
          learn more
        </button>
      </div>
      <BetweenHeader title="Get the most innovative learning experience" quote="Online learning requires 40-60% less time to learn" />
      <SideBySideFeature image={`${process.env.PUBLIC_URL}/smartmockups_koam9nna.png`} side="right" title="Learn new skills" details="Get started on a selection of mediums and find the coach that suits you" />
      <SideBySideFeature image={`${process.env.PUBLIC_URL}/smartmockups_koaml62o.png`} side="left" title="Join projects" details="Practice is the key to success. Projects let you hone your skills and get practical experience solo or on a team, with the guidance of your mentor" />
      <SideBySideFeature image={`${process.env.PUBLIC_URL}/smartmockups_koaq867p.png`} side="right" title="Get awarded" details="Perform well and get awarded for your progess" />
      <BetweenHeader title="What's in it for mentors?" quote="The online learning industry is projected to pass $370 billion by 2026" />
      <SideBySideFeature image={`${process.env.PUBLIC_URL}/smartmockups_kobruoks.png`} side="left" title="Organize your thoughts in steps" color="#aaf0d1" details="Create and link multiple recourses together to create the best learning experience for your mentees" />
      <SideBySideFeature image={`${process.env.PUBLIC_URL}/smartmockups_koby6sz3.png`} side="right" title="Create projects" color="#aaf0d1" details="Help your community learn faster by creating interactive projects" />
      <SideBySideFeature image={`${process.env.PUBLIC_URL}/smartmockups_koby2vkr.png`} side="left" title="Get paid" color="#aaf0d1" details="Grow your community, grow your revenue. Gather revenue from subscriptions and project purchases" />
      <Faq />
      {/* <div className="landing-second-container">
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
            <div className="secondary-screen-wrapper" onClick={onClick}>
              {transitions((style, item) => {
                const Image = pages[item];
                return <Image style={style} />;
              })}
              <PrimaryPhone style={{ width: '100%', height: '70%' }} />
            </div>
          </div>
        </div>
      </div> */}
      {/* <WhatWeOffer /> */}
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexFlow: 'column',
      }}
      >
        <SubscribeForm />
      </div>
      <Footer />
      {/* <Pricing /> */}
    </div>
  );
}

export default LandingPage;
