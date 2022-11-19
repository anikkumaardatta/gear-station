import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, description, facility } = service;
  return (
    <div className="text-left card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{title}</h2>
        <p className="font-semibold">{description.slice(0, 250)}</p>
        <div className="card-actions justify-end">
          <p className="text-orange-600 text-2xl font-semibold my-2">
            Price: ${price}
          </p>
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-circle btn-outline btn-success">
              <FaAngleDoubleRight></FaAngleDoubleRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
