import FaqItem from '../FaqItem';
import faqItems from './items';
import './faq.css';

function Faq() {
  return (
    <div className="faq-container">
      <div className="faq">
        {faqItems.map((item) => (
          <FaqItem title={item.question} details={item.answer} key={item.question} />
        ))}
      </div>
    </div>
  );
}

export default Faq;
