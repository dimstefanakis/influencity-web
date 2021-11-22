import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import image1 from '../../../public/ios/im1.png';
import image2 from '../../../public/ios/im2.png';
import image3 from '../../../public/ios/im3.png';
import image4 from '../../../public/ios/im4.png';
import image5 from '../../../public/ios/im5.png';
import image6 from '../../../public/ios/im6.png';
import styles from './StepNavigator.module.css';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 100,
  // velocity: 10,
};

const transition = {
  duration: 0.1,
};

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

function StepNavigator() {
  const [height, setHeight] = useState(850);

  useEffect(() => {
    setHeight(window.innerHeight + 100);
  }, []);

  const scrollPosition = useScrollPosition();

  function getCurrentPhoneFrame() {
    const step = Math.trunc(scrollPosition / height);
    if (step === 0) {
      return <Image src={image1} alt="feature" />;
    }
    if (step === 1) {
      return <Image src={image2} alt="feature" />;
    }
    if (step === 2) {
      return <Image src={image3} alt="feature" />;
    }
    if (step === 3) {
      return <Image src={image4} alt="feature" />;
    }
    if (step === 4) {
      return <Image src={image5} alt="feature" />;
    }
    if (step === 5) {
      return <Image src={image6} alt="feature" />;
    }
    return null;
  }

  function getCurrentPhoneFrameKey() {
    return Math.trunc(scrollPosition / height);
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 23123123,
          perspective: 10000,
        }}
      >
        <motion.div
          data-isOn={(scrollPosition / height) % 2 >= 1}
          className={styles.motionPhoneContainer}
        >
          <motion.div
            layout
            transition={spring}
            className={styles.motionPhoneDesign}
          />
          <motion.div layout transition={spring} className={styles.motionPhone}>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={getCurrentPhoneFrameKey()}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                {getCurrentPhoneFrame()}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default StepNavigator;
