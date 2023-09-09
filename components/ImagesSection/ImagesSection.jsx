"use client"

import Image from "next/image";
import styles from './imagesSection.module.css';
import Loading from "./Loading";

export default function ImagesSection({ coverImage, images }) {
    return(
        <>
        {coverImage && images ? (
        <div className={styles.imagesComponent}>
            <div className={styles.imageCover}>
                <Image src={coverImage} height={450} width={450} quality={100} alt={"coverimage"} loading="lazy" />
                
            </div>

            <div className={styles.imagesBox}>
            <Image src={coverImage} alt={"alt"} width={100} height={100} />
                {images ? images.map((img, index) => {
                    return(
                        <Image src={img} alt={"alt"} width={100} height={100} key={index}/>
                    )
                }) : (<Loading />) }
            </div>
            </div>
            ) : (<Loading />)}
        </>
    )
};
