'use client'

import { Rating } from "primereact/rating"
import styles from './productReview.module.css';

export default function AllProductReviews() {
    return(
        <>
        <div className={styles.allProductReviews + " py-5 px-5"}>
            <div className={styles.productReview}>
                    <svg className={styles.userCard} xmlns="http://www.w3.org/2000/svg" width="119" height="140" viewBox="0 0 119 140" fill="none">
                        <g clipPath="url(#clip0_398_2386)">
                        <rect width="119" height="140" rx="8" fill="#33B9FF"/>
                        <circle cx="59" cy="78" r="28" fill="white"/>
                        <path d="M107 143.5C107 134.88 101.996 126.614 93.0876 120.519C84.1796 114.424 72.0978 111 59.5 111C46.9022 111 34.8204 114.424 25.9124 120.519C17.0045 126.614 12 134.88 12 143.5L59.5 143.5H107Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_398_2386">
                        <rect width="119" height="140" rx="8" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <div className={styles.nameAndDate}>
                        <span className={styles.name}>Salma Sherif</span>
                        <span>21.July.2023</span>
                    </div>
                <div className={styles.rateAndComment}>
                    <Rating value={3} disabled cancel={false} className={styles.stars}/>
                    <div className={styles.commentSection}>
                        <span className={styles.shortComment}>Nice Item</span>
                        <span className={styles.fullComment}>This item is nice, This item is nice, This item is nice, This item is nice.</span>
                    </div>
                </div>
                <div>
                    <button className={styles.helpfulBtn}>
                        <i className="bi bi-hand-thumbs-up"></i>
                        Helpful
                    </button>
                </div>
            </div>
            <div className={styles.productReview}>
                    <svg className={styles.userCard} xmlns="http://www.w3.org/2000/svg" width="119" height="140" viewBox="0 0 119 140" fill="none">
                        <g clipPath="url(#clip0_398_2386)">
                        <rect width="119" height="140" rx="8" fill="#33B9FF"/>
                        <circle cx="59" cy="78" r="28" fill="white"/>
                        <path d="M107 143.5C107 134.88 101.996 126.614 93.0876 120.519C84.1796 114.424 72.0978 111 59.5 111C46.9022 111 34.8204 114.424 25.9124 120.519C17.0045 126.614 12 134.88 12 143.5L59.5 143.5H107Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_398_2386">
                        <rect width="119" height="140" rx="8" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <div className={styles.nameAndDate}>
                        <span className={styles.name}>Salma Sherif</span>
                        <span>21.July.2023</span>
                    </div>
                <div className={styles.rateAndComment}>
                    <Rating value={3} disabled cancel={false} className={styles.stars}/>
                    <div className={styles.commentSection}>
                        <span className={styles.shortComment}>Nice Item</span>
                        <span className={styles.fullComment}>This item is nice, This item is nice, This item is nice, This item is nice.</span>
                    </div>
                </div>
                <div>
                    <button className={styles.helpfulBtn}>
                        <i className="bi bi-hand-thumbs-up"></i>
                        Helpful
                    </button>
                </div>
            </div>
            <div className={styles.productReview}>
                    <svg className={styles.userCard} xmlns="http://www.w3.org/2000/svg" width="119" height="140" viewBox="0 0 119 140" fill="none">
                        <g clipPath="url(#clip0_398_2386)">
                        <rect width="119" height="140" rx="8" fill="#33B9FF"/>
                        <circle cx="59" cy="78" r="28" fill="white"/>
                        <path d="M107 143.5C107 134.88 101.996 126.614 93.0876 120.519C84.1796 114.424 72.0978 111 59.5 111C46.9022 111 34.8204 114.424 25.9124 120.519C17.0045 126.614 12 134.88 12 143.5L59.5 143.5H107Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_398_2386">
                        <rect width="119" height="140" rx="8" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <div className={styles.nameAndDate}>
                        <span className={styles.name}>Salma Sherif</span>
                        <span>21.July.2023</span>
                    </div>
                <div className={styles.rateAndComment}>
                    <Rating value={3} disabled cancel={false} className={styles.stars}/>
                    <div className={styles.commentSection}>
                        <span className={styles.shortComment}>Nice Item</span>
                        <span className={styles.fullComment}>This item is nice, This item is nice, This item is nice, This item is nice.</span>
                    </div>
                </div>
                <div>
                    <button className={styles.helpfulBtn}>
                        <i className="bi bi-hand-thumbs-up"></i>
                        Helpful
                    </button>
                </div>
            </div>
        </div>
        </>
    )
};
