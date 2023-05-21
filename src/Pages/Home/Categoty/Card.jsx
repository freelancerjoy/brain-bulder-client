import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContest } from "../../../Provider/AuthProvider";

const Card = ({ toy }) => {
  const { user } = useContext(AuthContest);
  const {
    _id,
    name,
    Seller,
    email,
    subCategory,
    rating,
    price,
    quantity,
    photo,
    description,
  } = toy;

  const notify = () => {
    if (!user) {
      Swal.fire({
        title: "Please login",
        text: "You Can See Afeter Login",
        icon: "info",
        confirmButtonText: "ok",
      });
    }
  };

  return (
    <div className="">
      <div className="card card-compact border-green-100 border-4 h-96 bg-base-100 shadow-xl">
        <figure className="">
          <img className="w-full pt-5" src={photo} alt="Shoes" />
        </figure>
        <div className="flex text-left justify-between items-end px-4 py-6">
          <div>
            <h2 className="card-title font-bold">{name}</h2>
            <p>
              <span className="font-bold">Price</span> {price}
            </p>
            <p>
              <Rating style={{ maxWidth: 140 }} value={rating} readOnly />
            </p>
          </div>
          <div className="card-actions justify-end ">
            <Link
              onClick={notify}
              className="btn btn-primary border-0 bg-green-500 rounded-full"
              to={`/toy/${_id}`}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
