import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";
import { useState } from "react";

const MyToyRow = ({ toy, index, load, setLoad }) => {
  const {
    _id,
    sellerName,
    toyName,
    price,
    quantity,
    postedBy,
    url,
    category,
    rating,
  } = toy || {};

  const handleDeleteToy = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-toy-land-bd-m-73-server.vercel.app/updateToy/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            setLoad(!load);
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-16 h-28">
              <img src={url} alt={toyName} />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
            <div className="text-sm opacity-50">Quantity: {quantity}</div>
            <div className="flex">
              <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
              <span className="ml-2">{rating}</span>
            </div>
          </div>
        </div>
      </td>
      <td>
        {sellerName}
        <br />
        <span className="badge badge-ghost badge-sm">{postedBy}</span>
      </td>
      <td>{category}</td>
      <td>${price}</td>
      <th>
        <Link
          to={`/updateToy/${toy?._id}`}
          htmlFor="my_modal_6"
          className="btn btn-sm bg-green-400"
        >
          <FaEdit />
        </Link>

        <button
          onClick={() => handleDeleteToy(_id)}
          className="btn btn-sm bg-orange-500"
        >
          <MdDeleteOutline />
        </button>
      </th>
    </tr>
  );
};

export default MyToyRow;
