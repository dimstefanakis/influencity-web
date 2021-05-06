import FaqItem from '../FaqItem';
import './faq.css';

function Faq() {
  return (
    <div className="faq-container">
      <div className="faq">
        <FaqItem title="Frequently asked question" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec nisl elementum dolor consequat aliquam. Cras facilisis at enim mattis iaculis." />
        <FaqItem title="Frequently asked question" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec nisl elementum dolor consequat aliquam. Cras facilisis at enim mattis iaculis." />
      </div>
    </div>
  );
}

export default Faq;
