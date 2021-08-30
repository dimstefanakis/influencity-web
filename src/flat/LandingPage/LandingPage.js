/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import { useState, useCallback, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import Image from 'next/image';
import { Helmet } from 'react-helmet';
import Head from 'next/head';
import WhatWeOffer from '../WhatWeOffer/index';
import SideBySideFeature from '../SideBySideFeature';
import BetweenHeader from '../BetweenHeader';
import PrimaryPhone from '../Svgs/PrimaryPhone';
import OnlineLearningIllustration from '../Svgs/OnlineLearningIllustration';
import Pricing from '../Pricing';
import PricingCompact from '../PricingCompact';
import Faq from '../Faq';
import SubscribeForm from '../SignUpForm';
import Footer from '../Footer';
import StoreButtons from '../StoreButtons/StoreButtons';
import styles from './LandingPage.module.css';
import image1 from '../../../public/smartmockups_kohztffn.png';
import image2 from '../../../public/smartmockups_koj6bllk.png';
import image3 from '../../../public/smartmockups_koam9nna.png';
import image4 from '../../../public/smartmockups_koj6fqdm.png';
import image5 from '../../../public/smartmockups_koj6iivz.png';
import image6 from '../../../public/smartmockups_koby2vkr.png';
import primaryImage from '../../../public/smartmockups_kohyhkmj.png';
// const pages = [
//   ({ style }) => (
//     <animated.div style={{
//       ...style, position: 'absolute', height: '100%', width: '100%',
//     }}
//     >
//       <Image src={image6} className={styles.imageInPhone} alt="1s" />
//     </animated.div>
//   ),
//   ({ style }) => (
//     <animated.div style={{
//       ...style, position: 'absolute', height: '100%', width: '100%',
//     }}
//     >
//       <Image src={image5} className={styles.imageInPhone} alt="1s" />
//     </animated.div>
//   ),
//   ({ style }) => (
//     <animated.div style={{
//       ...style, position: 'absolute', height: '100%', width: '100%',
//     }}
//     >
//       <Image src={image3} className={styles.imageInPhone} alt="1s" />
//     </animated.div>
//   ),
//   ({ style }) => (
//     <animated.div style={{
//       ...style, position: 'absolute', height: '100%', width: '100%',
//     }}
//     >
//       <Image src={image4} className={styles.imageInPhone} alt="1s" />
//     </animated.div>
//   ),
// ];

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

  // function handleLearnMoreClick() {
  //   window.scrollTo({
  //     top: window.innerHeight,
  //     behavior: 'smooth',
  //   });
  // }
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Head>
        <meta charSet="utf-8" />
        <title>Troosh - The all in one online mentoring platform</title>
        <link rel="canonical" href="https://troosh.app" />
        <meta name="description" content="The best place to start any skill. Start learning today with the innovative application, affordably." />
        <meta property="og:title" content="Troosh - The all in one online mentoring platform" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Learn or teach various topics, interact uniquely with peers and content creators" />
        <meta property="og:image" content="https://troosh.app/logo_new.png" />
      </Head>
      <div className={styles.landingContainer}>
        <div className={styles.landingFull}>
          <div className={styles.heroContainer}>
            <div className={styles.heroTextContainer}>
              <div className={styles.heroInnerContainer}>
                <h1 className={styles.heroHeader}>
                  Get actual skills with team effort
                </h1>
                <h2 className={styles.heroSubheader}>Learn new things with your mentor or team</h2>
                <StoreButtons />
              </div>
            </div>
            <div className={styles.primaryImageContainer}>
              <Image src={primaryImage} className={styles.primaryImage} alt="phone" />
            </div>
          </div>
        </div>
        {/* <div className="landing-left" />
        <div className="landing-right" /> */}
        {/* <button className="learn-more cool-button" type="button" onClick={handleLearnMoreClick}>
          learn more
        </button> */}
      </div>
      <BetweenHeader title="Get the most innovative learning experience" quote="Online learning requires 40-60% less time to learn" />
      <SideBySideFeature image={image1} side="left" title="Join projects" details="Practice is the key to success. Projects let you hone your skills and get practical experience solo or on a team, with the guidance of your mentor" />
      <SideBySideFeature image={image2} side="right" title="Get awarded" details="Perform well and get awarded for your progess" />
      <SideBySideFeature image={image3} side="left" title="Start small, grow big" details="Explore different mentors on a variety of dynamic skills and get started with only 9€" />

      <BetweenHeader title="What's in it for mentors?" quote="The online learning industry is projected to pass $370 billion by 2026" />
      <SideBySideFeature image={image4} side="right" title="Organize your thoughts in steps" color="#aaf0d1" details="Create and link multiple recourses together to create the best learning experience for your mentees" />
      <SideBySideFeature image={image5} side="left" title="Create projects" color="#aaf0d1" details="Help your community learn faster by creating interactive projects" />
      <SideBySideFeature image={image6} side="right" title="Get paid" color="#aaf0d1" details="Grow your community, grow your revenue. Gather revenue from subscriptions and project purchases" />
      <PricingCompact />
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
