"use client"

import React, { useEffect, useState } from "react";
import styles from './../styles/Home.module.css';
import Image from "next/image";
import img2 from './../../public/img-2.svg';
import x from './../assets/x (1).svg';
import sp2 from './../../public/sp-2.svg'
import heart from './../assets/heart (1).svg';

export default function Explore() {
    const [perfumes, setPerfumes] = useState([]);
    const userId = localStorage.getItem('token'); 
    useEffect(() => {
        const fetchPerfumes = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/perfume/view'); 
                const data = await response.json();
                setPerfumes(data);
            } catch (error) {
                console.error("Error fetching perfumes:", error);
            }
        };

        fetchPerfumes();
    }, []);
    const addToCart = async (perfumeId) => {
        try {
            const response = await fetch('http://localhost:5000/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, perfumeId })
            });

            const result = await response.json();
            if (response.ok) {
                alert('Item added to cart successfully!');
            } else {
                console.error(result.error);
                alert('Error adding item to cart');
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };
    return (
        <div >
            {/* expolre block  */}
            <div className={styles.explore_block}>
                <div className={styles.image_container}>
                    <Image src={img2} alt="img2" className={styles.full_width_image}></Image>
                </div>
            </div>
            {/* explore block */}

            {/* section left */}
            {/* our collections */}
            <div className={styles.collections}>
                <div className={styles.collection_left}>
                    <div className={styles.left_box}>
                        <div className={styles.filter_main}>
                            <p className={styles.top_filter}>Filter</p>
                            <p className={styles.top_clear}>Clear All</p>
                        </div>

                        <div>
                            <div className={styles.tag}>
                                <div>
                                    <span className={styles.tag_text}>Armani Code</span>
                                     <Image src={x} alt="close" className={styles.tag_icon} ></Image>
                                </div>
                            </div>

                            <div className="d-flex gp-10">
                                <div className={styles.tag}>
                                    <div>
                                        <span className={styles.tag_text}>Cool water</span>
                                     <Image src={x} alt="close" className={styles.tag_icon} ></Image>
                                    </div>
                                </div>

                                <div className={styles.tag}>
                                    <div>
                                        <span className={styles.tag_text}>CK</span>
                                     <Image src={x} alt="close" className={styles.tag_icon} ></Image>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.tag}>
                                <div>
                                    <span className="tag-text">Gucci Bloom</span>
                                     <Image src={x} alt="close" className={styles.tag_icon} ></Image>
                                </div>
                            </div>

                            <div className={styles.tag}>
                                <div>
                                    <span className="tag-text">Lataffa</span>
                                     <Image src={x} alt="close" className={styles.tag_icon} ></Image>
                                </div>
                            </div>

                            <div className={styles.tag}>
                                <div>
                                    <span className="tag-text">Channel No.5</span>
                                     <Image src={x} alt="close" className={styles.tag_icon} ></Image>
                                </div>
                            </div>
                        </div>

                        <div className={styles.border_bottom}>
                            <hr className="hr" />
                        </div>

                        <div className="">
                            <div className={styles.gender_feild}>
                                <div>Gender</div>
                                <img src="../img/right-arrow.svg" alt="" />
                            </div>

                            <div className={styles.gender_feild}>
                                <div>Discount</div>
                                <img src="../img/right-arrow.svg" alt="" />
                            </div>

                            <div className={styles.gender_feild}>
                                <div>Price</div>
                                <img src="../img/right-arrow.svg" alt="" />
                            </div>
                        </div>

                        <div className={styles.border_bottom}>
                            <hr className="hr" />
                        </div>

                        <div className={styles.brand_wrapper}>
                            <div className="brand-title">Brands</div>

                            <input type="text" placeholder="   Search Brand" className={styles.search_field} />
                            {/* <!-- Search field --> */}

                            <div>
                                <div className={styles.checkbox_wrapper}>
                                    <label>
                                        <input type="checkbox" className={styles.brand_checkbox} />
                                        {/* <!-- Checkbox --> */}
                                        Ajmal
                                    </label>
                                </div>

                                <div className={styles.checkbox_wrapper}>
                                    <label>
                                        <input type="checkbox" className={styles.brand_checkbox} />
                                        {/* <!-- Checkbox --> */}
                                        Armani Code
                                    </label>
                                </div>

                                <div className={styles.checkbox_wrapper}>
                                    <label>
                                        <input type="checkbox" className={styles.brand_checkbox} />
                                        {/* <!-- Checkbox --> */}
                                        Cool water
                                    </label>
                                </div>
                                <div className={styles.checkbox_wrapper}>
                                    <label>
                                        <input type="checkbox" className={styles.brand_checkbox} />
                                        {/* <!-- Checkbox --> */}
                                        Channel No. 5
                                    </label>
                                </div>

                                <div className={styles.checkbox_wrapper}>
                                    <label>
                                        <input type="checkbox" className={styles.brand_checkbox} />
                                        {/* <!-- Checkbox --> */}
                                        Calvin Klein
                                    </label>
                                </div>

                                <div className={styles.checkbox_wrapper}>
                                    <label>
                                        <input type="checkbox" className={styles.brand_checkbox} />
                                        {/* <!-- Checkbox --> */}
                                        Gucci Bloom
                                    </label>
                                </div>

                                <div className={styles.checkbox_wrapper}>
                                    <label>
                                        <input type="checkbox" className={styles.brand_checkbox} />
                                        {/* <!-- Checkbox --> */}
                                        Lataffa
                                    </label>
                                </div>

                                <div className={styles.checkbox_wrapper}>
                                    <label>
                                        <input type="checkbox" className={styles.brand_checkbox} />
                                        {/* <!-- Checkbox --> */}
                                        La French
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* collection right */}
                <div className={styles.collection_right}>
                    <div className={styles.our_collections}>Our Collections</div>
                    <div className={styles.results_info}>
                        <div className={styles.results_count}>Showing 06 results</div>
                        <div className={styles.sort_by}>
                            <span>Sorted by : <b>Popularity</b>
                                <img className="mt-50" src="../img/down-arrow.svg" alt="" />
                            </span>
                        </div>
                    </div>

                    <div className={styles.class_card}>
                        {perfumes.map(perfume => (
                            <div className={styles.product_card} key={perfume._id}>
                                <div className="text-center image-wrap">
                                    <div className={styles.image_block}>
                                        {/* <img src={perfume.image ||"../../public/sp-2.svg" } alt="Product"  /> */}
                                        <Image src={sp2} alt="sp2" className={styles.product_image} ></Image>
                                       
                                    </div>
                                    <div className={styles.heart_wrapper}>
                                        <Image src={heart} alt="heart"className={styles.heart_image}></Image>
                                        
                                    </div>
                                    <div className={styles.badge_wrapper}>
                                        {/* <Image src={badge} alt="badge" className={styles.badge_wrapper}></Image> */}
                                        
                                    </div>
                                </div>

                                <div className={styles.details_block}>
                                    <div className={styles.head_1}>{perfume.name}</div>
                                    <p className={styles.price}>{perfume.price}</p>
                                    <button
                                        className={styles.buy_button}
                                        onClick={() => addToCart(perfume._id)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                </div>

            </div>

        </div>
    )
}