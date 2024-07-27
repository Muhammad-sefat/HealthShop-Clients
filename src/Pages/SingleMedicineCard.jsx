import React from "react";

const SingleMedicineCard = ({ medicine }) => {
  return (
    <div>
      <div className="card bg-base-100 h-full shadow-xl hover:scale-105 transition-all">
        <figure>
          <img src={medicine.image} alt="medicine" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{medicine.category}</h2>
          <p>{medicine.purpose}</p>
          <ul className="list-disc list-inside font-medium">
            {medicine.medicines.map((med, index) => (
              <li key={index}>{med}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleMedicineCard;
