import React, { useContext, useEffect, useState } from "react";
import MyToyCard from "./MyToyCard";
import { AuthContest } from "../../../Provider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const MyToy = () => {
  useTitle("My Toy");
  const { user } = useContext(AuthContest);
  const [myToy, setMyToy] = useState();
  const [sortValue, setSortValue] = useState(1);
  const url = `https://brain-bulders-server.vercel.app/mytoy?email=${user?.email}&sort=${sortValue}`;
  console.log(sortValue);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  }, [url, sortValue]);

  const sort = (event) => {
    const value = event.target.value;
    setSortValue(value);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto w-full">
        <div className="py-4">
          <select
            onChange={sort}
            className="select select-bordered w-full max-w-xs">
            <option selected>Sort By Price</option>
            <option value="2">High</option>
            <option value="1">low</option>
          </select>
        </div>
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
            {myToy?.map((toy) => (
              <MyToyCard key={toy._id} toy={toy}></MyToyCard>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyToy;
