import React, { useEffect, useState } from "react";
import MyToyCard from "./MyToyCard";

const MyToy = () => {
  const [myToy, setMyToy] = useState();
  const email = "joy@gmail.com";
  const url = `http://localhost:5000/mytoy?email=${email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  }, []);
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
