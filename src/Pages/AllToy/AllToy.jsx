import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";

const AllToy = () => {
  const toys = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto w-full">
        <table className="table w-full border-2">
          {/* head */}
          <thead className="">
            <tr>
              <th>Toy Image</th>
              <th>Toy name</th>
              <th>Seller Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Availabe Quaantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {toys.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default AllToy;
