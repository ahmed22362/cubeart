'use client'

import { Rating } from "primereact/rating";
import styles from './productReview.module.css';
import moment from "moment/moment";
import {useState} from 'react';

export default function AllProductReviews({ data }) {

    const reviews = data;
    const [isFilled, setIsFilled] = useState(Array(reviews?.length).fill(false));

    const toggleToFill = (index) => {
        setIsFilled(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return(
        <>
            <div className={styles.allProductReviews + " py-5 px-5"}>
                {data && reviews.map((review, index) => {
                    return(
                        <div className={styles.rateBox} key={index}>
                            <div className={styles.userCard}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="119" height="140" viewBox="0 0 119 140" fill="none">
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
                                <span style={{color: "#a5a1a1"}}>{moment(review.createdAt).format('lll')}</span>
                            </div>
                            <div className={styles.rateAndComment}>
                                <Rating value={review.rating} disabled cancel={false} className={styles.stars}/>
                                <span className={styles.name}>{review.user.name}</span>
                                <div className={styles.commentSection}>
                                    <span className={styles.shortComment}>{review.title}</span>
                                    <span className={styles.fullComment}>{review.body}</span>
                                </div>
                            </div>
                            <div>
                                <button label="Success" className={`${styles.helpfulBtn} ${!isFilled[index] ? styles.helpfulBtn : styles.fillBtn}`} onClick={() => {toggleToFill(index)}}>
                                    <i className="bi bi-hand-thumbs-up"></i>
                                    helpful
                                </button>
                            </div>
                        </div>
                    )})}
            </div>
        </>
    )
};
