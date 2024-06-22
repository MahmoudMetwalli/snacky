import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>All rights are reserved by Mahmoud Metwalli and Ahmed Ramzy</div>
    </div>
  );
};

export default Footer;
