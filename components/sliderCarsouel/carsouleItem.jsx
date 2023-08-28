"use client"

import Image from "next/image"

import styles from './sliderCarsouel.module.css'

export default function CarsouleItemSlider({headerText, firstBtn, secBtn, img, alt}) {
    return(
        <div className={"carousel-item active " + styles.carsouelItem}>
        {/* <div className="carousel-caption d-none d-md-block">
            <h1>{headerText}</h1>
            <div className={styles.carsouleBtns}>
                <button className={"btn " + styles.btnPurple}>{firstBtn}</button>
                <button className="btn">{secBtn}</button>
            </div>
        </div> */}
        <Image src={`/Carsouel-images/${img}`} className={styles.carosuelImg} sizes="100vw"
            style={{
            width: '100%',
            height: 'auto',
            }}
            width={500}
            height={300}
            alt={alt}
            placeholder="blur"
            blurDataURL={`/Carsouel-images/${img}`} />
        </div>
    )
};
