import styles from './home.module.css';
import Link from 'next/link'; // Step 1: Import Link from next/link

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src='/snacky-logo2.png' alt='Brand logo' className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Feeling Snacky?</h1>
        <p className={styles.desc}>Healthy snacks for a healthy life.</p>
        <div className={styles.buttons}>
          <Link href="/order"> {/* Step 2: Wrap the button with Link and set href */}
            <button className={styles.button_1}>Order Now</button>
          </Link>
          <Link href="/about">
            <button className={styles.button_2}>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

