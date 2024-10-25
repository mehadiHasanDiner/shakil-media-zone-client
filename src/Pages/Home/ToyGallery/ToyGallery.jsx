import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const ToyGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-toy-land-bd-m-73-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="my-20" data-aos="flip-up">
        <p className="text-center font-bold text-2xl text-pink-600 mb-4">
          Our Latest Toys Photo Gallery
        </p>
        <Slider {...settings}>
          {toys.map((toy) => (
            <div key={toy._id} className="card w-full shadow-xl relative">
              <figure>
                <img className="h-72" src={toy?.url} alt="" />
              </figure>
              <div className="">
                <div className=" hover:bg-black hover:w-full h-full hover:opacity-40 hover:text-white absolute -top-60 hover:top-0">
                  <p className="text-lg italic text-center ">{toy?.toyName}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ToyGallery;
