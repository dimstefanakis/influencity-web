import PrimaryPhone from '../Svgs/PrimaryPhone';
import './landingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-left">
        <div className="landing-left-content">
          <h1>Introducing our app</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque metus sem, dictum eu sem et, ultricies tincidunt velit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
        </div>
      </div>
      <div className="landing-right">
        <PrimaryPhone style={{ width: '100%', height: '70%' }} />
      </div>
      <button className="learn-more cool-button" type="button">
        learn more
      </button>
    </div>
  );
}

export default LandingPage;
