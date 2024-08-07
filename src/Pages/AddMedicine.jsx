import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosPublic } from "../Hooks/useAxiosPublic";

const AddMedicine = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axiosPublic.post("/medicine", data);
      Swal.fire("Success", "Medicine added successfully!", "success");
      reset();
      navigate("/");
    } catch (error) {
      console.error("Error adding medicine:", error);
      Swal.fire("Error", "Failed to add medicine.", "error");
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await axiosPublic.post(
          `https://api.imgbb.com/1/upload?key=db7247d921e05c974cabb53b93f4bf1c`,
          formData
        );

        if (response.data.success) {
          setValue("photo", response.data.data.url);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Medicine</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-left border p-5 rounded-md my-6"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            {...register("name")}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="file"
            {...register("image")}
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Company</label>
          <input
            {...register("company")}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Category</label>
          <input
            {...register("category")}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            {...register("price")}
            className="input input-bordered w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Add Medicine
        </button>
      </form>
    </div>
  );
};

export default AddMedicine;
