import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContest } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";

const Login = () => {
  useTitle("login");
  const { LogIn, googleLogin } = useContext(AuthContest);
  const [error, setError] = useState();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError("");
    LogIn(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Loign Succes",
          text: "Welcome, To Your Account",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Loign Succes",
          text: "Welcome, To Your Account",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(from);
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="bg-slate-100 py-10">
      <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto ">
        <div>
          <img
            src="https://img.freepik.com/premium-vector/registration-online-concept_23-2147987277.jpg?w=740"
            alt=""
          />
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4 mt-5">
              <h1 className="font-bold text-3xl my-4">Please Register</h1>

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
            </div>
            <p className="p-3">
              If you are New to{" "}
              <Link className="text-blue-600 underline" to="/register">
                Please Register
              </Link>
            </p>
            <p className="text-red-500">{error}</p>
            <input
              className="btn btn-block bg-green-500 mt-8"
              type="submit"
              value="Login"
            />
          </form>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="w-14 mx-auto h-14 flex items-center justify-center bg-white rounded-full border-2 border-green-500">
            <FcGoogle className="text-3xl text-center "></FcGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
