import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContest } from "../../Provider/AuthProvider";

const Login = () => {
  const { LogIn } = useContext(AuthContest);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    LogIn(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <input
              className="btn btn-block bg-green-500 mt-8"
              type="submit"
              value="Login"
            />
          </form>
          <div className="divider">OR</div>
          <div className="w-14 mx-auto h-14 flex items-center justify-center bg-white rounded-full border-2 border-green-500">
            <FcGoogle className="text-3xl text-center "></FcGoogle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
