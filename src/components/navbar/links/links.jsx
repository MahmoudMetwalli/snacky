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
  }
];
const auths = [
  {
    title: 'LogIn',
    path: '/login'
  },
  {
    title: 'Register',
    path: '/register'
  }];

const Links = ({ session }) => {
  const [state, formAction] = useFormState(logOut, undefined);
  const [open, setOpen] = useState(false);
  // TEMPORARY
  const admin = false;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {session && session.user ? (<div className={styles.hello}>Hi There !!<br></br>{session.user.username}</div>) : (<div></div>)}
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
          : (<>{auths.map(auth => (
            <NavLink item={auth} key={auth.title} />
          ))}</>)}
      </div>
      <Image className={styles.menuButton} src='/newmenu.png' alt='' height={30} width={30} onClick={() => setOpen(prev => !prev)}/>
      { open && (<div className={styles.mobileLinks}>
        {session && session.user ? (<div className={styles.hello}>Hi There !!<br></br>{session.user.username}</div>) : (<div></div>)}
        {links.map(link => (
          <NavLink item={link} key={link.title} />
        ))}</div>
      )}
    </div>
  );
};

export default Links;
