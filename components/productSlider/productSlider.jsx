"use client"

import React, { Component } from "react";
import Slider from "react-slick";
import styles from './productSlide.module.css'
import Image from "next/image";
import Link from "next/link";


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

            <div className="card h-100">
                <Image src="/Items/item.png" className="card-img-top" sizes="100vh" style={{width: '100%', height: "240px"}} width={"500"} height={"300"} alt={"image"} />
                <div className="card-body">
                    <h5 className="card-title">HuntiWng Cat 3D Printable</h5>
                    <div className={styles.upperBody}>
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>
                    </div>
                    <div className="price-section">
                        <div className={styles.discount}>
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className={"btn " + styles.addBtn}>
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
            {/* ============== Repeat Card =================== */}
            <div className="card h-100">
                <Image src="/Items/item2.png" className="card-img-top" sizes="100vw" style={{width: '100%', height: "240px"}} width={"500"} height={"300"} alt={"image"} />
                <div className="card-body">
                    <h5 className="card-title">HuntiWng Cat 3D Printable</h5>
                    <div className={styles.upperBody}>
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>
                    </div>
                    <div className="price-section">
                        <div className={styles.discount}>
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className={"btn " + styles.addBtn}>
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
            <div className="card h-100">
                <Image src="/Items/item3.png" className="card-img-top" sizes="100vw" style={{width: '100%', height: "240px"}} width={"500"} height={"300"} alt={"image"} />
                <div className="card-body">
                    <h5 className="card-title">HuntiWng Cat 3D Printable</h5>
                    <div className={styles.upperBody}>
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>
                    </div>
                    <div className="price-section">
                        <div className={styles.discount}>
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className={"btn " + styles.addBtn}>
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
            <div className="card h-100">
                <Image src="/Items/item4.png" className="card-img-top" sizes="100vw" style={{width: '100%', height: "240px"}} width={"500"} height={"300"} alt={"image"} />
                <div className="card-body">
                    <h5 className="card-title">HuntiWng Cat 3D Printable</h5>
                    <div className={styles.upperBody}>
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>
                    </div>
                    <div className="price-section">
                        <div className={styles.discount}>
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className={"btn " + styles.addBtn}>
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
            <div className="card h-100">
                <Image src="/Items/item5.png" className="card-img-top" sizes="100vw" style={{width: '100%', height: "240px"}} width={"500"} height={"300"} alt={"image"} />
                <div className="card-body">
                    <h5 className="card-title">HuntiWng Cat 3D Printable</h5>
                    <div className={styles.upperBody}>
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>
                    </div>
                    <div className="price-section">
                        <div className={styles.discount}>
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className={"btn " + styles.addBtn}>
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
            <div className="card h-100">
                <Image src="/Items/item6.png" className="card-img-top" sizes="100vw" style={{width: '100%', height: "240px"}} width={"500"} height={"300"} alt={"image"} />
                <div className="card-body">
                    <h5 className="card-title">HuntiWng Cat 3D Printable</h5>
                    <div className={styles.upperBody}>
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>
                    </div>
                    <div className="price-section">
                        <div className={styles.discount}>
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className={"btn " + styles.addBtn}>
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
            </Slider>
          </div>
        );
    }
}