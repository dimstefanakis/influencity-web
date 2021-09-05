/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useLayoutEffect, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../Svgs/Logo';
import Burger from '../Burger';
import styles from './Header.module.css';

function Header() {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState(null);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setCurrentUrl(url);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a style={{ color: 'black' }}>
            <div style={{ flex: 1, alignItems: 'center', display: 'flex' }}>
              {/* <Logo /> */}
              <img
                src="/logo.png"
                style={{
                  objectFit: 'contain', width: 40, height: 40, marginRight: 10,
                }}
              />
              <span style={{ fontSize: '1.9rem', fontWeight: 700 }}>Troosh</span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
