import React from "react";

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
    <div className=" px-8">
      <div class="card card-compact border-green-100 border-4 h-96 bg-base-100 shadow-xl">
        <figure className="">
          <img className="w-full pt-5" src={photo} alt="Shoes" />
        </figure>
        <div class="flex text-left justify-between items-end px-10 py-6">
          <div>
            <h2 class="card-title font-bold">{name}</h2>
            <p>
              <span className="font-bold">Price</span> {price}
            </p>
            <p>
              <span className="font-bold">Rating</span> {rating}
            </p>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary bg-green-500 rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
