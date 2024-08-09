import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AddReview = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axiosPublic.post("/review", data);
      Swal.fire("Success", "Review added successfully!", "success");
      reset();
      navigate("/");
    } catch (error) {
      console.error("Error adding review:", error);
      Swal.fire("Error", "Failed to add review.", "error");
    }
  };
  return (
    <div>
      <p className="text-2xl md:text-4xl font-medium">Add Your Review</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-left border md:mx-32 p-5 rounded-md my-6"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium">Your Name</label>
          <input
            type="email"
            value={user?.displayName}
            className="input input-bordered w-full"
            readOnly
          />
          <input
            type="hidden"
            {...register("name")}
            value={user?.displayName}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Your Email</label>
          <input
            type="email"
            value={user?.email}
            className="input input-bordered w-full"
            readOnly
          />
          <input type="hidden" {...register("email")} value={user?.email} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Your Image</label>
          <input
            type="email"
            value={user?.photoURL}
            className="input input-bordered w-full"
            readOnly
          />
          <input type="hidden" {...register("email")} value={user?.photoURL} />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Rating (1-5)</label>
          <input
            type="number"
            {...register("rating")}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Short Description</label>
          <textarea
            {...register("description")}
            className="input input-bordered w-full"
            rows="3"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Add Your Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
