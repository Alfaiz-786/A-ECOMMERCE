"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const { status } = useSession();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const alertlogin = () => {
    alert("Sign In to see the Cart Items");
    router.replace("/signin");
  };

  return (
    <nav className={`${styles.main_nav} ${menuOpen ? styles.active : ""}`}>
      <div className={styles.main_div}>
        <div className={styles.navbar_logo}>
          <Link href="/">
            <Image
              src="/logo5.png"
              alt="Brand Logo"
              width={200}
              height={25}
              className={styles.logo}
            />
          </Link>
        </div>
        <ul className={`${styles.unorder} ${menuOpen ? styles.active : ""}`}>
          <li className={styles.list}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/products" className={styles.link}>
              Product
            </Link>
          </li>
          {status === "authenticated" ? (
            <div className={styles.list}>
              <button onClick={() => signOut()} className={styles.link}>
                Sign Out
              </button>
            </div>
          ) : (
            <li className={styles.list}>
              <Link href="/signin" className={styles.link}>
                Sign In
              </Link>
            </li>
          )}
        </ul>
        <div
          className={`${styles.menu_icon} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.menu_line}></div>
          <div className={styles.menu_line}></div>
          <div className={styles.menu_line}></div>
        </div>
        {status === "authenticated" ? (
          <div className={styles.navbar_logo2}>
            <Link href="/cart" className={styles.link}>
              <FontAwesomeIcon icon={faOpencart} />
            </Link>
          </div>
        ) : (
          <div className={styles.navbar_logo2}>
            <button onClick={alertlogin} className={styles.link}>
              <FontAwesomeIcon icon={faOpencart} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
