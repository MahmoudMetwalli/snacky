import Image from 'next/image'
import styles from './cart.module.css'

export default function CartPage() {
	return(
	<div className={styles.container}>
		<div className={styles.cart}>
			<div className={styles.cartItem}>
			<Image/>
			<p>Product Name</p>
			<span>Price per single order:  19.99 .L.E</span>
			<span>Total:  19.99 .L.E</span>
			<div className={styles.amount}><button>+</button><span>1</span><button>-</button></div>
			<button className={styles.removeButton}>Remove</button>
			</div>
		</div>
		<div className={styles.total}>
			Total Amount: 19.99 .L.E
			<div className={styles.purchase}><button className={styles.payButton}>Save and Pay</button><button className={styles.discardButton}>Discard Cart</button></div>
		</div>
	</div>)
}
