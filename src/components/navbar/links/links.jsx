'use client';

import { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/navLink';
import Image from 'next/image';
import { logOut } from '@/lib/action';
import { useFormState } from "react-dom";
import { useContext, useEffect } from 'react';
import CartContext from '@/context/cartContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const links = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'Order',
    path: '/order'
  },

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
  const { deleteItemFromCart, addItemToCart, cart } = useContext(CartContext);
  const [state, formAction] = useFormState(logOut, undefined);
  const router = useRouter();
  useEffect(() => {
		if (state?.success) {
			router.push("/login");
		}
	}, [state?.success, router]);

  const [open, setOpen] = useState(false);
  // TEMPORARY
  let admin = false;
  if (session) {
   admin = session.user.admin;
  }
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {session && session.user ? (<div className={styles.hello}>Hi There<br></br>{session.user.firstName}&nbsp;{session.user.lastName}</div>) : (<div></div>)}
        {links.map(link => (
          <NavLink item={link} key={link.title} />
        ))}
        {session
          ? (
            <div className={styles.all}>
              <NavLink item={{ title: 'My Profile', path: '/myprofile' }} />
              {admin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            </div>
            )
          : (<>{auths.map(auth => (
            <NavLink item={auth} key={auth.title} />
          ))}</>)}
          <div className={styles.all}>
          <div className={styles.cart}>
        <Link  href='/cart' className={styles.cart}><Image src='/shopping.png' alt='shopping' width={40} height={40} />
         </Link>
         <span>{cart?.cartItems?.length || 0}</span>
        </div>
          {session && <form action={formAction}>
            <button className={styles.logout} type='submit'>Log Out</button>
            </form>}
          </div>
      </div>
      <Image className={styles.menuButton} src='/newmenu.png' alt='' height={30} width={30} onClick={() => setOpen(prev => !prev)}/>
      { open && (<div className={styles.mobileLinks}>
        {session && session.user ? (<div className={styles.hello}>Hi There<br></br>{session.user.firstName}&nbsp;{session.user.lastName}</div>) : (<div></div>)}
        {links.map(link => (
          <NavLink item={link} key={link.title} />
        ))}
        {session
          ? (
            <div className={styles.allMobile}>
              <NavLink item={{ title: 'My Profile', path: '/myprofile' }} />
              {admin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            </div>
            )
          : (<>{auths.map(auth => (
            <NavLink item={auth} key={auth.title} />
          ))}</>)}
          <div className={styles.all}>
          <div className={styles.cart}>
        <Link  href='/cart' className={styles.cart}><Image src='/shopping.png' alt='shopping' width={40} height={40} />
         </Link>
         <span>{cart?.cartItems?.length || 0}</span>
        </div>
          {session && <form action={formAction}>
            <button className={styles.logout} type='submit'>Log Out</button>
            </form>}
          </div>
          </div>
      )}
    </div>
  );
};

export default Links;
