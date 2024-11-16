import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Shared/Banner";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { useState } from "react";

const UpdateMyToy = () => {
  const [imgFile, setImgFile] = useState(null);
  const updatedToy = useLoaderData();
  const { toyName, description, price, quantity, url, _id } = updatedToy || {};

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  useTitle(toyName);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImgFile(selectedFile);
  };

  const onSubmit = (formData) => {
    fetch(`${import.meta.env.VITE_URL_KEY}/updateToy/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Your have successfully updated the data!",
            icon: "success",
          });
        }
      });
    console.log(formData);
  };

  return (
    <>
      <div>
        <Banner>Update Toy</Banner>
        <p className="text-center text-2xl font-bold mt-10 mb-4 text-red-800 bg-orange-200 p-2 rounded-md shadow-md">
          {" "}
          Submit your updated toy's details{" "}
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
                defaultValue={toyName}
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
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                onChange={handleFileChange}
              />

              {imgFile ? (
                <img
                  src={URL.createObjectURL(imgFile)}
                  alt="Preview"
                  style={{ width: "100px", height: "100px" }}
                />
              ) : (
                ""
              )}

              {errors.url && (
                <p className="text-red-600 mt-1">Please check the toy image.</p>
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
                defaultValue={price}
                className="input input-bordered"
              />
              {errors.price && (
                <p className="text-red-600 mt-1">Please check the quantity.</p>
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
                defaultValue={quantity}
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
                defaultValue={description}
                className="textarea"
              />
              {errors.description && (
                <p className="text-red-600 mt-1">
                  Please check the description.
                </p>
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
    </>
  );
};

export default UpdateMyToy;
