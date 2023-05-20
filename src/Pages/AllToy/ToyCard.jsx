import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, name, Seller, subCategory, price, quantity, photo } = toy;
  return (
    <tr className="border-2">
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
      <td>{Seller}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-ghost btn-xs">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default ToyCard;
