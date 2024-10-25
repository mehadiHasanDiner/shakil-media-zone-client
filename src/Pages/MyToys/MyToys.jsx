import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyRow from "./MyToyRow";
import BannerSingleToy from "../../Shared/BannerSingleToy";
import useTitle from "../../hooks/useTitle";
import { BiDownArrowCircle, BiUpArrowCircle } from "react-icons/bi";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(true);

  useTitle("My Toys");

  useEffect(() => {
    fetch(
      `https://assignment-11-toy-land-bd-m-73-server.vercel.app/myToys/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyToys(data);
      });
    setLoading(false);
  }, [user, load]);

  let sortedLowPrice = [];
  let sortedHighPrice = [];

  const sortByLowPrice = () => {
    myToys.sort((a, b) => {
      return a.price - b.price;
    });
    sortedLowPrice = [...myToys];
    setMyToys(sortedLowPrice);
  };

  const sortByHighPrice = () => {
    myToys.sort((a, b) => {
      return b.price - a.price;
    });
    sortedHighPrice = [...myToys];
    setMyToys(sortedHighPrice);
  };

  return (
    <>
      <BannerSingleToy>My Toys</BannerSingleToy>
      {loading ? (
        <>
          <p>
            <span className="loading loading-bars loading-lg"></span>
          </p>
        </>
      ) : (
        <>
          <div className="mt-6 -mb-3 text-end">
            <button onClick={sortByLowPrice} className="btn btn-success">
              <BiDownArrowCircle />
              Sort By Low Price
            </button>
            <button onClick={sortByHighPrice} className="btn btn-warning ml-1">
              <BiUpArrowCircle />
              Sort By High Price
            </button>
          </div>
          <div className="overflow-x-auto mt-6 border-2 rounded-lg">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-orange-200">
                  <th>SL</th>
                  <th>Toy's Details</th>
                  <th>Seller Name & Email</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="bg-base-100">
                {myToys?.map((toy, index) => (
                  <MyToyRow
                    toy={toy}
                    index={index}
                    key={toy._id}
                    load={load}
                    setLoad={setLoad}
                  ></MyToyRow>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default MyToys;
