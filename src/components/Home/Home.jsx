import Link from "next/link";
import React, { useState } from "react";
import pizzas from "./data";
import styles from "./Home.module.css";
export default function Home() {
  
  const [keywoard,setKeywoard]=useState('')

  const filterPizzas = pizzas.filter((p)=>(
   p.name.includes(keywoard)||p.toppings.includes(keywoard)
  ))

  const onChange=(e)=>{
    e.preventDefault()
    setKeywoard(e.target.value.toString().toLowerCase())
  }

  return (
    <div >
      <div className={styles.searchWrapper}>
        <input
          onChange={onChange}
          placeholder="search for piazza toppings"
          className={styles.searchBar}
        />
      </div>
      <div className={styles.pizzaContainer}>
        {filterPizzas<1 ?   <div className={styles.nopeContainer}>there is no pizza or topping with thar</div> :(
        filterPizzas.map((pizza) => (
          <div className={styles.pizzaItem} key={pizza.id}>
            <Link href={`/${pizza.slug}`}>
              <a className={styles.pizzaImageBox}>
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  className={styles.PizzaImage}
                />
              </a>
            </Link>
            <div className={styles.pizzaText}>
              <p className={styles.pizzaHeader}>{pizza.name}</p>
              <p className={styles.pizzaToppings}>{pizza.toppings.map(t=>t).join(', ')}</p>
              <p className={styles.pizzaPrice}>$ {pizza.price}</p>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
}


