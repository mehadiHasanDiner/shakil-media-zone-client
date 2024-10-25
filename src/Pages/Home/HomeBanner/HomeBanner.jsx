import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="mb-12" data-aos="fade-left">
      <Swiper
        className="relative group"
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-prev-slide",
          prevEl: ".button-next-slide",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          {/* slide-1 */}
          <div className="relative w-full">
            <img
              className="rounded-xl"
              src="https://i.ibb.co/0Yy0Sv0/Slider-2.jpg"
              alt=""
            />

            <div className="absolute rounded-xl flex items-center text-center h-full left-0 top-0 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
              <div className="text-white md:space-y-6 mx-auto pl-20">
                <h2 className="text-xl md:text-5xl font-bold ">
                  {" "}
                  Buy Toy in Affordable Price
                </h2>
                <p className="md:text-base text-sm">
                  There are my types of toys you can buy. Lorem ipsum dolor
                </p>
                <button className="btn btn-error mr-3 btn-sm">
                  Discover All toys
                </button>
                <button className="btn btn-outline btn-error btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* slide-2 */}
          <div className="relative w-full">
            <img
              className="rounded-xl"
              src="https://i.ibb.co/HzLbsDY/Slider-1.jpg"
              alt=""
            />
            <div className="absolute rounded-xl flex items-center text-center h-full left-0 top-0 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
              <div className="text-white md:space-y-6 mx-auto pl-20">
                <h2 className="text-xl md:text-5xl font-bold ">
                  {" "}
                  Sell you Toys
                </h2>
                <p className="md:text-base text-sm">
                  There are my types of toys you can buy. Lorem ipsum dolor
                </p>
                <button className="btn btn-error mr-3 btn-sm">
                  Discover All toys
                </button>
                <button className="btn btn-outline btn-error btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* slide-3 */}
          <div className="relative w-full">
            <img
              className="rounded-xl"
              src="https://i.ibb.co/tPKbFVX/Slider-3.jpg"
              alt=""
            />
            <div className="absolute rounded-xl flex items-center text-center h-full left-0 top-0 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
              <div className="text-white md:space-y-6 mx-auto pl-20">
                <h2 className="text-xl md:text-5xl font-bold ">
                  {" "}
                  Give Ad without Cost
                </h2>
                <p className="md:text-base text-sm">
                  There are my types of toys you can buy. Lorem ipsum dolor
                </p>
                <button className="btn btn-error mr-3 btn-sm">
                  Discover All toys
                </button>
                <button className="btn btn-outline btn-error btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* slide-4 */}
          <div className="relative w-full">
            <img
              className="rounded-xl"
              src="https://i.ibb.co/H7fqDNt/slider-4.jpg"
              alt=""
            />
            <div className="absolute rounded-xl flex items-center text-center h-full left-0 top-0 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
              <div className="text-white md:space-y-6 mx-auto pl-20">
                <h2 className="text-xl md:text-5xl font-bold ">
                  {" "}
                  Store you Toy's Data
                </h2>
                <p className="md:text-base text-sm">
                  There are my types of toys you can buy. Lorem ipsum dolor
                </p>
                <button className="btn btn-error mr-3 btn-sm">
                  Discover All toys
                </button>
                <button className="btn btn-outline btn-error btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* slide-5 */}
          <div className="relative w-full">
            <img
              className="rounded-xl"
              src="https://i.ibb.co/7b1NyCS/slider-5.jpg"
              alt=""
            />
            <div className="absolute rounded-xl flex items-center text-center h-full left-0 top-0 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] w-full">
              <div className="text-white md:space-y-6 mx-auto pl-20">
                <h2 className="text-xl md:text-5xl font-bold ">
                  {" "}
                  Mark our Site
                </h2>
                <p className="md:text-base text-sm">
                  There are my types of toys you can buy. Lorem ipsum dolor
                </p>
                <button className="btn btn-error mr-3 btn-sm">
                  Discover All toys
                </button>
                <button className="btn btn-outline btn-error btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="md:top-[40%] top-[40%] absolute z-10 button-next-slide group-hover:left-0 -left-[24rem] duration-500 text-black w-[50px] h-[40px] bg-warning grid place-items-center ">
          <FaArrowAltCircleLeft />
        </div>

        <div className="md:top-[40%] top-[40%]  absolute z-10 button-prev-slide group-hover:right-0 -right-[24rem] duration-500 text-black w-[50px] h-[40px] bg-warning grid place-items-center">
          <FaArrowAltCircleRight />
        </div>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
