import './header.css';

function Header() {
  return (
    <div className="header">
      <img src={`${process.env.PUBLIC_URL}/512.jpg`} className="logo" alt="1s" />
    </div>
  );
}

export default Header;
