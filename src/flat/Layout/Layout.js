// import LandingPage from '../LandingPage/index';
import Header from '../Header';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
