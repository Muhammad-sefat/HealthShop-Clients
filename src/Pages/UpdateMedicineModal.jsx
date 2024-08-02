import React, { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const UpdateMedicineModal = ({ show, handleClose, medicine, handleUpdate }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    company: "",
  });

  useEffect(() => {
    console.log(medicine);
    if (medicine) {
      setFormData({
        name: medicine.name,
        price: medicine.price,
        company: medicine.company,
      });
    }
  }, [medicine]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    handleUpdate(medicine._id, formData);
    handleClose();
  };

  return (
    <div className="px-16 mx-auto">
      <Modal
        isOpen={show}
        onRequestClose={handleClose}
        contentLabel="Update Medicine"
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={200}
      >
        <h2>Update Medicine</h2>
        <form className="bg-gray-300">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Company</label>
            <input
              type="text"
              className="form-control"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Update
          </button>
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default UpdateMedicineModal;
