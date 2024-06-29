import Image from 'next/image';
import Links from './links/links';
import styles from './navbar.module.css';
import { auth } from '../../../auth';

const NavBar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src='/snackylogo2.png' alt='Brnad logo' fill />
      </div>
      <div className={styles.link}>
        <Links session={session}/>
      </div>
    </div>
  );
};

export default NavBar;
