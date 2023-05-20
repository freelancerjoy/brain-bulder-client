import React, { useContext, useEffect, useState } from "react";
import MyToyCard from "./MyToyCard";
import { AuthContest } from "../../../Provider/AuthProvider";

const MyToy = () => {
  const { user } = useContext(AuthContest);
  const [myToy, setMyToy] = useState();
  const url = `https://brain-bulders-server.vercel.app/mytoy?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  }, [url]);
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
