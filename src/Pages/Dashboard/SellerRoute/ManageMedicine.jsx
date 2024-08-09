import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const ManageMedicine = () => {
  const [medicines, setMedicines] = useState([]);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axiosPublic.get(
          `/api/medicines?email=${user.email}`
        );
        setMedicines(response.data);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    fetchMedicines();
  }, []);
  return (
    <div>
      <p className="text-2xl md:text-5xl font-medium mb-5">
        You All Add Medicine
      </p>
      <div className="flex justify-start px-24 mb-5">
        <Link
          to={"/add-medicine"}
          className="border border-blue-500 p-2 rounded-md font-semibold"
        >
          Add Medicine
        </Link>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="font-medium text-base">
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
                <th>Category</th>
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
                  <td>{medicine.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMedicine;
