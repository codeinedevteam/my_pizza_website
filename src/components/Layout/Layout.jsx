import React from "react";
import Head from "next/head";
import styles from "./Layout.module.css";
import Navbar from "../navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/pizza.png" />
      </Head>
      <Navbar />

      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
