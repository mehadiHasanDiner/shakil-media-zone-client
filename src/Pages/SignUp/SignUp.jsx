import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
  const { createUser, updatedUser } = useContext(AuthContext);
  useTitle("Sign Up");

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    createUser(formData?.email, formData?.password)
      .then((result) => {
        const loggedUser = result.user;
        updatedUser(loggedUser, {
          displayName: formData.name,
          photoURL: formData.url,
        }).then(() => {
          console.log("profile updated successfully");
        }).catch;
      })
      .catch((error) => {
        // setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="-mt-8 bg">
      <h1 className="text-5xl font-bold text-center">Please Sign Up</h1>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left "></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body -mb-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: true,
                })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-600 mt-1">Please check the Name.</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-600 mt-1">Please check the Email.</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-600 mt-1">Please check the Password.</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                {...register("url", { required: true })}
                type="url"
                placeholder="Photo Url"
                className="input input-bordered"
              />
              {/* {errors.password && (
                <p className="text-red-600 mt-1">Please check the Password.</p>
              )}             */}
            </div>
            <span className="text-warning text-center"></span>
            <div className="form-control">
              <button className="btn btn-active capitalize text-lg">
                Sign Up
              </button>
            </div>
            {/* <span className="text-success text-center"> success</span> */}

            <label className="label">
              <span>
                Already have an account?
                <Link
                  to="/signIn"
                  className="text-center label-text-alt link link-hover hover:font-bold text-lg text-pink-700"
                >
                  {" "}
                  Sign In!
                </Link>
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
