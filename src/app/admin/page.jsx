import styles from './admin.module.css';
import UsersGetter from '@/components/usersGetter/usersGetter';




export default async function AdminPage() {
  const orders = [
    {id: 1,orderuser: 'Ali'},
    {id: 2,orderuser: 'Ahmed'},
    {id: 3,orderuser: 'Luke'},
    {id: 4,orderuser: 'Sadek'},
    {id: 5,orderuser: 'Iris'},
  ]
  return(
	<div className={styles.container}>
    <UsersGetter></UsersGetter>
    <div className={styles.ordersContainer}>Orders:{orders.map((order) => (
        <div className={styles.orders} key={order.orderuser}>Order ID:  {order.id}
        <p>Ordered By:  {order.orderuser}</p>
        <button className={styles.deleteButton}>Delete</button>
        </div>
    ))}</div>
  </div>
  )
}
