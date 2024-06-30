'use client';
import styles from './users.module.css';
import { deleteUser } from '@/lib/action';


export default function Users({ users }) {
  return(<div className={styles.usersContainer}>{users.map((user) => (
    <div className={styles.users} key={user.username}>User Name:{user.username}
    <p>User E-mail:  {user.email}</p>
    {!user.admin && <button onClick={() => deleteUser(user.email)} className={styles.deleteButton}>Delete</button>}
    </div>
))}</div>);
}
