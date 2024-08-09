import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AddMedicine = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
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
          formData,
          { withCredentials: false }
        );

        if (response.data.success) {
          const imageUrl = response.data.data.url;
          setValue("image", imageUrl); // Assign the URL directly to the 'image' key
          console.log({ image: imageUrl }); // For debugging, logs the key-value pair
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
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={user?.email}
            className="input input-bordered w-full"
            readOnly
          />
          <input type="hidden" {...register("email")} value={user?.email} />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Image</label>
          <input type="file" onChange={handleFileChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Company</label>
          <select
            {...register("company")}
            className="input input-bordered w-full"
            required
          >
            <option value="PharmaPlus">PharmaPlus</option>
            <option value="MediCare">MediCare</option>
            <option value="HealthCorp">HealthCorp</option>
            <option value="XYZ Pharma">XYZ Pharma</option>
            <option value="ABC Pharma">ABC Pharma</option>
            <option value="Wellness Pharmaceuticals">
              Wellness Pharmaceuticals
            </option>
            <option value="LifeCare Labs">LifeCare Labs</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Category</label>
          <select
            {...register("category")}
            className="input input-bordered w-full"
            required
          >
            <option value="Inhalers">Inhalers</option>
            <option value="Ointments">Ointments</option>
            <option value="Injections">Injections</option>
            <option value="Capsules">Capsules</option>
            <option value="Syrups">Syrups</option>
            <option value="Tablets">Tablets</option>
          </select>
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
          Add Medicine
        </button>
      </form>
    </div>
  );
};

export default AddMedicine;
