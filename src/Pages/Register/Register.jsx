import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContest } from "../../Provider/AuthProvider";

const Register = () => {
  const { signUpUser } = useContext(AuthContest);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signUpUser(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto">
      <div>
        <img src="" alt="" />
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
          </div>
          <input
            className="btn btn-block bg-green-500 mt-8"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
