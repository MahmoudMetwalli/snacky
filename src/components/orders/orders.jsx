'use client';
import styles from './orders.module.css';
import { deleteOrder } from '@/lib/action';
import { useRouter } from 'next/navigation';


export default function Orders({ orders }) {
  const router = useRouter();
  const deleteOrderHandler = (id) => {
    deleteOrder(id);
    router.refresh();
  };
  return(
    <div className={styles.ordersContainer}>Orders:{orders.map((order) => (
      <div className={styles.orders} key={order.orderuser}>Order ID:  {order.id}
      <p>User ID :  {order.user_id}</p>
      <button onClick={() => deleteOrderHandler(order.id)} className={styles.deleteButton}>Delete</button>
      </div>
))}</div>);
}
