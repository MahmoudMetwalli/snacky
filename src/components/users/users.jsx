'use client';
import styles from './users.module.css';
import { deleteUser } from '@/lib/action';
import { useRouter } from 'next/navigation';



export default function Users({ users }) {
  const router = useRouter();
  const deleteUserHandler = (email) => {
    deleteUser(email);
    router.refresh();
  };
  return(<div className={styles.usersContainer}>{users.map((user) => (
    <div className={styles.users} key={user.username}>User Name:{user.username}
    <p>User E-mail:  {user.email}</p>
    {!user.admin && <button onClick={() => deleteUserHandler(user.email)} className={styles.deleteButton}>Delete</button>}
    </div>
))}</div>);
}
