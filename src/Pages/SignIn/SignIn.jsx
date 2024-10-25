import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const SignIn = () => {
  const { signedInUser, createUserByGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  useTitle("Sign In");

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    signedInUser(formData?.email, formData?.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    createUserByGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
    navigate(from, { replace: true });
  };

  return (
    <div className="-mt-8 bg">
      <h1 className="text-5xl font-bold text-center">Please Sign In</h1>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left "></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body -mb-6">
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
                <p className="text-red-600 mt-1">Field must not be empty.</p>
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
                <p className="text-red-600 mt-1">Field must not be empty.</p>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <span className="text-warning text-center"></span>
            <div className="form-control">
              <button className="btn btn-active capitalize text-lg">
                Sign in
              </button>
            </div>

            <label className="label">
              <span>
                New to Toy Land BD?
                <Link
                  to="/signUp"
                  className="text-center label-text-alt link link-hover hover:font-bold text-lg text-pink-600"
                >
                  {" "}
                  Sign Up!
                </Link>
              </span>
            </label>
          </form>
          <div className="text-center mb-2 form-control px-8 pb-5">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-neutral capitalize text-md"
            >
              <FcGoogle className="text-2xl" /> Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
