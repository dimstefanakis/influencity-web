import styles from './BetweenHeader.module.css';

function BetweenHeader({ title, quote, details }) {
  return (
    <div className={styles.betweenHeaderWrapper}>
      <h1 style={{ fontSize: '1.8rem' }}>{title}</h1>
      {quote ? <q>{quote}</q> : null}
      {details ? <span>{details}</span> : null}
    </div>
  );
}

export default BetweenHeader;
