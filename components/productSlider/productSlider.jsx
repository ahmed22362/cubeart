"use client"

import Slider from "react-slick";
import styles from './productSlide.module.css'
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import ProductCard from "../ProductCard/ProductCard";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + " " + styles.myOwnStyleRight}
        style={
            { ...style, display: "block"}
        }
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + " " + styles.myOwnStyleLeft}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }


export default function ProductSlider(props) {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = process.env.NEXT_PUBLIC_URL;
  useEffect(() => {
      fetch(`${url}/product?limit=10`)
          .then(response => response.json())
          .then(data => {
              setIsLoading(false);
              setProducts(data.data);
          })
          .catch(error => {
              console.log(error);
          });
  }, []);

  const settings = {
    infinite: true,
    dots: true,
    lazyLoad: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    cssEase: "linear",
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
};
        return (
          <div className="my-5">

            <div className="section-title">
                <h3>{props.title}</h3>
                <Link href="/products" style={{color: "black"}}>View All</Link>
            </div>
              <Slider {...settings}>
              {
              isLoading ? 
                <Loading /> 
              :(
                products && products.map((product, index) => {
                return (
                      <ProductCard
                        key={index}
                        title={product.title} 
                        currentPrice={product.price}
                        category={"3D Model"}
                        image={product.coverImage}
                        id={product.id}
                    />
                )
              }))}
              </Slider>
            </div>
        );
    }