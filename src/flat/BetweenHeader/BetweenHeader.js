import './betweenHeader.css';

function BetweenHeader({ title, quote, details }) {
  return (
    <div className="between-header-wrapper">
      <h1>{title}</h1>
      {quote ? <q>{quote}</q> : null}
      {details ? <span>{details}</span> : null}
    </div>
  );
}

export default BetweenHeader;
