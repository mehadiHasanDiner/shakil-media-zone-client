import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [toysTab, setToysTab] = useState(["tab1"]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch("https://assignment-11-toy-land-bd-m-73-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const actionToys = categories.filter((c) => c.category === "Action Figures");
  const buildingToys = categories.filter(
    (action) => action.category === "Building Toys"
  );
  const plushToys = categories.filter((c) => c.category === "Plush Toys");

  const activeTab = (activeTab) => {
    setToysTab(activeTab);
  };

  const allCategories =
    toysTab == "tab1"
      ? actionToys
      : toysTab == "tab2"
      ? buildingToys
      : toysTab == "tab3"
      ? plushToys
      : "";
  // console.log(allCategories);

  return (
    <div data-aos="fade-right" className="mt-12">
      <p className="text-center font-bold text-2xl mb-4 text-pink-600">
        Our All Products Based on Three Categories
      </p>
      <div
        role="tablist"
        className="tabs  tabs-lifted tabs-lg bg-orange-400 relative z-20 rounded-t-xl "
      >
        <div
          onClick={() => activeTab("tab1")}
          role="tab"
          className={
            toysTab == "tab1"
              ? "tab tab-active  text-orange-400 font-bold"
              : "tab "
          }
        >
          Action Figures
          <div></div>
        </div>
        <div
          onClick={() => activeTab("tab2")}
          role="tab"
          className={
            toysTab == "tab2"
              ? "tab tab-active  text-orange-400 font-bold"
              : "tab"
          }
        >
          Building Toys
        </div>
        <div
          onClick={() => activeTab("tab3")}
          role="tab"
          className={
            toysTab == "tab3"
              ? "tab tab-active  text-orange-400 font-bold"
              : "tab "
          }
        >
          Plush Toys
        </div>
      </div>

      <div className="toy-container  bg-orange-400 p-4 rounded-lg relative -top-3">
        {allCategories.map((categories) => (
          <CategoryCard
            key={categories._id}
            categories={categories}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
