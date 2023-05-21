import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, name, Seller, subCategory, price, quantity, photo } = toy;
  return (
    <tr className="border-2 odd:bg-green-200">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      {Seller && <td>{Seller}</td>}
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-outline btn-md border-2 border-green-500">
            details
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default ToyCard;
