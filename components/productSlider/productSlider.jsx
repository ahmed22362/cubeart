"use client"

import React, { Component } from "react";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

export default class ProductSlider extends Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
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
                <h3>Our Produts</h3>
                <a href="" style={{color: "black"}}>View All</a>
            </div>

            <Slider {...settings}>

            <div className="card">
                <img src="Items/item.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Hunting Cat 3D Printable</h5>
                    <div className="upper-body">
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>

                    </div>
                    <div className="price-section">
                        <div className="discount">
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className="btn add-btn">
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
            {/* ============== Repeat Card =================== */}
            <div className="card">
                <img src="Items/item.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Hunting Cat 3D Printable</h5>
                    <div className="upper-body">
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>

                    </div>
                    <div className="price-section">
                        <div className="discount">
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className="btn add-btn">
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
            <div className="card">
                <img src="Items/item.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Hunting Cat 3D Printable</h5>
                    <div className="upper-body">
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>

                    </div>
                    <div className="price-section">
                        <div className="discount">
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className="btn add-btn">
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
            <div className="card">
                <img src="Items/item.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Hunting Cat 3D Printable</h5>
                    <div className="upper-body">
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>

                    </div>
                    <div className="price-section">
                        <div className="discount">
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className="btn add-btn">
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
            <div className="card">
                <img src="Items/item.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Hunting Cat 3D Printable</h5>
                    <div className="upper-body">
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>

                    </div>
                    <div className="price-section">
                        <div className="discount">
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className="btn add-btn">
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
            <div className="card">
                <img src="Items/item.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Hunting Cat 3D Printable</h5>
                    <div className="upper-body">
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>

                    </div>
                    <div className="price-section">
                        <div className="discount">
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className="btn add-btn">
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
            <div className="card">
                <img src="Items/item.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Hunting Cat 3D Printable</h5>
                    <div className="upper-body">
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>3D Model</span>
                        <p className="card-text">25 EGP</p>

                    </div>
                    <div className="price-section">
                        <div className="discount">
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>44% OFF</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>80</p>
                        </div>
                    </div>
                    <button className="btn add-btn">
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