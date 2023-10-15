"use client"

import Image from "next/image"

import styles from './sliderCarsouel.module.css'
import Cookies from "universal-cookie";
import {useRouter} from "next/navigation";
import {useState} from "react";
import AuthModal from "@/components/Auth/AuthComponent";

export default function CarsouleItemSlider({headerText, carsouelText, firstBtn, secBtn, btnColor, img, alt, active}) {

    const cookie = new Cookies()
    const router = useRouter()
    const [showLoginModal, setShowLoginModal] = useState(false);



    const handleFirstButton = () => {
       if(cookie.get('user-access-token')) {
           router.push("/upload")
       } else {
           setShowLoginModal(true);
       }
   }
   const handleSecondButton = () => {
        router.push("/#contact")
   }

    return(
        <div className={`carousel-item ${active} ${styles.carsouelItem}`}>
        <div className={"carousel-caption"} style={
            {
                zIndex: "1",
                position: "absolute",
                right: "0",
                bottom: "40%",
                left: "50%",
                transform: "translate(-50%, 0)",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
            }
        }>
            <h1 className={styles.header1}>{headerText}</h1>
            <p className={styles.carosuelP}>{carsouelText}</p>
            <div className={styles.carosuelBtns}>
                <button className={btnColor} onClick={handleFirstButton}>{firstBtn}</button>
                <button className={styles.white} onClick={handleSecondButton}>{secBtn}</button>
            </div>
        </div>
        <Image src={`/Carsouel-images/${img}`} className={styles.carosuelImg} sizes="100vw"
            style={{
            width: '100%',
            height: 'auto',
            }}
            width={400}
            height={300}
            alt={alt}
            quality={"75"}
            placeholder={"blur"}
            blurDataURL={`/Carsouel-images/${img}`}
            />
            {showLoginModal && <AuthModal show={showLoginModal} closeModal={() => setShowLoginModal(false)} />}
        </div>
    )
};
