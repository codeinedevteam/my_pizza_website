import React from "react";
import Link from "next/link";
import styles from "../styles/MyApp.module.css";

export default function navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarContactBox}>
          <Link href="/">
            <a>
              <div className={styles.brandPizza}>
                <img src="pizza.png" alt="brand" />
                <p>Pizza Shop</p>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li className={styles.navbarContact}>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li className={styles.navbarContact}>About</li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
