import React from "react";
import styles from "@/app/signin/Signin.module.css";
import Link from "next/link";

const Signin = () => {
  return (
    <div className={styles.signin_container}>
      <h1>Sign In</h1>
      <form className={styles.signin_form}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Sign In</button>
      </form>

      <p>
        Don't have an account? <Link href="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Signin;
