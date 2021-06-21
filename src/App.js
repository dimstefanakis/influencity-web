import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LogRocket from 'logrocket';
import LandingPage from './flat/LandingPage';
import PasswordReset from './features/PasswordReset';
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
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
