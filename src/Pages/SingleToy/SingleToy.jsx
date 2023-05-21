import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SingleToy = () => {
  useTitle("Toy Details");
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
      <div className="card lg:card-side md:ml-12 bg-base-100 shadow-xl py-2">
        <figure className="md:w-1/2">
          <img className="w-full" src={photo} alt="Album" />
        </figure>
        <div className="md:w-1/2 ml-6 mt-12 md:px-10 pb-5 lg:pb-0">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <div className="space-y-2 mt-4">
            {Seller && (
              <p>
                <span className="font-bold">Seller:</span> {Seller}
              </p>
            )}
            <p>
              <span className="font-bold"> E-mail:</span> {email}
            </p>
            <p>
              <span className="font-bold"> Price:</span> {price}
            </p>
            <p>
              <span className="font-bold">Avalable:</span> {quantity}
            </p>
            <p className="flex gap-2 items-center">
              <span className="font-bold">Rating: </span>
              <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
            </p>

            <p className="">
              {" "}
              <span className="font-bold">Description:</span> {description}
            </p>
          </div>
          <div className="card-actions mt-10">
            <button className="btn btn-outline border 2 text-green-500 border-green-500">
              Ordee Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
