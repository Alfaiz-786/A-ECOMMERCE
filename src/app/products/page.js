import Head from "next/head";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import styles from "@/app/products/products.module.css";

const Products = async () => {
  const url = "https://fakestoreapi.com/products";

  const res = await fetch(url);
  const data = await res.json();
  const products = data;
  // console.log(products);
  return (
    <div>
      <Head>
        <title>Product Listing - Your Next.js E-commerce App</title>
      </Head>

      <main className={styles.products_page}>
        <h1>Product Listing</h1>
        <div className={styles.product_list}>
          {products.map((product) => (
            <Link key={product.id} {...product} href={`#`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
