import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ toyData, index }) => {
    // let i = 0;
  const { sellerName, toyName, category, price, quantity, postedBy, url, _id } =
    toyData || {};

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-16 h-16">
                <img src={url} alt={toyName} />
              </div>
            </div>
            <div>
              <div className="font-bold">{toyName}</div>
              <div className="text-sm opacity-50">Quantity: {quantity}</div>
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
          <Link to={`/toys/${_id}`}>
            <button className="btn btn-xs">Details</button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default AllToysRow;