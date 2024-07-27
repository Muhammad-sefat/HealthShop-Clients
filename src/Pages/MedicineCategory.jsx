import React from "react";
import datas from "../assets/data.json";
import SingleMedicineCard from "./SingleMedicineCard";

const MedicineCategory = () => {
  return (
    <div className="my-8">
      <p className="text-2xl md:text-4xl font-semibold text-blue-600 my-5 text-center">
        All Medicine Category Here
      </p>
      <div className="p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas.map((data, index) => (
          <SingleMedicineCard key={index} medicine={data}></SingleMedicineCard>
        ))}
      </div>
      <div className="text-center my-3">
        <button className="btn bg-blue-600 text-white">See More</button>
      </div>
    </div>
  );
};

export default MedicineCategory;
