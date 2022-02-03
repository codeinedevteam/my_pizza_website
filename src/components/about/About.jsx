import Head from "next/head";
import React from "react";
import styles from "../about/about.module.css";

function About() {
  return (
    <div className={styles.container}>
      <Head>
          <title>About</title>
          <link rel="icon" href="/pizza.png" />
      </Head>
      <p className={styles.descriptions}>this is about page </p>
    </div>
  );
}

export default About;
