import { useMediaQuery } from 'react-responsive';
import Blob from '../Blob';
import './sideBySideFeature.css';

function SideBySideFeature({
  side = 'left', title, details, image, color = '#FFD29B',
}) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="full side-by-side">
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
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="feature-image-container">
      <div style={{ position: 'absolute', height: '100%', zIndex: -1 }}>
        <Blob
          style={{ height: '100%', transform: `scale(${isMobile ? '1' : '1.7'}) ${side === 'right' ? '' : 'rotate(100deg)'}` }}
          color={color}
        />
      </div>
      <img src={image} className="side-by-side-image" alt="feature" />
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
        <h1>{title}</h1>
        <p>{details}</p>

      </div>
    </div>
  );
}

export default SideBySideFeature;
