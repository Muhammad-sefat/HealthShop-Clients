import React from "react";

const Modal = ({ medicine, closeModal }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-500"
          onClick={closeModal}
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <div className="h-32 w-44">
              <img src={medicine.image} alt={medicine.name} />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            Name : {medicine.name}
          </h2>
          <p className="text-lg mb-2">Price : ${medicine.price}</p>
          <p className="text-lg text-gray-600">Company : {medicine.company}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
