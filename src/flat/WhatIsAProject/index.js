/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BetweenHeader from '../BetweenHeader';
import image1 from '../../../public/ios/im1.png';
import image2 from '../../../public/ios/im2.png';
import styles from './WhatIsAProject.module.css';

const stepMargin = 10;

function getItemMoveHorizontalPosition(step, i, width, numSteps) {
  return (-step - i) * width + (numSteps - 1) * width;
}

function getItemMoveVerticalPosition(step, heights) {
  let sum = stepMargin;
  heights.forEach((height, i) => {
    if (step > i) {
      sum = height + sum + stepMargin;
    }
  });
  return sum;
  // [50, 30, 30, 30]
  // step 2
  // return 50 + 30 = 80
  // step 1
  // return 50
}

function getStepBackgroundHeight(step, heights) {
  return heights[step];
}

function getStepBackgroundWidth(step, widths) {
  return widths[step];
}

const variants = (step, width, images) => ({
  move: (i) => ({
    x: getItemMoveHorizontalPosition(step, i, width, images.length),
  }),
});

const stepVariants = (step, heights, widths) => ({
  move: () => ({
    y: getItemMoveVerticalPosition(step, heights),
    height: getStepBackgroundHeight(step, heights),
    width: getStepBackgroundWidth(step, widths),
  }),
});

function WhatIsAProject() {
  const imageRatio = 0.462;
  const imageRef = useRef(null);
  const images = [
    '/ios/im8.webp',
    '/ios/im7.webp',
    '/ios/im9.webp',
    '/ios/im10.webp',
    '/ios/im2.png',
  ];
  const [step, setStep] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 920px)'));
  }, []);

  useEffect(() => {
    // for some reason imageWidth might stay 0 on production if [] is the dependency
    // quick fix just run this on every render until imageWidth !== 0
    if (imageRef && imageRef.current && imageWidth === 0) {
      setImageWidth(imageRef.current.clientWidth);
    }
  });

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '60px 0',
      }}
    >
      <BetweenHeader title="Wait what is a project?" />
      <div
        style={{
          display: 'flex',
          flexFlow: isMobile && !isMobile.matches ? 'row wrap' : 'column',
          alignItems: 'center',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexFlow: 'column',
            width: isMobile && !isMobile.matches ? '50%' : '100%',
            padding: isMobile && !isMobile.matches ? 0 : '0 20px',
          }}
        >
          <ProjectDefinition />
          <Steps activeStep={step} setStep={setStep} />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '50%',
            marginTop: isMobile && !isMobile.matches ? 0 : 100,
          }}
        >
          <div className={styles.projectImageContainer}>
            {/* mock image to calculate container dimensions */}
            <img
              ref={imageRef}
              alt="prop"
              src="/ios/im1.png"
              style={{ opacity: 0 }}
              className={styles.projectImage}
            />
            {images.reverse().map((image, i) => (
              <motion.div
                key={image}
                animate="move"
                variants={variants(step, imageWidth, images)}
                custom={i}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                }}
              >
                <img
                  alt="step"
                  src={image}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Steps({ activeStep, setStep }) {
  const [stepHeights, setStepHeights] = useState([]);
  const [stepWidths, setStepWidths] = useState([]);
  const step1Ref = useRef();
  const step2Ref = useRef();
  const step3Ref = useRef();
  const step4Ref = useRef();
  const step5Ref = useRef();

  function setStepDimensions() {
    setStepHeights([
      step1Ref.current.clientHeight,
      step2Ref.current.clientHeight,
      step3Ref.current.clientHeight,
      step4Ref.current.clientHeight,
      step5Ref.current.clientHeight,
    ]);
    setStepWidths([
      step1Ref.current.clientWidth,
      step2Ref.current.clientWidth,
      step3Ref.current.clientWidth,
      step4Ref.current.clientWidth,
      step5Ref.current.clientWidth,
    ]);
  }

  useEffect(() => {
    setStepDimensions();
  }, [step1Ref, step2Ref, step3Ref, step4Ref, step5Ref]);

  useEffect(() => {
    window.addEventListener('resize', setStepDimensions);
    return () => window.removeEventListener('resize', setStepDimensions);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        width: '100%',
        position: 'relative',
        marginTop: 50,
      }}
    >
      <StepBackground
        activeStep={activeStep}
        stepHeights={stepHeights}
        stepWidths={stepWidths}
      />
      <Step step={activeStep} setStep={setStep} index={0} innerRef={step1Ref}>
        Find a project from your favorite mentor
      </Step>
      <Step step={activeStep} setStep={setStep} index={1} innerRef={step2Ref}>
        Join the project
      </Step>
      <Step step={activeStep} setStep={setStep} index={2} innerRef={step3Ref}>
        Complete tasks solo or with your team
      </Step>
      <Step step={activeStep} setStep={setStep} index={3} innerRef={step4Ref}>
        Get feedback from your mentor
      </Step>
      <Step step={activeStep} setStep={setStep} index={4} innerRef={step5Ref}>
        Finish the project and receive magic internet points!
      </Step>
    </div>
  );
}

function Step({
  step, setStep, index, innerRef, children,
}) {
  function onStepClick() {
    setStep(index);
  }

  return (
    <div onClick={onStepClick} role="button" tabIndex={index}>
      <div
        ref={innerRef}
        style={{ marginTop: stepMargin }}
        className={`${styles.step} ${step === index ? styles.activeStep : ''}`}
      >
        {children}
      </div>
    </div>
  );
}

function StepBackground({ activeStep, stepHeights, stepWidths }) {
  return (
    <motion.div
      key="stepBackground"
      animate="move"
      variants={stepVariants(activeStep, stepHeights, stepWidths)}
      className={styles.stepBackground}
    />
  );
}

function ProjectDefinition() {
  return (
    <div style={{ display: 'flex', flexFlow: 'column', padding: '5px 20px' }}>
      <h1 style={{ fontSize: '1.6rem' }}>Definition</h1>
      <i style={{ color: '#363636' }}>noun</i>
      <span>/ˈprɒdʒɛkt/</span>
      <p style={{ marginTop: 10 }}>
        an interactive way for you to learn new skills
        {' '}
        <i>(optionally)</i>
        {' '}
        with
        your team with the guidance of your mentor
      </p>

      <q style={{ marginTop: 2, color: '#646464' }}>
        I joined a
        {' '}
        <b>project</b>
        {' '}
        on Troosh last week, already seeing a few
        gains 💪
      </q>
    </div>
  );
}

export default WhatIsAProject;
