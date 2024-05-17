/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { rootImagePath } from "@/utils/rootImagePath";

export const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="slider-container w-full">
      <Slider {...settings} className="w-full object-cover overflow-hidden">
        <div>
          <img
            src={rootImagePath("/Slider/web%20images-04.jpg")}
            alt="banner1"
            className="w-full"
          />
        </div>
        <div>
          <img
            src={rootImagePath("/Slider/web%20images-03.jpg")}
            alt="banner2"
            className="w-full"
          />
        </div>
        <div>
          <img
            src={rootImagePath("/Slider/web%20images-01.jpg")}
            alt="banner3"
            className="w-full"
          />
        </div>
        <div>
          <img src="/images/slider/slider-4.png" alt="banner4" />
        </div>
        <div>
          <img src="/images/slider/slider-5.png" alt="banner5" />
        </div>
        <div>
          <img src="/images/slider/slider-6.png" alt="banner6" />
        </div>
      </Slider>
    </div>
  );
};
