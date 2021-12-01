/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import {
  useRef, useLayoutEffect, useEffect, useState,
} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { Blob, Blob2, Blob3 } from '../Blob';
import styles from './SideBySideFeature.module.css';

const blobs = [Blob, Blob2, Blob3];

const cardVariants = {
  offscreen: {
    y: 40,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
  },
};

function SideBySideFeature({
  side = 'left',
  title,
  details,
  image,
  color = '#FFD29B',
}) {
  const [isMobile, setIsMobile] = useState(null);
  // const isMobile = useMediaQuery({ query: '(max-width: 920px)' });
  // const isMobile = window.matchMedia('(max-width: 920px)');

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 920px)'));
  }, []);

  return (
    <div
      className={`full ${styles.sideBySide} ${
        isMobile && isMobile.matches
          ? side === 'right'
            ? 'green-background'
            : 'orange-background'
          : ''
      }`}
    >
      {side === 'right' || (isMobile && isMobile.matches) ? (
        <>
          <FeatureDetails title={title} details={details} />
          <FeatureImage image={image} side={side} color={color} />
        </>
      ) : (
        <>
          <FeatureImage image={image} side={side} color={color} />
          <FeatureDetails title={title} details={details} />
        </>
      )}
    </div>
  );
}

function FeatureImage({ image, side, color }) {
  const [isMobile, setIsMobile] = useState(null);
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  // const isMobile = useMediaQuery({ query: '(max-width: 920px)' });
  // const isMobile = window.matchMedia('(max-width: 920px)');

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 920px)'));
  }, []);

  useEffect(() => {
    setImageHeight(window.innerHeight * 0.7);
  }, []);

  // const isMobile = useMediaQuery({ query: '(max-width: 920px)' });
  const randomBlob = useRef(blobs[Math.floor(Math.random() * blobs.length)]);
  const RandomBlob = randomBlob.current;

  return (
    <div className="featureImageContainer">
      <span className={styles.featureImageBlobContainer}>
        <RandomBlob
          style={{
            height: '100%',
            transform: `scale(${
              isMobile && isMobile.matches ? '1.2' : '1.7'
            }) ${side === 'right' ? '' : 'rotate(100deg)'}`,
          }}
          color={color}
        />
      </span>
      {isMobile && isMobile.matches && (
        <Image src={image} className="sideBySideImage" alt="feature" />
      )}
    </div>
  );
}

function FeatureDetails({ title, details }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5 }}
      style={{
        display: 'flex',
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column',
        zIndex: 2,
      }}
    >
      <motion.div variants={cardVariants} style={{ maxWidth: 300 }}>
        <h1 style={{ fontSize: '2.4em' }}>{title}</h1>
        <p style={{ fontSize: '1.3em', margin: '30px 0' }}>{details}</p>
      </motion.div>
    </motion.div>
  );
}

export default SideBySideFeature;
