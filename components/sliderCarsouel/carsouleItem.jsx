"use client"

import Image from "next/image"

import styles from './sliderCarsouel.module.css'

export default function CarsouleItemSlider({headerText, carsouelText, firstBtn, secBtn, btnColor, img, alt, active}) {
    return(
        <div className={`carousel-item ${active} ${styles.carsouelItem}`}>
        <div className={"carousel-caption"} style={
            {
                zIndex: "1",
                position: "absolute",
                right: "0",
                bottom: "30%",
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
                <button className={btnColor}>{firstBtn}</button>
                <button className={styles.white}>{secBtn}</button>
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
        </div>
    )
};
