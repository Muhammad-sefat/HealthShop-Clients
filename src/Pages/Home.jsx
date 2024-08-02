import React from "react";
import Slider from "./Slider";
import MedicineCategory from "./MedicineCategory";
import Testimonial from "./Testimonial";
import DiscountProduct from "./DiscountProduct";
import ContactPage from "./ContactPage";

const Home = () => {
  return (
    <div className="md:px-10 mx-auto">
      <Slider />
      <MedicineCategory />
      <DiscountProduct />
      <Testimonial />
      <ContactPage />
    </div>
  );
};

export default Home;
