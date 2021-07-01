/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './confirm_email.css';

function ConfirmEmail() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const { key } = useParams();

  async function confirmEmail() {
    setLoading(true);
    const url = `${process.env.REACT_APP_DOMAIN_URL}/rest-auth/registration/verify-email/`;
    try {
      const response = await fetch(
        url,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ key }),
        },
      );
      const content = await response.json();
      setStatus(response.status);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    confirmEmail();
  }, []);

  return (
    <div className="confirm-email-container">
      <h1>Confirm email</h1>
      <p>{status === 200 || status === 201 ? 'Successfully confirmed email!' : ''}</p>
    </div>
  );
}

export default ConfirmEmail;
