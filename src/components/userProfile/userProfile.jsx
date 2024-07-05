import Link from 'next/link'
import styles from './userProfile.module.css'

export default async function UserProfile({ session }) {
  return(
  <div className={styles.container}>
	<div>User Name: {session.user.username}</div>
	<div>User Email-Addrees: {session.user.email}</div>
	<div>First Name: {session.user.firstName}</div>
	<div>Last Name: {session.user.lastName}</div>
	<div>Address: {session.user.address}<form><input></input><button></button></form></div>
	<Link href='/orderhistory'>Order history</Link>
  </div>)
}
