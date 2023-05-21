import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContest } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {
  useTitle("register");
  const { signUpUser, profileUpdate } = useContext(AuthContest);
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Register form action function
  const onSubmit = (data) => {
    setError("");
    reset();
    console.log(data);
    if (data.password.length < 6) {
      setError("Password at leaset 6 carecter");
      return;
    }
    // sign up user function
    signUpUser(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        profileUpdate(user, data?.name, data?.photo);
        Swal.fire({
          title: "Registation Succesful",
          text: "Thank for registration",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="bg-slate-100 py-10">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-5 w-11/12 mx-auto ">
        <div>
          <img
            src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?w=740&t=st=1684672999~exp=1684673599~hmac=082e9ea1c59416d6589d2f11b549c4dd0d26d22f6dd42d26115e83e88a1fc4fd"
            alt="Registe images"
          />
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4 mt-5">
              <h1 className="font-bold text-3xl my-4">Please Register</h1>
              <input
                className="bg-white p-3 border-2"
                placeholder="Write Your Name"
                {...register("name")}
              />
              <input
                className="bg-white p-3 border-2"
                placeholder="Write Your Email"
                {...register("email", { required: true })}
              />
              <input
                className="bg-white p-3 border-2"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <input
                className="bg-white p-3 border-2"
                type="url"
                placeholder="Photo URL"
                {...register("photo", { required: true })}
              />
              <p className="p-3">
                If you have na Account{" "}
                <Link className="text-blue-600 underline" to="/login">
                  Please Login
                </Link>
              </p>
              <p className="text-red-500">{error}</p>
            </div>
            <input
              className="btn btn-block bg-green-500 mt-8"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
