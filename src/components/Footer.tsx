"use client"

import React from "react";
import styles from './../styles/Home.module.css'
import Image from "next/image";
import fb2 from "./../assets/fb2.png"
import git from './../assets/git.png';
import insta from './../assets/insta.png';
import twitter from './../assets/twitter.png';
import visa from "./../assets/visa.png";
import paypal from "./../assets/paypal.png";
import gpay from './../assets/gpay.png';
import apple from './../assets/applepay.png';
import master from './../assets/master.png';

export default function Footer() {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.footer_container}>
                    <div className={styles.footer_brand}>
                        <h2>Scentora</h2>
                        <p>
                            We have perfumes that suits your <br />style and which you’re proud.
                        </p>
                        <div className={styles.social_icons}>
                            <a href="#"><Image src={fb2} alt="fb2"></Image></a>
                            <a href="#"><Image src={twitter} alt="fb2"></Image></a>
                            <a href="#"><Image src={insta} alt="fb2"></Image></a>
                            <a href="#"><Image src={git} alt="fb2"></Image></a>
                        </div>
                    </div>

                    <div className={styles.footer_links}>
                        <div className={styles.footer_column}>
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">Career</a></li>
                            </ul>
                        </div>
                        <div className={styles.footer_column}>
                            <h3>Help</h3>
                            <ul>
                                <li><a href="#">Customer Support</a></li>
                                <li><a href="#">Delivery Details</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className={styles.footer_column}>
                            <h3>FAQ</h3>
                            <ul>
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Manage Deliveries</a></li>
                                <li><a href="#">Orders</a></li>
                                <li><a href="#">Payments</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className={styles.footer_bottom}>
                <p>Scentora © 2000-2023, All Rights Reserved</p>
                <div className={styles.payment_icons}>
                <Image src={visa} alt="visa"></Image>
                <Image src={master} alt="master"></Image>
                <Image src={paypal} alt="paypal"></Image>
                <Image src={apple} alt="apple"></Image>
                <Image src={gpay} alt="gpay"></Image>
                    
                </div>

                </div>
            </footer>
        </div>
    )
}