import './header.css';

function Header() {
  return (
    <div className="header">
      <div style={{
        width: '60%', height: '100%', display: 'flex', alignItems: 'center',
      }}
      >
        <div style={{ flex: 1, alignItems: 'center', display: 'flex' }}>
          <img src={`${process.env.PUBLIC_URL}/logo_black.png`} className="logo" alt="1s" />
          <span style={{ fontSize: '1.9rem', fontWeight: 700 }}>Troosh</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p className="header-link">About</p>
          <p className="header-link">Faq</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
