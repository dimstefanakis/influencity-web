// import LandingPage from '../LandingPage/index';
import Header from '../Header';
import './layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
