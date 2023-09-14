'use client'

import { useState } from 'react';
import styles from './addReview.module.css';
import { Rating } from 'primereact/rating';


export default function AddReview({productId}) {

    const [review, setReview] = useState('');
    const [title, setTitle] = useState('');
    const [rate, setRate] = useState(0);
    const [responseMessage, setMessage] = useState(null);

    const sendRating = () => {
        const formData = {
            'review': review,
            title: title,
            rate: rate,
            product: productId && productId
        }
        fetch(`https://cubuild.onrender.com/api/v1/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                setMessage('Review submitted successfully.');
                setTimeout(() => {
                    setMessage(null);
                }, 5000)
            } else {
                setMessage(data.message);
                setTimeout(() => {
                    setMessage(null);
                }, 5000)
            }
            console.log(data);
        })
        .catch(error => {
            setMessage('An error occurred. Please try again later.');
            console.log(error);
        });
    }

    return(
        <>
            <div className="py-5 px-5" >
                <div className={styles.reviewForm}>
                    <Rating
                        className={styles.stars}
                        value={rate} 
                        onChange={(e) => setRate(e.value)} 
                        cancel={false} />
                    <input 
                        type="text" 
                        name="title" 
                        placeholder='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                    
                    <textarea 
                        placeholder="type your review" 
                        value={review}
                        name="review"
                        onChange={(e) => setReview(e.target.value)}></textarea>
                    <button 
                        className={styles.addReviewBtn} 
                        onClick={sendRating}>Send
                    </button>
                    {responseMessage && (
                        <div className={`alert ${responseMessage.includes('success') ? 'alert-success' : 'alert-danger'}`}>
                            {responseMessage}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
};
