"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { checkout } from '../checkout';

// this is the video where I learn this https://www.youtube.com/watch?v=7MlvKxgHY4M
export default function Home() {
  return (
  <main className={styles.main}>
    <div>
    <Image alt='img' className={styles.img}  src="/vercel.svg" width={100} height={50}/>
    <button className={styles.button}
     onClick={(()=>{
      checkout(
        {
          lineItems:[{price:"price_1OrbvPFqQVaPXOZOyQsZsbtG",quantity:1}]
        }
      )
     })}
    >Buy This image</button>
    </div>
  </main>
  )
}
