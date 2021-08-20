/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import Link from 'next/link';
import Burger from '../Burger';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a style={{ color: 'black' }}>
            <div style={{ flex: 1, alignItems: 'center', display: 'flex' }}>
              <img src="/logo_black.png" className={styles.logo} alt="1s" />
              <span style={{ fontSize: '1.9rem', fontWeight: 700 }}>Troosh</span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
