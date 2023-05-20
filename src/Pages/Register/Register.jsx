import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContest } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const Register = () => {
  useTitle(register);
  const { signUpUser, profileUpdate } = useContext(AuthContest);
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError("");
    console.log(data);
    if (data.password.length < 6) {
      setError("Password at leaset 6 carecter");
      return;
    }
    signUpUser(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        profileUpdate(user, data?.name, data?.photo);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
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
