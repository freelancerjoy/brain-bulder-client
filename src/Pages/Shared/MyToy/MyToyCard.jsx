import React from "react";
import { Link } from "react-router-dom";

const MyToyCard = ({ toy, handleDelete }) => {
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
      <th className="flex items-center gap-4 mt-4">
        <Link to={`/update/${_id}`}>
          <button className="btn ">Update</button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error  text-white btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              tabIndex="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

export default MyToyCard;
