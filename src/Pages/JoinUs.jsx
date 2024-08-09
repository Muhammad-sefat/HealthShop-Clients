import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const JoinUs = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "customer", // or 'vendor', 'partner'
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosPublic.post("/join-us", formData);
      Swal.fire({
        icon: "success",
        title: "Thank you for joining us!",
        text: "We will get in touch with you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "customer",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  return (
    <div className="join-us-container px-5 md:px-20 mb-5">
      <h2 className="text-3xl font-bold mb-5 text-center">
        Join Our HealthShop Community
      </h2>
      <p className="text-lg text-center mb-10 w-[60%] mx-auto">
        Become a part of something amazing. Whether you're a customer, vendor,
        or partner, there's a place for you here.
      </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-100 p-6 rounded"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded border"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded border"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded border"
          />
        </div>
        <div className="mb-4">
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 rounded border"
          >
            <option value="customer">Customer</option>
            <option value="vendor">Vendor</option>
            <option value="partner">Partner</option>
          </select>
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Tell us more about you or your business"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded border"
            rows="4"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
          >
            Join Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinUs;
