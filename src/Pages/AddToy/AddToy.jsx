/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContest } from "../../Provider/AuthProvider";

const AddToy = () => {
  useTitle("Add New Toy");
  const { user } = useContext(AuthContest);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://brain-server-two.vercel.app/inserttoy", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Succefully Added Toy",
            showConfirmButton: false,
            timer: 1500,
          });
      });
  };
  console.log(watch("example"));
  return (
    <div className="bg-slate-200 py-10">
      <div className="w-11/12 mx-auto">
        <h1 className="font-bold text-3xl  text-center">Add Your New Toy</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <input
              className="bg-white p-3 border"
              placeholder="Toy's name"
              {...register("name")}
            />

            <input
              defaultValue={user?.displayName}
              className="bg-white p-3"
              placeholder="Seller Name"
              {...register("Seller")}
            />

            <input
              className="bg-white p-3"
              placeholder="Price"
              {...register("price", { required: true })}
            />
            <input
              defaultValue={user?.email}
              className="bg-white p-3"
              placeholder="Seller Email"
              {...register("email", { required: true })}
            />
            <select
              className="p-3"
              {...register("subCategory")}
              placeholder="Suv">
              <option value="">Sub-Category</option>
              <option value="Scince Kit">Scince Kit</option>
              <option value="Math Learning Toy">Math Learning Toy</option>
              <option value="Engineering Kit">Engineering Kit</option>
            </select>
            <input
              className="bg-white p-3"
              type="number"
              placeholder="Rating"
              {...register("rating", { required: true })}
            />
            <input
              className="bg-white p-3"
              type="number"
              placeholder="Available Quantity"
              {...register("quantity", { required: true })}
            />
            <input
              className="bg-white p-3"
              type="url"
              placeholder="Photo URL"
              {...register("photo", { required: true })}
            />
            <textarea
              className="col-span-2 p-5"
              placeholder="Write your Toy's Description"
              {...register("description", { required: true })}
              cols="30"
              rows="5"></textarea>
          </div>
          <input
            className="btn btn-block bg-green-500 mt-8"
            type="submit"
            value="Add A New Toy"
          />
        </form>
      </div>
    </div>
  );
};

export default AddToy;
