'use client';
import styles from './orders.module.css';
import { deleteOrder } from '@/lib/action';


export default function Orders({ orders }) {
  return(
    <div className={styles.ordersContainer}>Orders:{orders.map((order) => (
      <div className={styles.orders} key={order.orderuser}>Order ID:  {order.id}
      <p>User ID :  {order.user_id}</p>
      <button onClick={() => deleteOrder(order.id)} className={styles.deleteButton}>Delete</button>
      </div>
))}</div>);
}
