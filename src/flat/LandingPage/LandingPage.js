/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import { useState, useCallback, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import Image from 'next/image';
import { Helmet } from 'react-helmet';
import Head from 'next/head';
import { Button } from '@chakra-ui/button';
import { Tabs, TabList, Tab } from '@chakra-ui/tabs';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import StepNavigator from '../StepNavigator';
import SideBySideFeature from '../SideBySideFeature';
import PricingCompact from '../PricingCompact';
import Faq from '../Faq';
import Advisors from '../Advisors';
import SubscribeForm from '../SignUpForm';
import Footer from '../Footer';
import StoreButtons from '../StoreButtons/StoreButtons';
import { changeType } from '../../features/AccountType/slices/accountTypeSlice';
import styles from './LandingPage.module.css';
import image1 from '../../../public/smartmockups_kohztffn.png';
import image2 from '../../../public/smartmockups_koj6bllk.png';
import image3 from '../../../public/smartmockups_koam9nna.png';
import image4 from '../../../public/smartmockups_koj6fqdm.png';
import image5 from '../../../public/smartmockups_koj6iivz.png';
import image6 from '../../../public/smartmockups_koby2vkr.png';

function LandingPage() {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(null);
  const [view, setView] = useState('mentee');
  const { type } = useSelector((state) => state.accountType);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 920px)'));
  }, []);

  function onTabChange(index) {
    if (index === 0) {
      dispatch(changeType('mentee'));
      setView('mentee');
    } else {
      dispatch(changeType('mentor'));
      setView('mentor');
    }
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Head>
        <meta charSet="utf-8" />
        <title>Troosh - The all in one online mentoring platform</title>
        <link rel="canonical" href="https://troosh.app" />
        <meta
          name="description"
          content="The best place to start any skill. Start learning today with the innovative application, affordably."
        />
        <meta
          property="og:title"
          content="Troosh - The all in one online mentoring platform"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Learn or teach various topics, interact uniquely with peers and content creators"
        />
        <meta property="og:image" content="https://troosh.app/logo_new.png" />
      </Head>
      <div className={styles.landingContainer}>
        <div
          className={`${styles.landingFull} ${
            type === 'mentee' ? 'green-background' : 'orange-background'
          }`}
        >
          <div className={styles.heroContainer}>
            <div className={styles.heroTextContainer}>
              <div className={styles.heroInnerContainer}>
                <h1 className={styles.heroHeader}>
                  Get
                  {' '}
                  <span
                    className={`${styles.alternateText} ${
                      type === 'mentee'
                        ? 'orange-background'
                        : 'green-background'
                    }`}
                  >
                    more
                  </span>
                  {' '}
                  skills with
                  {' '}
                  <span
                    className={`${styles.alternateText} ${
                      type === 'mentee'
                        ? 'orange-background'
                        : 'green-background'
                    }`}
                  >
                    less
                  </span>
                  {' '}
                  effort
                </h1>
                <h2 className={styles.heroSubheader} style={{ maxWidth: 450 }}>
                  Create a more personal experience with your mentor and meet
                  new people while learning using cutting edge features.
                </h2>
                <StoreButtons />
              </div>
            </div>
            <div className={styles.primaryImageContainer}>
              <div style={{ display: 'flex', flexFlow: 'column' }}>
                <div>
                  <Tabs
                    variant="soft-rounded"
                    colorScheme={type === 'mentor' ? 'teal' : 'orange'}
                    mb={5}
                    onChange={(index) => onTabChange(index)}
                  >
                    <TabList>
                      <Tab>Mentee</Tab>
                      <Tab ml={10}>Mentor</Tab>
                    </TabList>
                  </Tabs>
                </div>
                <AnimatePresence>
                  {view === 'mentee' && (
                    <motion.img
                      src="/ios/immentee.webp"
                      className={styles.primaryImage}
                      alt="phone"
                      key="mentee"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: 5 }}
                    />
                  )}
                  {view === 'mentor' && (
                    <motion.img
                      src="/ios/immentor.webp"
                      className={styles.primaryImage}
                      alt="phone"
                      key="mentor"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: 5 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        {isMobile && !isMobile.matches && <StepNavigator />}
        <SideBySideFeature
          image={image1}
          side="left"
          title="Join projects"
          details="Practice is the key to success. Projects let you hone your skills and get practical experience solo or on a team, with the guidance of your mentor"
        />
        <SideBySideFeature
          image={image2}
          side="right"
          title="Get awarded"
          details="Perform well and get awarded for your progess"
        />
        <SideBySideFeature
          image={image3}
          side="left"
          title="Start small, grow big"
          details="Explore different mentors on a variety of dynamic skills and get started with only 9€"
        />
        <SideBySideFeature
          image={image4}
          side="right"
          title="Learn in steps"
          details="Take things one step at a time. Mentors breakdown their thoughts for the best learning experience"
        />
        <SideBySideFeature
          image={image6}
          side="left"
          title="Are you the mentor?"
          details="Grow your community, grow your revenue. Gather revenue from subscriptions and project purchases"
        />
      </div>
      <PricingCompact />
      <Faq />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          flexFlow: 'column',
        }}
      >
        <SubscribeForm />
      </div>
      <Advisors />
      <Footer />
      {/* <Pricing /> */}
    </div>
  );
}

export default LandingPage;
