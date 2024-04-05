"use client";

import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import styles from "./recommendations.module.css";
import Loading from "./Loading";

export default function Recommendations() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://cubuild.onrender.com/api/v1/product?limit=3&sort=-price",
      );
      const responseData = await response.json();
      setData(responseData.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="px-5">
        <h2>Recommendations</h2>
        <div className={styles.recommendationsItems}>
          {loading === false ? (
            data.map((item, index) => {
              return (
                <div className={styles.product} key={index + 1}>
                  <ProductCard
                    title={item.title}
                    currentPrice={item.price}
                    image={item.coverImage}
                    category={item.category || "3D Model"}
                    id={item.id}
                  />
                </div>
              );
            })
          ) : (
            <div className="d-flex flex-wrap justify-content-between w-100">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
