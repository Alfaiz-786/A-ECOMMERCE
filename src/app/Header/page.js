import React from "react";
import Link from "next/link";
import styles from "@/app/header.module.css";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <Nav />
    </header>
  );
};

export default Header;
