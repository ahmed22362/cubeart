"use client"
import styles from '../Footer/footer.module.css'

export default function FooterContent() {
    return(
        <section className={styles.footerContent}>
            <div className={styles.leftSection}>
                <div className="company">
                    <h3>Company</h3>
                    <span>About</span>
                    <span>Contactus</span>
                </div>
                <div className="services">
                    <h3>Services</h3>
                    <span>3D Printing</span>
                    <span>Accessories</span>
                    <span>Training</span>
                </div>
                <div className="follow">
                    <img src="/SocialIcons/facebook.svg" alt="" />
                    <img src="/SocialIcons/instagram.svg" alt="" />
                </div>
            </div>
            <div className="contactus">
                <h3>You can Contact us by email at :</h3>
                <span>contact@cubuild.info</span>
            </div>
        </section>
    )
};
