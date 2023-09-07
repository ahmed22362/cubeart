"use client"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './quickQuote.module.css'

export default function QuickQuote() {

        const form = useRef();
        const sendEmail = (e) => {

            e.preventDefault();

            emailjs.sendForm('service_f9khdvu', 'template_degpul8', form.current, '3FqJG_Ro56DWbg4Wt')
            .then((result) => {
                alert('success sending email', result);
            }, (error) => {
                alert('error sending email', error);
            })

        }

    return (
        <div className={styles.ourFormStyle}>
            <h3>Request a quick quote</h3>
            <p>Please kindly fill in the table below , we will response to your question soon</p>
            <form action="" ref={form} onSubmit={sendEmail}>
                <div className={styles.formSection}>
                <div className={"row" + styles.fromHalfSection}>
                    <div className="form-outline">
                        <input type="text" id="form3Example1" className={styles.item} placeholder="Your Name" name='user_name'/>
                    </div>
                    <div className="form-outline">
                        <input type="email" id="form3Example2" className={styles.item} placeholder="Email" name="user_email"/>
                    </div>
                    <div className="form-outline">
                        <input type="tel" id="form3Example3" className={styles.item} placeholder="Phone number" name="phone_number"/>
                    </div>
                </div>
                <div className={"row" + styles.fromHalfSection}>
                    <div className="form-outline">
                        <input type="text" id="form3Example4" className={styles.item} placeholder="Subject" name="subject"/>
                    </div>
                    <div className="form-outline mb-4">
                        <textarea className={styles.item + " textArea"} style={{resize: "none", height: "120px"}} id="form4Example5" placeholder="Your Message" name='message'></textarea>
                    </div>
                </div>
                </div>
                {/* <MainButton text="sumbit"  /> */}
                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
    )
};


