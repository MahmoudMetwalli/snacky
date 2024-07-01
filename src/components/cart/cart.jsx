"use client";
import Image from 'next/image';
import styles from './cart.module.css';
import { useContext } from 'react';
import CartContext from '@/context/cartContext';


export default function Cart() {
    const { deleteItemFromCart, addItemToCart, cart } = useContext(CartContext);
	const increaseQty = (cartItem) => {
		const newQty = cartItem?.quantity + 1;
		const item = { ...cartItem, quantity: newQty };
	
		if (newQty > Number(cartItem.stock)) return;
	
		addItemToCart(item);
	  };
	
	  const decreaseQty = (cartItem) => {
		const newQty = cartItem?.quantity - 1;
		const item = { ...cartItem, quantity: newQty };
	
		if (newQty <= 0) return;
	
		addItemToCart(item);
	  };
	  const totalAmount = cart?.cartItems?.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	  );
	return(
	<div className={styles.container}>
		<div className={styles.cart}>
			{cart?.cartItems?.map((item) => (<div key={item.id} className={styles.cartItem}>
			<Image src={item.photo} alt={item.name} width={200} height={200} />
			<p>{item.name}</p>
			<span>Price per single order: {item.price}.L.E</span>
			<div className={styles.amount}><button onClick={() => increaseQty(item)}>+</button><span>{item.quantity}</span><button onClick={() => decreaseQty(item)}>-</button></div>
			<span>Total: {item.price * item.quantity} .L.E</span>
			<button className={styles.removeButton } onClick={() => deleteItemFromCart(item.id)}>Remove</button>
			</div>))}
		</div>
		<div className={styles.total}>
			<h1>Total Amount: {totalAmount} .L.E</h1>
			<div className={styles.purchase}><button className={styles.payButton}>Save and Pay</button><button className={styles.discardButton}>Discard Cart</button></div>
		</div>
	</div>)
}
