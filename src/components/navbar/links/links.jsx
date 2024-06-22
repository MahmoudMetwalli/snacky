'use client';

import { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/navLink';
import Image from 'next/image';
import { logOut } from '@/lib/action';
import { useFormState } from "react-dom";


const links = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Order',
    path: '/order'
  },
  {
    title: 'Register',
    path: '/register'
  }
];

const Links = ({ session }) => {
  const [state, formAction] = useFormState(logOut, undefined);
  const [open, setOpen] = useState(false);
  // TEMPORARY
  const admin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map(link => (
          <NavLink item={link} key={link.title} />
        ))}
        {session
          ? (
            <>{admin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <form action={formAction}>
            <button className={styles.logout} type='submit'>Log Out</button>
            </form>
            </>
            )
          : (<NavLink item={{ title: 'LogIn', path: '/login' }} />)}
      </div>
      <Image className={styles.menuButton} src='/newmenu.png' alt='' height={30} width={30} onClick={() => setOpen(prev => !prev)}/>
      { open && (<div className={styles.mobileLinks}>
        {links.map(link => (
          <NavLink item={link} key={link.title} />
        ))}</div>
      )}
    </div>
  );
};

export default Links;
