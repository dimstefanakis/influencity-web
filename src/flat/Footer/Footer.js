import { Link } from 'react-router-dom';
import { AiFillInstagram, AiFillTwitterCircle, AiFillMediumCircle } from 'react-icons/ai';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link to={{ pathname: 'https://www.instagram.com/troosh_official/' }} target="_blank" style={{ margin: 10 }}>
          <AiFillInstagram style={{ fontSize: '1.5rem', color: 'gainsboro' }} />
        </Link>
        <Link to={{ pathname: 'https://twitter.com/Troosh_Official/' }} target="_blank" style={{ margin: 10 }}>
          <AiFillTwitterCircle style={{ fontSize: '1.5rem', color: 'gainsboro' }} />
        </Link>
        <Link to={{ pathname: 'https://dimitrisstefanakis.medium.com/' }} target="_blank" style={{ margin: 10 }}>
          <AiFillMediumCircle style={{ fontSize: '1.5rem', color: 'gainsboro' }} />
        </Link>

      </div>
    </div>
  );
}

export default Footer;
