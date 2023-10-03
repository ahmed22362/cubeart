'use client'

import { Rating } from "primereact/rating";
import styles from './productReview.module.css';
import moment from "moment/moment";
import {useState, useEffect} from 'react';
import Cookies from "universal-cookie";

export default function AllProductReviews({ data, fetchData }) {

    const reviews = data;
    const [isFilled, setIsFilled] = useState(Array(reviews?.length).fill(false));
    const url = process.env.API_URL;
    const cookie = new Cookies()

    useEffect(() => {
        const storedStyles = localStorage.getItem('reviewStyles');
        if (storedStyles) {
            setIsFilled(JSON.parse(storedStyles));
        } else {
            setIsFilled(Array(reviews?.length).fill(false));
        }
    }, [reviews]);

    const saveStylesToLocalStorage = (styles) => {
        localStorage.setItem('reviewStyles', JSON.stringify(styles));
    };
    // const toggleToFill = (index) => {
    //     setIsFilled((prevState) => {
    //         const newState = [...prevState];
    //         newState[index] = !newState[index];
    //         saveStylesToLocalStorage(newState);
    //         return newState;
    //     });
    // };
    const handleHelpfulToggle = async (reviewId, index) => {
        const isAddedToHelpful = isFilled[index];
        try {
            const response = await fetch(
                `${url}/review/${reviewId}/helpful`,
                {
                    method: isAddedToHelpful ? 'DELETE' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${cookie.get('token')}`,
                    },
                }
            );
            if (response.ok) {
                setIsFilled((prevState) => {
                    const newState = [...prevState];
                    newState[index] = !isAddedToHelpful;
                    saveStylesToLocalStorage(newState);
                    return newState;
                });
                fetchData();
                console.log(isAddedToHelpful ? 'Deleted successfully' : 'Added successfully');
            } else {
                console.error('Error:', isAddedToHelpful ? 'clear Helpful is Done' : 'Adding to Helpful is Done');
                console.log(isAddedToHelpful ? 'Delete failed' : 'Add failed');
            }
        } catch (error) {
            console.error('Error:', isAddedToHelpful ? 'Removing from Helpful' : 'Adding to Helpful', error);
        }
    };
    return(
        <>
            <div className={styles.allProductReviews + " px-5"}>
                {data && reviews.map((review, index) => {
                    const isAddedToHelpful = isFilled[index];
                    return(
                        <div className={styles.rateBox} key={index + 1}>
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
                                <button
                                        className={`${styles.helpfulBtn} ${!isAddedToHelpful ? styles.helpfulBtn : styles.fillBtn}`}
                                        onClick={() => handleHelpfulToggle(review.id, index)}>
                                    <i className="bi bi-hand-thumbs-up"></i>
                                    helpful ({review.likeCount})
                                </button>
                            </div>
                        </div>
                    )})}
            </div>
        </>
    )
};
