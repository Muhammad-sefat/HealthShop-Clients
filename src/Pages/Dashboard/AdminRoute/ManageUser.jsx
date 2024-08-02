import React, { useEffect, useState } from "react";
import { axiosPublic } from "../../../Hooks/useAxiosPublic";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const ManageUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get("/user");
      setUsers(data);
    };
    getData();
  }, []);

  const handleRoleChange = async (id, newRole) => {
    try {
      const { data } = await axiosPublic.put(`/user/${id}`, { role: newRole });
      setUsers(
        users.map((user) =>
          user._id === id ? { ...user, role: newRole } : user
        )
      );
      Swal.fire("Success", "Role updated successfully!", "success");
    } catch (error) {
      console.error("Error updating role:", error);
      Swal.fire("Error", "Failed to update role.", "error");
    }
  };

  const handleDeleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosPublic.delete(`/user/${id}`);
          setUsers(users.filter((user) => user._id !== id));
          Swal.fire("Deleted!", "User has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting user:", error);
          Swal.fire("Error", "Failed to delete user.", "error");
        }
      }
    });
  };

  return (
    <div>
      <p>All User Here </p>
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
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
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
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.username}</td>
                <td>${user.email}</td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    disabled={user.email === "sara@gmail.com"}
                  >
                    <option value="User">User</option>
                    <option value="Seller">Seller</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>
                <td className="flex justify-center">
                  <MdDeleteOutline
                    className="text-2xl text-red-600 cursor-pointer"
                    onClick={() => handleDeleteUser(user._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
