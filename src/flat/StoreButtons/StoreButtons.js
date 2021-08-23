import PlayStoreBadge from '../Svgs/PlayStoreBadge';
import AppStoreBadge from '../Svgs/AppStoreBadge';

function StoreButtons({ customStyle = {} }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 280,
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 50,
        ...customStyle,
      }}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://play.google.com/store/apps/details?id=com.influencity"
      >
        <PlayStoreBadge
          style={{
            height: 40,
            width: 'auto',
            cursor: 'pointer',
            marginTop: 5,
          }}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://testflight.apple.com/join/fc73GfCs"
      >
        <AppStoreBadge
          style={{
            height: 40,
            width: 'auto',
            cursor: 'pointer',
            marginTop: 5,
          }}
        />
      </a>
    </div>
  );
}

export default StoreButtons;
