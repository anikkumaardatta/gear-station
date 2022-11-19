import React from "react";

const CarouselItem = ({ bannerData }) => {
  const { image, prev, next, id } = bannerData;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full" alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-6 md:left-14 lg:left-20 top-1/2">
        <div>
          <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-semibold">
            Affordable <br />
            Price For Car <br />
            Servicing <br />
          </h1>
          <p className="text-white my-2 lg:my-8  w-1/2 ">
            {/* There are many variations of passages of available, but the majority
            have suffered alteration in some form */}
          </p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mr-5 btn-success block md:inline lg:inline my-2 text-1xl lg:text-2xl">
            Discover More
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-success block md:inline lg:inline my-2 glass text-1xl lg:text-2xl">
            Latest Projects
          </button>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-0 md:right-5 lg:right-5 bottom-0">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle m-2 text-white background-opacity-80"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle m-2 text-white background-opacity-80"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
