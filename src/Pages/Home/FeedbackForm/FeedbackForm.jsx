import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Slider from "react-slick";
import "./FeedbackSlider.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeedbackForm = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch("https://assignment-11-toy-land-bd-m-73-server.vercel.app/feedbacks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeedbacks(data);
      });
  }, [load]);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (formData) => {
    fetch(
      "https://assignment-11-toy-land-bd-m-73-server.vercel.app/feedbacks",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setLoad(!load);
          Swal.fire({
            title: "Good job!",
            text: "Your toy's data submitted successfully!",
            icon: "success",
          });
        }
      });
    reset();
  };

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <>
      <div data-aos="flip-left" className="mt-24">
        <h2 className="text-center font-bold text-2xl text-pink-600 mb-4">
          {" "}
          Our Customer Valuable Feedbacks
        </h2>
        <Slider {...settings} className="w-3/4 mx-auto slick pl-6 pr-6">
          {feedbacks.map((feedback) => (
            <div className=" text-center w-3" key={feedback?._id}>
              <img
                className="w-32 mx-auto mb-2"
                src={
                  feedback?.url
                    ? feedback?.url
                    : "https://i.ibb.co/mH1ZxWq/user.png"
                }
              />
              <p className="italic">{feedback?.feedback}</p>
              <div className="divide-yellow-400 divide-y-2">
                <p className="mb-3"></p>
                <p className="font-bold">{feedback?.name}</p>
              </div>
              <p>{feedback?.profession}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-24 bg-base-100" data-aos="zoom-in">
        <h1 className="text-2xl text-center font-bold mb-6 text-pink-600">
          Give your Valuable Feedback
        </h1>
        <div className="toyCard-container items-center">
          <div>
            <img
              className=""
              src="https://fluencyfirst93830951.files.wordpress.com/2021/11/your-feedback-matters-placard-with-bokeh-background.jpeg?w=1000"
              alt=""
            />
          </div>
          <div className="text-center ">
            <div className="card  w-3/4 mx-auto shadow-2xl bg-white">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body -mb-2 pt-2"
              >
                {/*  Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Your Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <p className="text-red-600 mt-1">Please check your name.</p>
                  )}
                </div>

                {/* image url */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Your Photo URL</span>
                  </label>
                  <input
                    {...register("url", { required: false })}
                    type="photoUrl"
                    placeholder="Your Photo Url"
                    className="input input-bordered"
                  />
                  {/* {errors.url && (
                    <p className="text-red-600 mt-1">
                      Please check the toy image.
                    </p>
                  )} */}
                </div>

                {/* Category */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Profession</span>
                  </label>

                  <select
                    className="select select-bordered"
                    {...register("profession")}
                  >
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Banker">Banker</option>
                    <option value="Govt. Service">Govt. Service</option>
                    <option value="Pvt. Service">Pvt. Service</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.profession && (
                    <p className="text-red-600 mt-1">Please check the Email.</p>
                  )}
                </div>

                {/* Feedback */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Your Feedback</span>
                  </label>
                  <textarea
                    {...register("feedback", {
                      required: true,
                    })}
                    type="text"
                    placeholder="feedback"
                    className="textarea  textarea-bordered"
                  />
                  {errors.feedback && (
                    <p className="text-red-600 mt-1">
                      Please check the feedback.
                    </p>
                  )}
                </div>

                <span className="text-warning text-center"></span>
                <div className="form-control">
                  <button className="btn btn-success">Submit</button>
                </div>

                {/* <span className="text-success text-center"> success</span> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
