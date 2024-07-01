"use client";
import Image from 'next/image';
import styles from './cart.module.css';
import { useContext } from 'react';
import CartContext from '@/context/cartContext';
import Cart from '@/components/cart/cart';


export default function CartPage() {
    
	return(<Cart/>
	)
}
