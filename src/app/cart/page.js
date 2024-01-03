"use client";
import React, { useContext } from "react";
import CartContext from "@/app/context/CartContext";
import styles from "@/app/cart/Cart.module.css";

const Cart = () => {
  const { cart, updateItemQuantity, removeItemFromCart, clearCart } =
    useContext(CartContext);

  const handleUpdateQuantity = (productId, newQuantity) => {
    updateItemQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    removeItemFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateCartTotal = () => {
    return (
      cart?.cartItems
        ?.reduce((total, item) => total + calculateItemTotal(item), 0)
        .toFixed(2) || 0
    );
  };

  return (
    <div className={styles.cart_container}>
      <h1>Your Shopping Cart</h1>

      {cart?.cartItems?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className={styles.cart_items}>
            {cart?.cartItems?.map((item) => (
              <li key={item.product} className={styles.cart_item}>
                <img src={item.image} alt={item.title} />
                <div className={styles.item_details}>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${calculateItemTotal(item)}</p>
                  <div className={styles.quantity_controls}>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.product, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.product, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => handleRemoveItem(item.product)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.cart_summary}>
            <p>Total Cart Price: ${calculateCartTotal()}</p>
            <div className={styles.cart_actions}>
              <button onClick={handleClearCart}>Clear Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
