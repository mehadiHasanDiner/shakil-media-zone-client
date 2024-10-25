import { useLoaderData, useNavigate } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const goBack = useNavigate();
  //   console.log(toy);

  const handleGoBack = () => {
    goBack(-1);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={toy?.image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{toy?.name}</h1>
          <p className="py-6">Price: ${toy?.price}</p>
          <p className="pb-4">Description: ${toy?.description}</p>
          <button onClick={handleGoBack} className="btn btn-warning">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
