"use client"

import { useState, useEffect } from 'react';
import { AllProductReviews, ContentSection, ImagesSection, OverViewSection, Recommendations, Reviews, AddReview, Footer } from "@/components";
import { useParams, useRouter } from 'next/navigation';

export default function ProductDetails() {
    const {id} = useParams();
    const [data, setData] = useState({});
    const [isValidId, setIsValidId] = useState(true);
    const url = process.env.NEXT_PUBLIC_URL;

    const fetchData = async () => {
        try {
            const response = await fetch(`${url}/product/${id}`);
            const data = await response.json();
            setData(data.data);
            setIsValidId(!!data.data);
            console.log(data.data)
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        if (!id) return;
        fetchData();
    }, [id]);

    if (!isValidId) {
        return <Error />
    }

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
            <OverViewSection data={data && data.options} />
            <Recommendations />
            <Reviews data={data && data}/>
            <AllProductReviews data={data && data.reviews} fetchData={fetchData} />
            <AddReview productId={data && data.id} fetchData={fetchData}/>
            <Footer />
        </>
    )
};
