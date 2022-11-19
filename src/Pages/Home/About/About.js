import React from "react";
import parson from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="images w-1/2 relative">
          <img
            src={parson}
            className="h-full w-full max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <img
            src={parts}
            className="absolute max-w-sm w-3/6 rounded-lg shadow-2xl top-1/2 right-24 border-solid border-8 border-white"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="text-3xl text-orange-600 font-semibold">About Us</p>
          <div className="text-5xl font-semibold my-6">
            <h1 className="my-3">We are qualified & of </h1>
            <h1 className="my-3">experience in this field.</h1>
          </div>
          <p className="font-semibold text-gray-500 py-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="font-semibold text-gray-500 py-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-success">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
