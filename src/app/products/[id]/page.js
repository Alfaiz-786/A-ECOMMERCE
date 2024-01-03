import Head from "next/head";
import { useRouter } from "next/navigation";
import styles from "@/app/products/products.module.css";

const page = async ({ params }) => {
  const id = params.id;

  const url = `https://fakestoreapi.com/products/${id}`;

  const res = await fetch(url);
  const data = await res.json();
  const product = data;

  return (
    <div>
      <Head>
        <title>
          {product ? product.title : "Product Details"} - Your Next.js
          E-commerce App
        </title>
      </Head>

      <main className={styles.product_details_page}>
        {product ? (
          <div className={styles.product_details}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.product_image}
            />
            <h1 className={styles.product_title}>{product.title}</h1>
            <p className={styles.product_description}>{product.description}</p>
            <p className={styles.product_price}>Price: ${product.price}</p>
            <div className={styles.actions}>
              <button className={styles.buy_now_button}>Buy Now</button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};

export default page;
