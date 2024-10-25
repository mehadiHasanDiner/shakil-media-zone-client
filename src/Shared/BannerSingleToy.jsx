import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";

const BannerSingleToy = ({ children }) => {
  return (
    <div className="mt-2">
      <div className="bg-white border-1 rounded  ">
        <div className="mx-16 h-28 md:h-48 lg:h-72 flex justify-center items-center relative">
          <div className="-mt-8">
            <h2 className="text-center font-bold text-xl md:text-2xl pt-4">
              {children}
            </h2>
          </div>
          <img
            className="absolute -left-16 bottom-0 w-28 md:w-48 lg:w-72 "
            src={bg1}
            alt=""
          />
          <img
            className="absolute -right-12 w-28 md:w-56 lg:w-80"
            src={bg2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSingleToy;
