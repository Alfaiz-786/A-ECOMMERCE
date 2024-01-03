import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_section}>
          <h2>About Us</h2>
          <p>
            We are dedicated to providing quality products and excellent service
            to our customers.
          </p>
        </div>

        <div className={styles.footer_section}>
          <h2>Contact</h2>
          <p>Email: alfaizkhatib8@gmail.com</p>
          <p>Phone: +91 7030335101</p>
          <Link href="https://www.linkedin.com/in/alfaiz-khatib-2a2b09219/">
            Linkedin
          </Link>
        </div>
        <div className={styles.footer_section}>
          <h2>Follow Us</h2>
          <p>Connect with us on social media for updates and promotions.</p>
          <div className={styles.social_icons}>
            <Link
              href="https://www.facebook.com/?paipv=0&eav=AfaLm8BNj-z_WW6w5VwZ5fhwmODaOUtRZC15K3_62FCqWQqu3Nt6y4YZY5wmZTxorzQ&_rdr"
              className={styles.icon}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="#" className={styles.icon}>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="https://www.instagram.com/qr/" className={styles.icon}>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
