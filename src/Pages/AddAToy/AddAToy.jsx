import { useForm } from "react-hook-form";
import Banner from "../../Shared/Banner";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(null);
  const [ratedColor, setRatedColor] = useState(null);

  useTitle("Add a Toy");

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    const floatValue = parseFloat(formData.price);
    formData.price = floatValue;
    console.log(formData);
    fetch("https://assignment-11-toy-land-bd-m-73-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Your toy's data submitted successfully!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <Banner>Add a Toy</Banner>
      <p className="text-center text-2xl font-bold mt-10 mb-4 text-red-800 bg-orange-200 p-2 rounded-md shadow-md">
        Submit your toy's details
      </p>
      <div className="card  w-full shadow-2xl bg-base-200 border-2 border-orange-400">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body -mb-6">
          {/* Toy Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Toy's Name</span>
            </label>
            <input
              {...register("toyName", {
                required: true,
              })}
              type="text"
              placeholder="Toy's Name"
              className="input input-bordered"
            />
            {errors.toyName && (
              <p className="text-red-600 mt-1">Please check the toy name.</p>
            )}
          </div>

          {/* Toy image url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Toy image URL</span>
            </label>
            <input
              {...register("url", { required: true })}
              type="url"
              placeholder="Toy Image Url"
              className="input input-bordered"
            />
            {errors.url && (
              <p className="text-red-600 mt-1">Please check the toy image.</p>
            )}
          </div>

          {/* Seller Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold"> Seller Name</span>
            </label>
            <input
              {...register("sellerName", {
                required: true,
              })}
              type="text"
              placeholder="Seller Name"
              className="input input-bordered"
              defaultValue={user?.displayName}
            />
            {errors.sellerName && (
              <p className="text-red-600 mt-1">Please check the Seller Name.</p>
            )}
          </div>

          {/* Seller Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Seller Email</span>
            </label>
            <input
              {...register("postedBy", {
                required: true,
              })}
              type="email"
              placeholder="email"
              className="input input-bordered"
              defaultValue={user.email}
            />
            {errors.postedBy && (
              <p className="text-red-600 mt-1">Please check the Email.</p>
            )}
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Toy Category</span>
            </label>

            <select
              className="select select-bordered"
              {...register("category")}
            >
              <option value="Action Figures">Action Figures</option>
              <option value="Building Toys">Building Toys</option>
              <option value="writer">Plush Toys</option>
            </select>
            {errors.category && (
              <p className="text-red-600 mt-1">Please check the Email.</p>
            )}
          </div>

          {/* price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Toy Price ($)</span>
            </label>
            <input
              {...register("price", {
                required: true,
              })}
              type="number"
              placeholder="toy price"
              className="input input-bordered"
            />
            {errors.price && (
              <p className="text-red-600 mt-1">Please check the quantity.</p>
            )}
          </div>

          {/* Rating */}
          <div className="form-control ">
            <label className="label">
              {/* <span className="label-text font-bold">Rating</span> */}
            </label>
            <div className="flex items-center">
              <span className="text-md mr-2 font-semibold">
                {" "}
                Rating: {rating}
              </span>

              {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <label key={index}>
                    <input
                      className="hidden"
                      {...register("rating", {
                        required: true,
                      })}
                      type="radio"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                    />
                    <FaStar
                      className="cursor-pointer"
                      size={20}
                      color={
                        currentRating <= (ratedColor || rating)
                          ? "orange"
                          : "gray"
                      }
                      onMouseEnter={() => setRatedColor(currentRating)}
                      onMouseLeave={() => setRatedColor(null)}
                    />
                  </label>
                );
              })}
            </div>
            {errors.rating && (
              <p className="text-red-600 mt-1">Please check the Rating.</p>
            )}
          </div>

          {/* quantity */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Toy's available quantity
              </span>
            </label>
            <input
              {...register("quantity", {
                required: true,
              })}
              type="number"
              placeholder="available quantity"
              className="input input-bordered"
            />
            {errors.quantity && (
              <p className="text-red-600 mt-1">Please check the quantity.</p>
            )}
          </div>

          {/* Item Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Toy's Details</span>
            </label>
            <textarea
              {...register("description", {
                required: true,
              })}
              type="text"
              placeholder="description"
              className="textarea"
            />
            {errors.description && (
              <p className="text-red-600 mt-1">Please check the description.</p>
            )}
          </div>

          <span className="text-warning text-center"></span>
          <div className="form-control">
            <button className="btn btn-warning text-lg mb-6 mt-2">
              Submit
            </button>
          </div>

          {/* <span className="text-success text-center"> success</span> */}
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
