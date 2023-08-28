"use client"
import Image from 'next/image'
import styles from '../Footer/footer.module.css'

export default function FooterContent() {
    return(
        <section className={styles.footerContent}>
            <div className={styles.leftSection}>
                <div className={"company " + styles.contentBox}>
                    <h3>Company</h3>
                    <span>About</span>
                    <span>Contactus</span>
                </div>
                <div className={"services " + styles.contentBox}>
                    <h3>Services</h3>
                    <span>3D Printing</span>
                    <span>Accessories</span>
                    <span>Training</span>
                </div>
                <div className={"follow" + styles.contentBox}>
                    <h3>Follow</h3>
                    <Image src="/SocialIcons/facebook.svg" width={"47"} height={"47"} blurDataURL={"/SocialIcons/facebook.svg"} alt="social" />
                    <Image src="/SocialIcons/instagram.svg" width={"47"} height={"47"} blurDataURL={"/SocialIcons/instagram.svg"} alt="social" />
                </div>
            </div>
            <div className={styles.contactus}>
                <h3>You can Contact us by email at :</h3>
                <span>contact@cubuild.info</span>
            </div>
        </section>
    )
};
