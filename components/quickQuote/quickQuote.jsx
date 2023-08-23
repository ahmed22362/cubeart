"use client"
import styles from './quickQuote.module.css'

export default function QuickQuote() {
    return (
        <div className={styles.ourFormStyle}>
            <h3>Request a quick quote</h3>
            <p>Please kindly fill in the table below , we will response to your question soon</p>
            <form action="">
                <div className={styles.formSection}>
                <div className={"row" + styles.fromHalfSection}>
                    <div className="form-outline">
                        <input type="text" id="form3Example1" className={styles.item} placeholder="Your Name"/>
                    </div>
                    <div className="form-outline">
                        <input type="email" id="form3Example2" className={styles.item} placeholder="Email"/>
                    </div>
                    <div className="form-outline">
                        <input type="tel" id="form3Example3" className={styles.item} placeholder="Phone number"/>
                    </div>
                </div>
                <div className={"row" + styles.fromHalfSection}>
                    <div className="form-outline">
                        <input type="text" id="form3Example4" className={styles.item} placeholder="Subject"/>
                    </div>
                    <div className="form-outline mb-4">
                        <textarea className={styles.item + " textArea"} style={{resize: "none", height: "120px", width: "250px"}} id="form4Example5" placeholder="Your Message"></textarea>
                    </div>
                </div>
                </div>
                <button type="submit" className="btn btn-primary mb-4" style={{
                    borderRadius: "var(--radius-lg, 16px)",
                    background: "linear-gradient(180deg, #91C7E0 0%, #429ECA 100%)",
                    width: "172px",
                    padding: "12px 57px 12px 56px",
                    border: "none"
                }}>Submit</button>
            </form>
        </div>
    )
};


