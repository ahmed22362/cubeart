'use client'

import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import Loading from "./Loading";

export default function Recommendations() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => { 
        try {
            const response = await fetch(
            "https://cubuild.onrender.com/api/v1/product?limit=3&sort=-price"
            );
            const responseData = await response.json();
            setData(responseData.data);
            setLoading(false);
            console.log(responseData.data);
        } catch (err) {

            console.log(err);
        }
    }

    useEffect(() => {
        
        getData();

    }, [])



    return(
        <>
            <div className="px-5">
                <h2>Recommendations</h2>
                <div className="d-flex flex-wrap justify-content-center py-5">
                    {loading === false ? data.map((item, index) => {
                        return(
                                <ProductCard title={item.title} currentPrice={item.price} image={item.coverImage} category={item.category} key={index} id={item.id}/>
                                )
                            }) : 
                            <div className="d-flex flex-wrap justify-content-between w-100">
                            <Loading />
                        </div>
                    }
                </div>
            </div>
        </>
    )
};
