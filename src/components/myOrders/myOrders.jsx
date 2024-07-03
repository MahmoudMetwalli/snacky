'use client';
import Link from 'next/link';
import styles from './myOrders.module.css';
import Image from 'next/image';

export default function MyOrders({ myOrders }) {
  if (myOrders.length !== 0) {
    return (
      <div className={styles.container}>
        <div className={styles.ordersWrapper}>
          {myOrders.map((order) => (
            <div key={order.id} className={styles.orderContainer}>
              <span className={styles.orderHeader}>Order ID: {order.id}</span>
              {(JSON.parse(order.json).cartItems).map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <Image src={item.photo} alt={item.name} width={200} height={200} className={styles.cartItemImg} />
                  <p className={styles.itemName}>{item.name}</p>
                  <span className={styles.itemPrice}>Price per single order: {item.price} L.E</span>
                  <div className={styles.amount}>
                    <span>{item.quantity}</span>
                  </div>
                  <span className={styles.itemTotal}>Total: {item.price * item.quantity} L.E</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${styles.container} ${styles.empty}`}>
        <Link href='/order' className={styles.redText}><h1>Make your first order from here</h1></Link>
      </div>
    )
  }
}
