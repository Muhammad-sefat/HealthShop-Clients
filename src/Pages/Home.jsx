import React from "react";
import Slider from "./Slider";
import MedicineCategory from "./MedicineCategory";
import Testimonial from "./Testimonial";
import DiscountProduct from "./DiscountProduct";

const Home = () => {
  return (
    <div className="md:px-10 mx-auto">
      <Slider />
      <MedicineCategory />
      <DiscountProduct />
      <Testimonial />
    </div>
  );
};

export default Home;
