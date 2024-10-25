import { useLoaderData } from "react-router-dom";
import Banner from "../../Shared/Banner";
import AllToysRow from "./AllToysRow";
import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [toysData, setToysData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [loading, setLoading] = useState(true);

  const { totalItems } = useLoaderData();

  useTitle("All Toys");

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [...Array(totalPages).keys()];

  const options = [5, 10, 15, 20, 30];
  const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };

  // useEffect(() => {
  //   fetch("https://assignment-11-toy-land-bd-m-73-server.vercel.app/toys")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setToysData(data);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://assignment-11-toy-land-bd-m-73-server.vercel.app/toys?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      setToysData(data);
    }
    fetchData();
    setLoading(false);
  }, [currentPage, itemsPerPage]);

  const handleSearch = () => {
    fetch(
      `https://assignment-11-toy-land-bd-m-73-server.vercel.app/toysTitle/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  };

  return (
    <div>
      {loading ? (
        <>
          <p className="text-center">
            <span className="loading loading-bars loading-lg"></span>
          </p>
        </>
      ) : (
        <>
          <Banner>All Toy Page</Banner>

          <div className="mt-3 text-center">
            <input
              className="input input-bordered input-error  w-full max-w-xs"
              type="text"
              placeholder="search by toy name"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={handleSearch} className="btn btn-error ml-1">
              Search
            </button>
          </div>

          <div className="overflow-x-auto mt-6 border-2 rounded-lg">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-base-200">
                  <th>SL</th>
                  <th>Toy's Details</th>
                  <th>Seller Name & Email</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {toysData.map((toyData, index) => (
                  <AllToysRow
                    key={toyData._id}
                    toyData={toyData}
                    index={index}
                  ></AllToysRow>
                ))}
                {/* row 1 */}
              </tbody>
            </table>
          </div>

          {/* pagination */}
          <div className="mt-4 text-center">
            {pageNumbers.map((number) => (
              <button
                className={
                  currentPage === number
                    ? "btn btn-neutral m-[1px]"
                    : "btn btn-outline m-[1px]"
                }
                key={number}
                onClick={() => setCurrentPage(number)}
              >
                {number + 1}
              </button>
            ))}
            <select
              className="select select-bordered ml-2"
              value={itemsPerPage}
              onChange={handleSelectChange}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {" "}
                  {option}{" "}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default AllToys;
