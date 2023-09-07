"use client"

import Link from 'next/link';
import styles from '../productSlider/productSlide.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductCard({
    title,
    currentPrice,
    price,
    discount,
    image,
    category,
    description,
    id
}) {

    const [isFilled, setIsFilled] = useState(false);

    const toggleToFill = () => {
        setIsFilled(!isFilled);
    }


    return (
        <>
        <div className={"card h-100 " + styles.cardItem} >
            <Link href={`/products/${id}`}>
                <Image src={image} className="card-img-top" sizes="100vh" style={{width: '100%', height: "240px"}} width={"500"} height={"300"} alt={"image"} priority={true} />
            </Link>
            <i  className={`bi ${styles.heart} ${!isFilled ? 'bi-heart' : 'bi-heart-fill'}`}
            onClick={() => {toggleToFill()}}></i>
            <div className="card-body" style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}>
                <h5 className="card-title" style={{height: "50px"}}>{title.length > 30 ? title.substring(0, 25) + '...' : title }</h5>
                <div className={styles.upperBody}>
                    <span className="category" style={{color: "rgb(151, 151, 151)"}}>{category}</span>
                    <p className="card-text">{currentPrice} EGP</p>
                </div>
                <div className="price-section">
                    <div className={styles.discount}>
                        <p className="card-text text-success" style={{paddingLeft: "5px"}}>{discount  || " "}</p>
                        <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>{price}</p>
                    </div>
                </div>
                <button className={"btn " + styles.addBtn}>
                    <i className="bi bi-cart3"></i>
                    Add
                </button>
            </div>
        </div>
        </>
    )
};
