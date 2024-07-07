'use client';
import styles from './users.module.css';
import { deleteUser } from '@/lib/action';
import { useRouter } from 'next/navigation';



export default function Users({ users }) {
  const router = useRouter();
  const deleteUserHandler = (id) => {
    deleteUser(id);
    router.refresh();
  };
  return(<div className={styles.usersContainer}>{users.map((user) => (
    <div className={styles.users} key={user.username}>
      <span>ID:&nbsp;{user.id}</span>
      <span>User Name:&nbsp;{user.username}</span>
      <span>E-Mail:&nbsp;{user.email}</span>
      <span>First Name:&nbsp;{user.first_name}</span>
      <span>Last Name:&nbsp;{user.last_name}</span>
      <span>Phone Number:&nbsp;{user.phone_number}</span>
      <span>Address:&nbsp;{user.address}</span>
    {!user.admin && <button onClick={() => deleteUserHandler(user.id)} className={styles.deleteButton}>Delete</button>}
    </div>
))}</div>);
}
