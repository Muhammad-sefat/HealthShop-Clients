import React, { useEffect, useState } from "react";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import Modal from "./Modal";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useCartCount from "../Hooks/useCartContent";

const Shop = () => {
  const { user } = useAuth();
  const { refetch } = useCartCount();
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const getData = async () => {
    const { data } = await axiosPublic.get("/allmedicine", {
      params: {
        sort: sortOrder,
        search: searchTerm,
      },
    });
    setMedicines(data);
  };

  useEffect(() => {
    getData();
  }, [searchTerm, sortOrder]);

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
      <p className="text-3xl md:text-5xl font-medium mb-6">All Medicine Here</p>
      <div className="flex justify-between items-center my-5 px-10">
        <select
          className="border p-2 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        <input
          className="border p-2 rounded w-[40%]"
          type="text"
          placeholder="Search Here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
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
                    <Link to="#" onClick={() => handleSelectClick(medicine)}>
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

export default Shop;
