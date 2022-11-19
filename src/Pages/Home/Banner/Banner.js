import React from "react";
import img1 from "../../../assets/images/banner/wide/b1.jpg";
import img2 from "../../../assets/images/banner/wide/b2.jpg";
import img3 from "../../../assets/images/banner/wide/b3.jpg";
import img4 from "../../../assets/images/banner/wide/b4.jpg";
import img5 from "../../../assets/images/banner/wide/b5.jpg";
import img6 from "../../../assets/images/banner/wide/b6.jpg";
import "./Banner.css";
import CarouselItem from "./CarouselItem";

const bannerDatas = [
  {
    image: img1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: img5,
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    image: img6,
    prev: 5,
    id: 6,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full">
      {bannerDatas.map((bannerData) => (
        <CarouselItem
          key={bannerData.id}
          bannerData={bannerData}
        ></CarouselItem>
      ))}
    </div>
  );
};

export default Banner;
