import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";
import useTitle from "../../Hooks/useTitle";
import { BallTriangle } from "react-loader-spinner";

const AllToy = () => {
  useTitle("All Toy");

  const [toys, setToys] = useState();
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch("https://brain-server-two.vercel.app/alltoy")
      .then((res) => res.json())
      .then((data) => setToys(data));
    setSpinner(false);
  }, []);

  // Search By Title
  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    console.log(search);
    fetch(`https://brain-server-two.vercel.app/getToyByTitle/${search}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="w-11/12 mx-auto">
      <form
        onSubmit={handleSearch}
        className="text-center flex justify-center p-4">
        <input
          type="text"
          name="search"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          className="btn ml-2 btn-outline border-green-500 border-2"
          type="submit"
          value="Search"
        />
      </form>

      <div className="overflow-x-auto max-h-max w-full">
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
            {(spinner && (
              <div className="flex justify-center">
                <BallTriangle
                  height={100}
                  width={100}
                  radius={5}
                  color="#4fa94d"
                  ariaLabel="ball-triangle-loading"
                  wrapperClass={{}}
                  wrapperStyle=""
                  visible={true}
                />
              </div>
            )) ||
              toys?.map((toy) => <ToyCard key={toy._id} toy={toy}></ToyCard>)}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default AllToy;
