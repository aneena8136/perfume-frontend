"use client"

import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import search from '../../public/search-icon.png';
import person from './../assets/person.png';
import cart1 from './../assets/Cart1.png';
import vector from './../assets/Vector.png';
import profile from './../assets/person.png';

export default function Navbar() {
    return(
        <div>
             <nav className={styles.navbar}>
                <div className={styles.logo}>Scentora</div>

                {/* navigation links */}
                <ul className={styles.nav_links}>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">New Arrivals</a></li>
                    <li><a href="">Brands</a></li>


                </ul>
                <div className={styles.search_bar}>
                <input type="text" placeholder="Search for products..."/>
                <span className={styles.search_icon}><Image src={search} alt="search"></Image></span>

                </div>

                {/* icons (whishlist, cart, profile) */}
                <div className={styles.icons}>
                    <div className={styles.icon_wishlist}>
                    <span><Image src={vector} alt="vector"></Image></span>
                    <span className={styles.badge}>2</span>

                    </div>

                    <a href="/cart">
                    <div className={styles.icon_cart}>
                    <span><Image src={cart1} alt="cart1"></Image></span>
                    <span className={styles.badge}>4</span>
                    </div>
                    </a>
                    <div className={styles.icon_profile}>
                    <span><Image src={profile} alt="person"></Image></span>
                </div>
                </div>
            </nav>
        </div>
    )
}