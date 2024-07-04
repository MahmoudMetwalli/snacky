import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <h1>SNACKY</h1>
      </div>
      <div className={styles.sections}>
        <div className={styles.section}>
          <h2>GET IN TOUCH</h2>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
        <div className={styles.section}>
          <h2>EMAIL</h2>
          <p>ramzyar010277@gmail.com</p>
          <p>mammkbih@gmail.com</p>
        </div>
        <div className={styles.section}>
          <h2>LOCATION</h2>
          <p>Egypt, Cairo</p>
        </div>
      </div>
      <div className={styles.reserved}>
        <p>All rights are reserved by Ahmed Ramzy and Mahmoud Metwalli</p>
      </div>
    </div>
  );
}

export default Footer;
