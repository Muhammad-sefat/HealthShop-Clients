import React from "react";
import Slider from "./Slider";
import MedicineCategory from "./MedicineCategory";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="md:px-10 mx-auto">
      <Slider />
      <MedicineCategory />
      <Testimonial />
    </div>
  );
};

export default Home;
