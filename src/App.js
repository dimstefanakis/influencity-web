import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LogRocket from 'logrocket';
import LandingPage from './flat/LandingPage';
import PasswordReset from './features/PasswordReset';
import ConfirmEmail from './features/ConfirmEmail';
import Layout from './flat/Layout';
import './App.css';
import 'antd/dist/antd.css';

LogRocket.init('troosh/troosh');

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/password/reset/:uid/:token">
              <PasswordReset />
            </Route>
            {/* <Route path="/confirm-email/:key">
              <ConfirmEmail />
            </Route> */}
            <Route path="/rest-auth/registration/account-confirm-email/:key">
              <ConfirmEmail />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
