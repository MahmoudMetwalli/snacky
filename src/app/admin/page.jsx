import UsersGetter from '@/components/usersGetter/usersGetter';
import OrdersGetter from '@/components/ordersGetter/ordersGetter';
import styles from './admin.module.css';

export default function AdminPage() {
  const orders = [
    { id: 1, orderuser: 'Ali' },
    { id: 2, orderuser: 'Ahmed' },
    { id: 3, orderuser: 'Luke' },
    { id: 4, orderuser: 'Sadek' },
    { id: 5, orderuser: 'Iris' },
  ];

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
