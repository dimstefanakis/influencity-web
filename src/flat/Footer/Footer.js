/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { AiFillInstagram, AiFillTwitterCircle, AiFillMediumCircle } from 'react-icons/ai';
import './Footer.module.css';

function Footer() {
  return (
    <div className="footer">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link href={{ pathname: 'https://www.instagram.com/troosh_official/' }}>
          <a target="_blank" style={{ margin: 10 }}>
            <AiFillInstagram style={{ fontSize: '1.5rem', color: 'gainsboro' }} />
          </a>
        </Link>
        <Link href={{ pathname: 'https://twitter.com/Troosh_Official/' }}>
          <a target="_blank" style={{ margin: 10 }}>
            <AiFillTwitterCircle style={{ fontSize: '1.5rem', color: 'gainsboro' }} />
          </a>
        </Link>
        <Link href={{ pathname: 'https://dimitrisstefanakis.medium.com/' }}>
          <a target="_blank" style={{ margin: 10 }}>
            <AiFillMediumCircle style={{ fontSize: '1.5rem', color: 'gainsboro' }} />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
