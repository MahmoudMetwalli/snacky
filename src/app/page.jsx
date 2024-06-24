import styles from './home.module.css'

const Home = () => {
  return <div>
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Feeling Snacky?</h1>
      <p className={styles.desc}>Healthy snacks for a healthy life.</p>
    </div>
  </div>
  </div>;
};

export default Home;