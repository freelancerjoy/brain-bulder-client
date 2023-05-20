import React from "react";
import { Link } from "react-router-dom";

const Card = ({ toy }) => {
  const {
    _id,
    name,
    Seller,
    email,
    subCategory,
    rating,
    price,
    quantity,
    photo,
    description,
  } = toy;
  return (
    <div className="">
      <div className="card card-compact border-green-100 border-4 h-96 bg-base-100 shadow-xl">
        <figure className="">
          <img className="w-full pt-5" src={photo} alt="Shoes" />
        </figure>
        <div className="flex text-left justify-between items-end px-4 py-6">
          <div>
            <h2 className="card-title font-bold">{name}</h2>
            <p>
              <span className="font-bold">Price</span> {price}
            </p>
            <p>
              <span className="font-bold">Rating</span> {rating}
            </p>
          </div>
          <div className="card-actions justify-end ">
            <Link
              className="btn btn-primary border-0 bg-green-500 rounded-full"
              to={`/toy/${_id}`}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
