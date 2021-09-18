/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styles from './SubscribeForm.module.css';

const url = 'https://troosh.us1.list-manage.com/subscribe/post?u=3ea0d06a53629b8c41e72ed2d&amp;id=cc15af59c5';

// copied from here https://github.com/revolunet/react-mailchimp-subscribe/blob/b22aac36b6ad2cd290b30490e573efb0744925e0/demo/src/index.js#L8
function SubscribeForm() {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [type, setType] = useState('Mentor');

  const submit = () => email
    && email
    && email.indexOf('@') > -1
    && onValidated({
      EMAIL: email,
      TYPE: type,
    });

  return (
    <>
      <h2
        id="newsletter"
        style={{
          maxWidth: 300, textAlign: 'center', margin: 60, marginBottom: 0,
        }}
      >
        Seems fun right?
      </h2>
      <p style={{
        maxWidth: 300, textAlign: 'center', margin: 60, marginTop: 10,
      }}
      >
        Fill this interest form and we will get in contact with you ASAP!
      </p>
      <div
        className={styles.subscribeForm}
      >
        {/* {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>} */}
        {status === 'error' && (
        <div
          style={{ color: 'black' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
        )}
        {status === 'success' && (
        <div
          style={{ color: 'black' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
        )}
        {status ? null
          : (
            <>
              <input
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '80%' }}
                type="text"
                placeholder="Your email"
              />
              <p style={{ marginTop: 20, marginBottom: 20, textAlign: 'center' }}>What would you like to be on Troosh?</p>
              <div onChange={(e) => setType(e.target.value)} className={styles.accountType}>
                <div className={styles.subscribeRadio}>
                  <input type="radio" value="Mentee" name="type" id="mentee-input" />
                  <label htmlFor="mentee-input">Mentee</label>
                </div>
                <div className={styles.subscribeRadio}>
                  <input type="radio" value="Mentor" name="type" id="mentor-input" />
                  <label htmlFor="mentor-input">Mentor</label>
                </div>
              </div>
              <button onClick={submit} type="submit">
                Submit
              </button>
            </>
          )}

      </div>
    </>
  );
};

export default SubscribeForm;
