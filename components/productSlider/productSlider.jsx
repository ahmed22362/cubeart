"use client"

import React, { Component } from "react";
import Slider from "react-slick";
import styles from './productSlide.module.css'
import Link from "next/link";
import ProductCard from './../ProductCard/ProductCard';


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

export default class ProductSlider extends Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          lazyLoad: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          autoplay: true,
          cssEase: "linear",
          autoplaySpeed: 4000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <div className="my-5">

            <div className="section-title">
                <h3>{this.props.title}</h3>
                <Link href="/" style={{color: "black"}}>View All</Link>
            </div>

            <Slider {...settings}>
            <ProductCard 
                    title={"HuntiWng Cat 3D Printable"} 
                    image={"/Items/item.png"} 
                    price={"80"}
                    currentPrice={"25"}
                    discount={"44%"}
                    category={"3D Model"}
                    id={"1"}
                    />
                <ProductCard 
                    title={"HuntiWng Cat 3D Printable"} 
                    image={"/Items/item2.png"} 
                    price={"80"}
                    currentPrice={"25"}
                    discount={"44%"}
                    category={"3D Model"}
                    id={"2"}
                />
            
            <ProductCard 
                    title={"HuntiWng Cat 3D Printable"} 
                    image={"/Items/item3.png"} 
                    price={"80"}
                    currentPrice={"25"}
                    discount={"44%"}
                    category={"3D Model"}
                    id={"3"}
                    />
                <ProductCard 
                    title={"HuntiWng Cat 3D Printable"} 
                    image={"/Items/item4.png"} 
                    price={"80"}
                    currentPrice={"25"}
                    discount={"44%"}
                    category={"3D Model"}
                    id={"4"}
                />
            
            <ProductCard 
                    title={"HuntiWng Cat 3D Printable"} 
                    image={"/Items/item5.png"} 
                    price={"80"}
                    currentPrice={"25"}
                    discount={"44%"}
                    category={"3D Model"}
                    id={"5"}
                    />
                <ProductCard 
                    title={"HuntiWng Cat 3D Printable"} 
                    image={"/Items/item6.png"} 
                    price={"80"}
                    currentPrice={"25"}
                    discount={"44%"}
                    category={"3D Model"}
                    id={"6"}
                />
            </Slider>
          </div>
        );
    }
}