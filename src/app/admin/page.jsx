import styles from './admin.module.css';




export default function AdminPage() {
  const users = [
    {username: 'Ali', email: 'Ali@mail.com'},
    {username: 'Ahmed', email: 'Ahmed@mail.com'},
    {username: 'Luke', email: 'Luke@mail.com'},
    {username: 'Sadek', email: 'Sadek@mail.com'},
    {username: 'Iris', email: 'Iris@mail.com'},
  ]
  const orders = [
    {id: 1,orderuser: 'Ali'},
    {id: 2,orderuser: 'Ahmed'},
    {id: 3,orderuser: 'Luke'},
    {id: 4,orderuser: 'Sadek'},
    {id: 5,orderuser: 'Iris'},
  ]
  return(
	<div className={styles.container}>
    <div className={styles.usersContainer}>Users:{users.map((user) => (
        <div className={styles.users} key={user.username}>User Name:{user.username}
        <p>User E-mail:{user.email}</p>
        <button className={styles.deleteButton}>Delete</button>
        </div>
    ))}</div>
    <div className={styles.ordersContainer}>Orders:{orders.map((order) => (
        <div className={styles.orders} key={order.orderuser}>Order ID: {order.id}
        <p>Ordered By: {order.orderuser}</p>
        <button className={styles.deleteButton}>Delete</button>
        </div>
    ))}</div>
  </div>
  )
}
