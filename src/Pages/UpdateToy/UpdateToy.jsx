import React from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";

const UpdateToy = () => {
  useTitle("Update Toy");
  const updateToy = useLoaderData();
  const {
    _id,
    name,
    Seller,
    subCategory,
    price,
    quantity,
    photo,
    description,
  } = updateToy;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch(`https://brain-bulders-server.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount == 1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update Succefully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="bg-slate-200 py-10">
      <div className="w-11/12 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <input
              defaultValue={price}
              className="bg-white p-3"
              placeholder="Price"
              {...register("price", { required: true })}
            />

            <input
              defaultValue={quantity}
              className="bg-white p-3"
              type="number"
              placeholder="Available Quantity"
              {...register("quantity", { required: true })}
            />
            <textarea
              defaultValue={description}
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

export default UpdateToy;
