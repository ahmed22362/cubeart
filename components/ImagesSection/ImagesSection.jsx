"use client"

import Image from "next/image";
import styles from './imagesSection.module.css';

export default function ImagesSection({ coverImage, images }) {
    return(
        <>
        <div className={styles.imagesComponent}>
            <div className={styles.imageCover}>
                {coverImage ? 
                                (<Image src={coverImage} height={450} width={450} quality={72} alt={"coverimage"} priority={true} placeholder="blur" blurDataURL={coverImage} />) 
                            :   ("Loading........") }
            </div>
            <div className={styles.imagesBox}>
            {coverImage ? 
                                (<Image src={coverImage} alt={"alt"} width={100} height={100} />) 
                            :   ("Loading........") }
                {images ? images.map((img, index) => {
                    return(
                        <Image src={img} alt={"alt"} width={100} height={100} key={index}/>
                    )
                }) : "Loading another images ..." }
            </div>
            </div>
        </>
    )
};
