"use client"

import Image from "next/image"

export default function ImagesSection({ image }) {
    return(
        <>
            <div>
                <Image src={image && image.coverImage} height={"100"} width={"100"} alt={"coverimage"} />
            </div>
        
        </>
    )
};
