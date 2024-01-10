import styles from "@/components/body.module.css";
import Link from "next/link";

const Body = () => {
  return (
    <div className={styles.main_content}>
      <div className={styles.hero_section}>
        <div className={styles.hero_overlay}></div>
        <h1 className={styles.hero_title}>Discover Amazing Products</h1>
        <p className={styles.hero_description}>
          Explore our wide range of high-quality products that will elevate your
          lifestyle.
        </p>
        <div className={styles.hero_content}>
          <div className={styles.featured_products}>
            <div className={styles.featured_product}>
              <Link href="https://www.apple.com/in/watch/">
                <img
                  src="/watch2.jpeg"
                  alt="Smart Watch XYZ-2000"
                  className={styles.featured_product_image}
                />
              </Link>
              <h3 className={styles.featured_product_title}>
                Apple Watch Ultra 2
              </h3>
              <p className={styles.featured_product_description}>
                The Smart Watch XYZ-2000 is a sleek and feature-packed
                smartwatch designed to enhance your lifestyle. Stay connected
                with notifications for calls...
              </p>
              <div className={styles.product_details}>
                <p className={styles.product_price}>Price: $129.99</p>
                <p className={styles.product_rating}>Rating: 4.5/5 stars</p>
              </div>
            </div>

            <div className={styles.featured_product}>
              <Link href="https://www.apple.com/in/airpods-max/">
                <img
                  src="headphone.png"
                  alt="Noise-Canceling Wireless Headphones Pro"
                  className={styles.featured_product_image}
                />
              </Link>
              <h3 className={styles.featured_product_title}>
                Noise-Canceling Wireless Headphones Pro
              </h3>
              <p className={styles.featured_product_description}>
                Immerse yourself in superior sound quality with our
                Noise-Canceling Wireless Headphones Pro. Whether you're
                commuting, working, or relaxing...
              </p>
              <div className={styles.product_details}>
                <p className={styles.product_price}>Price: $199.99</p>
                <p className={styles.product_rating}>Rating: 4.8/5 stars</p>
              </div>
            </div>
          </div>
          <Link href="./products">
            <button className={styles.shop_now_button}>Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
