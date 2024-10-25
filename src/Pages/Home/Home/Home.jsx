import Categories from "../ToysCategory/Categories";
import HomeBanner from "../HomeBanner/HomeBanner";
import ToyGallery from "../ToyGallery/ToyGallery";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <HomeBanner></HomeBanner>
      <ToyGallery></ToyGallery>
      <Categories></Categories>
      {/* <FeedbackSlider></FeedbackSlider> */}
      <FeedbackForm></FeedbackForm>
    </div>
  );
};

export default Home;
