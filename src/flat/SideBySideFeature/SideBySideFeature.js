/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Blob, Blob2, Blob3 } from '../Blob';
import styles from './SideBySideFeature.module.css';

const blobs = [Blob, Blob2, Blob3];

function SideBySideFeature({
  side = 'left', title, details, image, color = '#FFD29B',
}) {
  const isMobile = useMediaQuery({ query: '(max-width: 920px)' });

  return (
    <div className={`full ${styles.sideBySide}`}>
      {side === 'right' || isMobile
        ? (
          <>
            <FeatureDetails title={title} details={details} />
            <FeatureImage image={image} side={side} color={color} />
          </>
        )
        : (
          <>
            <FeatureImage image={image} side={side} color={color} />
            <FeatureDetails title={title} details={details} />
          </>
        )}
    </div>
  );
}

function FeatureImage({ image, side, color }) {
  const isMobile = useMediaQuery({ query: '(max-width: 920px)' });
  const randomBlob = useRef(blobs[Math.floor(Math.random() * blobs.length)]);
  const RandomBlob = randomBlob.current;

  return (
    <div className={styles.featureImageContainer}>
      <div style={{ position: 'absolute', height: '100%', zIndex: -1 }}>
        <RandomBlob
          style={{ height: '100%', transform: `scale(${isMobile ? '1' : '1.7'}) ${side === 'right' ? '' : 'rotate(100deg)'}` }}
          color={color}
        />
      </div>
      <img src={image} className={styles.sideBySideImage} alt="feature" />
    </div>
  );
}

function FeatureDetails({ title, details }) {
  return (
    <div style={{
      display: 'flex',
      width: '60%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column',
      zIndex: 2,
    }}
    >
      <div style={{ maxWidth: 300 }}>
        <h1 style={{ fontSize: '2.4em' }}>{title}</h1>
        <p style={{ fontSize: '1.3em' }}>{details}</p>

      </div>
    </div>
  );
}

export default SideBySideFeature;
