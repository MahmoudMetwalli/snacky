'use client';
import styles from './orders.module.css';
import { deleteOrder } from '@/lib/action';
import { useRouter } from 'next/navigation';


export default function Orders({ orders, users }) {
  const router = useRouter();
  const deleteOrderHandler = (id) => {
    deleteOrder(id);
    router.refresh();
  };
  const userNameGetter = (id) => {
    const user = users.find(
      (user) => user.id === id
    );
    return user.username;
  }
  return(
    <div className={styles.ordersContainer}>
      {orders.map((order) => (
      <div className={styles.orders} key={order.orderuser}>
        <span>Order ID:  {order.id}</span>
        <span>User ID :  {order.user_id}</span>
        <span>User Name :  {userNameGetter(order.user_id)}</span>
        <span>Payment:&nbsp;{order.paid? (<span>Paid</span>):(<span>Not paid</span>)}</span>
        <span>Delivery:&nbsp;{order.delivered? (<span>Delivered</span>):(<span>Not delivered yet</span>)}</span>
        <span>Delivery address:&nbsp;{order.delivery_address}</span>
        <button onClick={() => deleteOrderHandler(order.id)} className={styles.deleteButton}>Delete</button>
      </div>
))}</div>);
}
