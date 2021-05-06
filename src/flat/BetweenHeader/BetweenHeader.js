import './betweenHeader.css';

function BetweenHeader({ title, quote }) {
  return (
    <div className="between-header-wrapper">
      <h1>{title}</h1>
      {quote ? <q>{quote}</q> : null}
    </div>
  );
}

export default BetweenHeader;
