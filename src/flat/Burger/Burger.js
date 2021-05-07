/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import './burger.css';

function Burger() {
  const [open, setOpen] = useState(false);

  function onClick() {
    setOpen(!open);
  }

  return (
    <>
      <div
        role="button"
        style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 5, cursor: 'pointer',
        }}
        onClick={onClick}
      >
        <BiMenuAltRight size="2em" />
      </div>
      {ReactDOM.createPortal(
        <div className={`burger-content ${open ? 'burger-content-open' : ''}`}>
          <Link to="about" className="burger-link">About</Link>
        </div>, document.getElementById('burger-root'),
      )}
    </>
  );
}

export default Burger;
