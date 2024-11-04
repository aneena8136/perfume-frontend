


"use client"

import React from "react";
import styles from './../styles/Home.module.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Explore from "./Explore";

export default function Home() {
    return (
        <div >
            <div className={styles.box}>
                <div className={styles.col_4}></div>
                <div className={styles.sign_text}>
                    Sign up and get 20% off on your first order.
                    <a href="/register">Sign Up Now</a>
                </div>

            </div>

            {/* navbar */}
           <Navbar/>

        <Explore/>

           {/* footer  */}
           <Footer/>
        </div>
    )
}


