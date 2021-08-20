/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useRouter } from 'next/router';
import styles from './ConfirmEmail.module.css';

function ConfirmEmail() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const router = useRouter();
  const { key } = router.query;

  async function confirmEmail() {
    setLoading(true);
    const url = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/rest-auth/registration/verify-email/`;
    const body = JSON.stringify({ key });
    try {
      const response = await fetch(
        url,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body,
        },
      );
      const content = await response.json();
      setStatus(response.status);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (key) {
      confirmEmail();
    }
  }, [key]);

  return (
    <div className={styles.confirmEmailContainer}>
      <h1>Confirm email</h1>
      <p>{status === 200 || status === 201 ? 'Successfully confirmed email!' : ''}</p>
    </div>
  );
}

export default ConfirmEmail;
