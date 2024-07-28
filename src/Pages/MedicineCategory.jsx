import React, { useEffect, useState } from "react";

import SingleMedicineCard from "./SingleMedicineCard";
import { axiosPublic } from "../Hooks/useAxiosPublic";

const MedicineCategory = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get("/allcategory");
      setMedicines(data);
    };
    getData();
  }, []);

  return (
    <div className="my-8">
      <p className="text-2xl md:text-4xl font-semibold text-blue-600 my-5 text-center">
        All Medicine Category Here
      </p>
      <div className="p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicines.map((data, index) => (
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
