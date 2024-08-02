import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UpdateMedicineModal from "../../UpdateMedicineModal";
import { axiosPublic } from "../../../Hooks/useAxiosPublic";

const ManageCategory = () => {
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get("/allmedicine");
      setMedicines(data);
    };
    getData();
  }, []);

  const handleOpenModal = (medicine) => {
    setSelectedMedicine(medicine);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMedicine(null);
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await axiosPublic.put(`/medicine/${id}`, updatedData);
      setMedicines((prevMedicines) =>
        prevMedicines.map((medicine) =>
          medicine._id === id ? { ...medicine, ...updatedData } : medicine
        )
      );
      Swal.fire("Updated!", "Medicine has been updated.", "success");
    } catch (error) {
      console.error("Error updating medicine:", error);
      Swal.fire("Error", "Failed to update medicine.", "error");
    }
  };

  return (
    <div>
      <p className="text-2xl md:text-4xl font-medium mb-6">All Medicine Here</p>
      <div className="flex justify-end px-5">
        <p className="border border-blue-500 p-2 rounded-md font-semibold">
          Add Medicine
        </p>
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
                    <Link to="#" onClick={() => handleOpenModal(medicine)}>
                      Update
                    </Link>
                  </th>
                  <td className="flex justify-center">
                    <MdDeleteOutline className="text-center text-2xl text-red-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedMedicine && (
        <UpdateMedicineModal
          showModal={showModal}
          handleClose={handleCloseModal}
          medicine={selectedMedicine}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default ManageCategory;
