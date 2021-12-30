import BetweenHeader from '../BetweenHeader';
import styles from './Advisors.module.css';

function Advisors() {
  return (
    <div style={{ margin: '60px 0' }}>
      <BetweenHeader title="Advisors" />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className={styles.advisorsContainer}>
          <Advisor
            to="https://orangegrove.eu/"
            src="/advisors/orangegrove.webp"
            alt="Orange Grove"
          />
          <Advisor
            to="https://ennovation.gr/"
            src="/advisors/ennovation.webp"
            alt="Ennovation"
          />
          <Advisor
            to="https://prismaconsulting.gr/"
            src="/advisors/prisma.webp"
            alt="Prisma"
          />
          <Advisor
            to="https://okthess.gr/"
            src="/advisors/okthess.webp"
            alt="Prisma"
          />
        </div>
      </div>
    </div>
  );
}

function Advisor({ to, alt, src }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={to}
      className={styles.advisorImage}
    >
      <img style={{ height: '100%' }} src={src} alt={alt} />
    </a>
  );
}

export default Advisors;
