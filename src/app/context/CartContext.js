"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : { cartItems: [] }
    );
  };

  const addItemToCart = async ({
    product,
    title,
    price,
    image,
    quantity = 1,
  }) => {
    const item = {
      product,
      title,
      price,
      image,
      quantity,
    };

    const isItemExist = cart?.cartItems?.find(
      (i) => i.product === item.product
    );
    let newCartItems;
    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.product === isItemExist.product
          ? { ...i, quantity: i.quantity + quantity }
          : i
      );
    } else {
      newCartItems = [...(cart.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const removeItemFromCart = (productId) => {
    const newCartItems = cart.cartItems.filter(
      (item) => item.product !== productId
    );
    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const updateItemQuantity = (productId, newQuantity) => {
    const newCartItems = cart.cartItems.map((item) =>
      item.product === productId ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartToState();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
