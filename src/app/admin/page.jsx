import UsersGetter from '@/components/usersGetter/usersGetter';
import OrdersGetter from '@/components/ordersGetter/ordersGetter';
import styles from './admin.module.css';
import { auth } from '../../../auth';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
	const session = await auth();
	if (!session?.user?.admin) {
    if (!session) {
		  redirect('/login');
    } else {
      redirect('/');
    }
	}
  return (
    <div className={styles.container}>
      <div className={styles.users}>
        <h2>Users</h2>
        <div className={styles.usersContainer}>
          <UsersGetter />
        </div>
      </div>
      <div className={styles.orders}>
        <h2>Orders</h2>
        <div className={styles.ordersContainer}>
          <OrdersGetter />
        </div>
      </div>
    </div>
  );
}
