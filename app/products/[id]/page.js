"use client"

import { useState, useEffect } from 'react';
import { ImagesSection } from "@/components";

export default function ProductDetails({params}) {
    const [data, setData] = useState(null)
    const product_id = params.id;
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
            <section>
                <h2>{data && data.title}</h2>

                <ImagesSection image={data && data} />

            </section>
        </>
    )
};
