import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { FaEye } from "react-icons/fa6";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import useCartCount from "../Hooks/useCartContent";

const SpecificCategoryCard = () => {
  const { user } = useAuth();
  const { refetch } = useCartCount();
  const { category } = useParams();
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get(`/medicines/${category}`);
      setMedicines(data);
    };
    getData();
  }, []);

  const handleSelectClick = async (medicine) => {
    try {
      const productWithUserEmail = { ...medicine, email: user.email };
      await axiosPublic.put("/add-to-cart", productWithUserEmail);
      refetch();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Product added to cart!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Product already in cart
        Swal.fire({
          position: "top-center",
          icon: "warning",
          title: "Product already in cart!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        toast(error.message);
      }
    }
  };

  const handleEyeClick = (medicine) => {
    setSelectedMedicine(medicine);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedicine(null);
  };
  return (
    <div className="md:px-8 mx-auto mb-5">
      <p className="text-4xl font-medium mb-6">Similar Medicine Here</p>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
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
                    <Link to={"#"} onClick={() => handleSelectClick(medicine)}>
                      Select
                    </Link>
                  </th>
                  <td className="text-center text-2xl">
                    <FaEye onClick={() => handleEyeClick(medicine)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && selectedMedicine && (
        <Modal medicine={selectedMedicine} closeModal={closeModal} />
      )}
    </div>
  );
};
export default SpecificCategoryCard;
