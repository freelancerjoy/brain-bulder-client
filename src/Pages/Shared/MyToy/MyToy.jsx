import React, { useContext, useEffect, useState } from "react";
import MyToyCard from "./MyToyCard";
import { AuthContest } from "../../../Provider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import Swal from "sweetalert2";

const MyToy = () => {
  useTitle("My Toy");
  const { user } = useContext(AuthContest);
  const [myToy, setMyToy] = useState();
  const [sortValue, setSortValue] = useState(1);

  // email search query url
  const url = `https://brain-server-two.vercel.app/mytoy?email=${user?.email}&sort=${sortValue}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  }, [url, sortValue]);

  // Sort function
  const sort = (event) => {
    const value = event.target.value;
    setSortValue(value);
  };

  // Delete toy function
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brain-server-two.vercel.app/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount == 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaing = myToy.filter((toy) => toy._id !== _id);
              setMyToy(remaing);
            }
          });
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="py-4">
        <select
          onChange={sort}
          className="select select-bordered w-full max-w-xs">
          <option selected>Sort By Price</option>
          <option value="2">High</option>
          <option value="1">low</option>
        </select>
      </div>
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
              <MyToyCard
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}></MyToyCard>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyToy;
