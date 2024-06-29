'use client';

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const CartContext = createContext("");

export const CartProvider = ({ childern }) => {
  const [cart, setCart] = useState([]);
  const router = useRouter();
  useEffect(() => {
    setCartToState
  }, []);
  const setCartToState = () => {
    setCart(
      localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    );
  };
  const addItemToCart = async ({
    id,
    name,
    info,
    price,
    photo,
    quantity = 1,
  }) => {
    const item = {
      id,
    name,
    info,
    price,
    photo,
    quantity
    };
    const isItemExist = cart?.cartItems?.find(
      (i) => i.id === item.id
    )
    let newCartItems;
    if(isItemExist){ 
      newCartItems = cart?.cartItems?.map(
    (i) => i.id === isItemExist.id ? item : i
    );
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }
    localStorage.setItem('cart', JSON.stringify({cartItems: newCartItem}));
    setCartToState();
  };
  return (<CartContext.Provider
  value={{
	cart,
  addItemToCart,
  }}
  >
	{childern}
  </CartContext.Provider>);
};

export default CartContext;