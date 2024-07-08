'use client';
import styles from './orders.module.css';
import { deleteOrder, orderPayment, orderDelivery } from '@/lib/action';
import { useRouter } from 'next/navigation';


export default function Orders({ orders, users }) {
  const router = useRouter();
  const deleteOrderHandler = (id) => {
    deleteOrder(id);
    router.refresh();
  };
  const updateOrderPayment = (id, paid) => {
    const reversePaid = !paid;
    orderPayment(id, reversePaid);
    router.refresh();
  };
  const updateOrderDelivery = (id, delivered) => {
    const reverseDelivered = !delivered;
    orderDelivery(id, reverseDelivered);
    router.refresh();
  };
  const userNameGetter = (id) => {
    const user = users.find(
      (user) => user.id === id
    );
    return user.username;
  }
  const userEmailGetter = (id) => {
    const user = users.find(
      (user) => user.id === id
    );
    return user.email;
  }
  const userPhoneNumberGetter = (id) => {
    const user = users.find(
      (user) => user.id === id
    );
    return user.phone_number;
  }
  return(
    <div className={styles.ordersContainer}>
      {orders.map((order) => (
      <div className={styles.orders} key={order.id}>
        <span>Order ID:&nbsp;{order.id}</span>
        <span>User ID:&nbsp;{order.user_id}</span>
        <span>User Name:&nbsp;{userNameGetter(order.user_id)}</span>
        <span>User E-Mail:&nbsp;{userEmailGetter(order.user_id)}</span>
        <span>User Phone Number:&nbsp;{userPhoneNumberGetter(order.user_id)}</span>
        <span>Payment:&nbsp;{order.paid? (<button className={styles.green} onClick={() => updateOrderPayment(order.id, order.paid)}>Paid</button>):(<button className={styles.red} onClick={() => updateOrderPayment(order.id, order.paid)}>Not paid</button>)}</span>
        <span>Delivery:&nbsp;{order.delivered? (<button className={styles.green} onClick={() => updateOrderDelivery(order.id, order.delivered)}>Delivered</button>):(<button className={styles.red} onClick={() => updateOrderDelivery(order.id, order.delivered)}>Not delivered yet</button>)}</span>
        <span>Date of order:</span>{order.order_date}
        <span>Delivery address:&nbsp;{order.delivery_address}</span>
        <button onClick={() => deleteOrderHandler(order.id)} className={styles.deleteButton}>Delete</button>
      </div>
))}</div>);
}
