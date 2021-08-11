import PlayStoreBadge from '../Svgs/PlayStoreBadge';
import AppStoreBadge from '../Svgs/AppStoreBadge';

function StoreButtons() {
  return (
    <div style={{ display: 'flex', marginTop: 50 }}>
      <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.influencity">
        <PlayStoreBadge style={{ height: 40, width: 'auto', cursor: 'pointer' }} />

      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://testflight.apple.com/join/fc73GfCs">
        <AppStoreBadge style={{
          height: 40, width: 'auto', cursor: 'pointer', marginLeft: 10,
        }}
        />
      </a>
    </div>
  );
}

export default StoreButtons;
