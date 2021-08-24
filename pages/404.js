import Lottie from 'react-lottie';
import * as animationData from '../src/lottie/not_found.json';

export default function Custom404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={{
      height: '100vh', width: '100%', display: 'flex', placeItems: 'center',
    }}
    >
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
}
