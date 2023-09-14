"use client"

import Image from "next/image";
import styles from './imagesSection.module.css';
import Loading from "./Loading";
import { useState } from "react";

export default function ImagesSection({ coverImage, images }) {

    const [selectedImage, setSelectedImage] = useState(coverImage);

    const selectImage = (image) => {
        setSelectedImage(image);
    }

    return(
        <>
        {coverImage && images ? (
        <div className={styles.imagesComponent}>
            <div className={styles.imageCover}>
                <Image 
                    src={selectedImage || coverImage} 
                    height={450} width={450} 
                    quality={100} 
                    alt={"coverimage"} 
                    loading="lazy" 
                    />
            </div>

            <div className={styles.imagesBox}>
                <div className={styles.overlay} >
                <Image 
                    src={coverImage} 
                    alt={"alt"} 
                    width={100} 
                    height={100} 
                    onClick={() => selectImage(coverImage)}/>
                </div>
                {images ? images.map((img, index) => {
                    return(
                        <div className={styles.overlay} key={index} >
                            <Image 
                                src={img} 
                                alt={"alt"} 
                                width={100} 
                                height={100} 
                                onClick={() => selectImage(img)}/>
                        </div>
                    )
                }) : (<Loading />) }
            </div>
            </div>
            ) : (<Loading />)}
        </>
    )
};
