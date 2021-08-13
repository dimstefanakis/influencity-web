function StripeOnboardCallback() {
  return (
    <div className="basic-container">
      <h2 style={{ padding: '0 30px' }}>You got here from Stripe</h2>
      <p style={{ maxWidth: 600, padding: '0 30px' }}>
        Congrats on setting up your Stripe account!
        Once Stripe has accepted reviewed your account you can get paid by Troosh!
        Meanwhile you can close this page and return to Troosh!
      </p>
    </div>
  );
}

export default StripeOnboardCallback;
