/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import styles from './FaqItem.module.css';

function FaqItem({ title, details }) {
  const [shown, setShown] = useState(false);

  function onClick() {
    setShown(!shown);
  }

  return (
    <div style={{ display: 'flex', flexFlow: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} role="button" onClick={onClick}>
        <h2 style={{ flex: 1 }}>{title}</h2>
        <div
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 5,
          }}
        >
          {shown ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <p className={shown ? styles.faqItemOpen : styles.faqItem}>
        {details}
      </p>
    </div>
  );
}

export default FaqItem;
