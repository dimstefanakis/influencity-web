import FaqItem from '../FaqItem';
import faqItems from './items';
import styles from './Faq.module.css';

function Faq() {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faq}>
        {faqItems.map((item) => (
          <FaqItem title={item.question} details={item.answer} key={item.question} />
        ))}
      </div>
    </div>
  );
}

export default Faq;
