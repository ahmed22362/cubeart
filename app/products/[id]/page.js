"use client"

import { useState, useEffect } from 'react';
import { ContentSection, ImagesSection } from "@/components";

export default function ProductDetails({params}) {
    const product_id = params.id;
    const [data, setData] = useState({})
    const fetchData = async () => {
        const response = await fetch(`https://cubuild.onrender.com/api/v1/product/${product_id}`);
        const data = await response.json();
        console.log(data.data)
        setData(data.data);
        
    };
    useEffect(() => {
        fetchData();
    }, []);

    return(
        <>
            <section style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "60px",
                marginBottom: "20px",
                gap: "20px",
                flexWrap: "wrap",
                overflow: "hidden"
            }}>
                <ImagesSection coverImage={data && data.coverImage} images={data && data.images}/>
                <ContentSection data={data && data} />
            </section>
        </>
    )
};
