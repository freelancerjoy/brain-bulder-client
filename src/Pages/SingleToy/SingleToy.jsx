import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toy = useLoaderData();
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
    <div className="w-11/12 mx-auto py-6">
      <div className="card lg:card-side bg-base-100 shadow-xl py-2">
        <figure className="md:w-1/2">
          <img className="w-full" src={photo} alt="Album" />
        </figure>
        <div className="md:w-1/2 ml-6">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <div className="space-y-2 mt-4">
            <p>
              <span className="font-bold">Seller:</span> {Seller}
            </p>
            <p>
              <span className="font-bold"> E-mail:</span> {email}
            </p>
            <p>
              <span className="font-bold"> Price:</span> {price}
            </p>
            <p>
              <span className="font-bold">Avalable:</span> {quantity}
            </p>
            <p>
              <span className="font-bold">Rating: </span>
              {rating}
            </p>

            <p className="">
              {" "}
              <span className="font-bold">Description:</span> {description}
            </p>
          </div>
          <div className="card-actions mt-10">
            <button className="btn btn-primary">Ordee Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
