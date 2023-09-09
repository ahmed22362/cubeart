"use client"
import styles from './contentSection.module.css'
import {useState} from 'react';
export default function ContentSection({data}) {
    const productData = "Loading" && data;
    
    const [isFilled, setIsFilled] = useState(false);

    const toggleToFill = () => {
        setIsFilled(!isFilled);
    }


    return(
        <div className={styles.contentSection}>
            <h3>{productData.title}</h3>
            <div className={styles.addToWishList}>
                <i className={`bi ${!isFilled ? 'bi-heart' : 'bi-heart-fill text-danger'}`}
                onClick={() => {toggleToFill()}}></i>
                    <span>Add to Wishlist</span>
            </div>
            <div className={styles.shareWith}>
                <i className="bi bi-share"></i>
                <span>Share</span>
            </div>
            <div className={styles.description}>
                <h4>Description</h4>
                <p>{productData.description}</p>
            </div>
            <div className={styles.price}>
                <h4>Price</h4>
                <span>{productData.price} EGP</span>
            </div>
            <div className={styles.quantity}>
                <h4>Quantity</h4>
                <form>
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </form>
            </div>
            <button className={"btn " + styles.addBtn}>
                    <i className="bi bi-cart3"></i>
                    Add to cart
            </button>
        </div>
    )
}
