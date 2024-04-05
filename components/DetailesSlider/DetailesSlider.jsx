"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import "./styles.css";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function App() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel],
  );

  return (
    <div className="wrapper mt-5">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 ">
            <Image
              className={`w-100`}
              src="../images/image16.png"
              alt="item detailes"
            />
          </div>
          <div className="carousel__cell number-slide2">
            <Image
              className={`w-100`}
              src="../images/image15.png"
              alt="item detailes"
            />
          </div>
          <div className="carousel__cell number-slide3">
            <Image
              className={`w-100`}
              src="../images/image14.png"
              alt="item detailes"
            />
          </div>
          <div className="carousel__cell number-slide4">
            <Image
              className={`w-100`}
              src="../images/image13.png"
              alt="item detailes"
            />
          </div>
          <div className="carousel__cell number-slide5">
            <Image
              className={`w-100`}
              src="../images/image12.png"
              alt="item detailes"
            />
          </div>
          <div className="carousel__cell number-slide6">
            <Image
              className={`w-100`}
              src="../images/image 9.png"
              alt="item detailes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
