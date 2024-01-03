// components/ProductCard.js
"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/app/products/products.module.css";
import CartContext from "@/app/context/CartContext";

const ProductCard = ({ product }) => {
  const { id } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = (e) => {
    e.preventDefault();
    addItemToCart({
      product: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
    });

    toast.success("Product added to the cart!", {
      position: "bottom-right",
      autoClose: 1000,
    });
  };

  return (
    <div className={styles.product_card}>
      <Link href={`/products/${id}`}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.product_image}
        />
      </Link>
      <Link href={`/products/${id}`}>
        <h3 className={styles.product_title}>
          {product.title.substring(0, 18)}...
        </h3>
      </Link>
      <p className={styles.product_price}>Price: ${product.price}</p>
      <div className={styles.add_to_cart_container}>
        <button
          className={styles.add_to_cart_button}
          onClick={addToCartHandler}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
