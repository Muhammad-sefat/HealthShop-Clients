import React, { useEffect, useState } from "react";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Shop = () => {
  const [medicines, setMedicines] = useState([]);
  console.log(medicines);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get("/allmedicine");
      setMedicines(data);
    };
    getData();
  }, []);
  return (
    <div className="md:px-8 mx-auto">
      <p className="text-4xl font-medium mb-6">All Medicine Here</p>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Company</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine, index) => (
                <tr key={index}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={medicine.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{medicine.name}</td>
                  <td>${medicine.price}</td>
                  <td>{medicine.company}</td>
                  <th>
                    <Link>Select</Link>
                  </th>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Shop;
