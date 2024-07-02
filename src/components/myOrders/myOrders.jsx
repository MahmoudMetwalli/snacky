'use client';
import Link from 'next/link';
import styles from './myOrders.module.css';
import Image from 'next/image';


export default function MyOrders({ myOrders }) {
  if (myOrders.length !== 0) { return(<div className={styles.container}>{myOrders.map((order) => (<div><span>Order ID: {order.id}</span>{((JSON.parse(order.json)).cartItems).map((item) => (<div key={item.id} className={styles.cartItem}>
    <Image src={item.photo} alt={item.name} width={200} height={200} />
    <p>{item.name}</p>
    <span>Price per single order: {item.price} L.E</span>
    <div className={styles.amount}>
      <span>{item.quantity}</span>
    </div>
    <span>Total: {item.price * item.quantity} L.E</span>
  </div>))}</div>))}
      </div>
    )} else {return(<div className={styles.container}><Link href='/order'> Make your first order frim here</Link></div>
    )}
}
