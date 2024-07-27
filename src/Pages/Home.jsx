import React from "react";
import Slider from "./Slider";
import MedicineCategory from "./MedicineCategory";

const Home = () => {
  return (
    <div className="md:px-10 mx-auto">
      <Slider />
      <MedicineCategory />
    </div>
  );
};

export default Home;
