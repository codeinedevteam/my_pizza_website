import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/pizza.module.css";
import pizzas from "../components/Home/data";
import Link from "next/link";

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  const [pizza, setPizza] = useState([]);
  const newPizza = pizzas.filter((p) => p.slug.includes(slug));
  const otherPizzas = pizzas.filter((p) => p.slug !== slug);

 
  return (
    <div className={styles.container}>
      <Head>
        <title>{slug}</title>
      </Head>

      {newPizza.map((m) => (
        <React.Fragment key={m.id}>
          <div   className={styles.pizzaWrapperLeft}>
            <img className={styles.pizzaImage} src={m.img} />
          </div>
          <div className={styles.pizzaWrapperRight}>
            <div className={styles.pizzaInfo}>
              <p className={styles.pizzaTitle}>{m.name}</p>
              <p className={styles.pizzaDescription}>{m.slug}</p>
              <p className={styles.pizzaPrice}>$ {m.price}</p>
              <p className={styles.pizzaToppings}>
                {m.toppings.map((t) => t).join(", ")}
              </p>
            </div>

            <div className={styles.pizzaOtherWrraper}>
              {otherPizzas.map((other) => (
                <div className={styles.otherPizza} key={other.id}>
                  <Link href={"/" + other.slug}>
                    <a>
                      <img src={other.img} />
                      <p>{other.name}</p>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
// export const getStaticPath=async()=>{
//     const pizza= pizzas.filter(pizza=>pizza.slug.includes(slug))
//     const otherPizzas=pizza.filter(pizza=> pizza.slug!==params.slug)

// }
