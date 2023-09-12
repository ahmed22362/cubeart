'use client'

import styles from './addReview.module.css';


export default function AddReview() {
    return(
        <>
            <div className="py-5 px-5">
                <form className={styles.reviewForm}>
                    <textarea placeholder="type your review" name="review"></textarea>
                    <button className={styles.addReviewBtn}>Send</button>
                </form>
            </div>
        </>
    )
};
