/* eslint-disable no-unused-vars */
import { useMediaQuery } from 'react-responsive';
import Burger from '../Burger';
import './header.css';

function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="header">
      <div className="header-content">
        <div style={{ flex: 1, alignItems: 'center', display: 'flex' }}>
          <img src={`${process.env.PUBLIC_URL}/logo_black.png`} className="logo" alt="1s" />
          <span style={{ fontSize: '1.9rem', fontWeight: 700 }}>Troosh</span>
        </div>
        {/* {isMobile ? <Burger /> : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p className="header-link">About</p>
          </div>
        )} */}

      </div>
    </div>
  );
}

export default Header;
