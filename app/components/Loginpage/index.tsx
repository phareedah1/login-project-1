import React from 'react';
import styles from './styles.module.scss'

const SignUp: React.FC = () => {
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_card}>
        <h1>Sign in</h1>
        <form className={styles.signup_form}>
          <input type="email" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign in</button>
        </form>
        <div className={styles.remember}>
          <div className={styles.checkb}>
            <input type="text" />
            <p>Remember me</p>
          </div>
          <div>
            <p>Need help?</p>
          </div>
        </div>
        <div>
          <div></div>
          <p className={styles.small_text2}>New to Netflix ? <label>Sign up now</label></p>
          <p className={styles.small_text}>This page is protected my Google reCAPTCHA to ensure you are not a bot <label>Learn more</label></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;