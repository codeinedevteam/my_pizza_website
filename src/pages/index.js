import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Home from '../components/Home/Home'

export default function home() {
  return (
    <div className={styles.container}>
     <Home/>
    </div>
  )
}
