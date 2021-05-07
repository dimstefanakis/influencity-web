import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LogRocket from 'logrocket';
import LandingPage from './flat/LandingPage/index';
import Layout from './flat/Layout/index';
import './App.css';

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
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
