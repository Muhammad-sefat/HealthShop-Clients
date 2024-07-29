import React, { useEffect, useState } from "react";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useCartCount from "../Hooks/useCartContent";

const CartPage = () => {
  const { user, loading } = useAuth();
  const { refetch } = useCartCount();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const { data } = await axiosPublic.get(`/cart/${user.email}`);
        setCartItems(data);
        loading(false);
      } catch (error) {
        console.error("Error fetching cart data:", error);
        loading(false);
      }
    };

    if (user?.email) {
      fetchCartData();
    }
  }, [user?.email]);

  const handleClearAll = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axiosPublic.delete(`/cart/clear`, {
          params: { email: user.email },
        });
        setCartItems([]);
        refetch();

        Swal.fire({
          title: "Deleted!",
          text: "Your All item has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error clearing all cart items:", error);
    }
  };
  const handleDeleteItem = async (itemId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        await axiosPublic.delete(`/cart/item/${itemId}?email=${user.email}`);
        setCartItems(cartItems.filter((item) => item._id !== itemId));
        refetch();

        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const handleIncreaseQuantity = async (item) => {
    try {
      const updatedItem = { ...item, quantity: item.quantity + 1 };
      await axiosPublic.put(`/cart/update-quantity`, updatedItem);
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id ? updatedItem : cartItem
        )
      );
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  const handleDecreaseQuantity = async (item) => {
    if (item.quantity > 1) {
      try {
        const updatedItem = { ...item, quantity: item.quantity - 1 };
        await axiosPublic.put(`/cart/update-quantity`, updatedItem);
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem._id === item._id ? updatedItem : cartItem
          )
        );
      } catch (error) {
        console.error("Error decreasing quantity:", error);
      }
    }
  };

  return (
    <div className="md:px-8 mx-auto">
      <p className="text-4xl font-medium mb-6">Your Selected Medicine</p>
      <div className="my-4 flex justify-start">
        <p
          className="p-3 border border-blue-600 rounded text-lg font-medium cursor-pointer"
          onClick={handleClearAll}
        >
          Clear All
        </p>
      </div>
      <div>
        <div className="overflow-x-auto my-5">
          <table className="table">
            <thead className="font-medium text-base">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Company</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>{item.company}</td>
                  <td className="text-left">
                    <button
                      className="px-2 bg-red-500 text-xl text-white rounded"
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="px-2 text-xl bg-green-500 text-white rounded"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      +
                    </button>
                  </td>
                  <td className="text-2xl text-right">
                    <RiDeleteBin6Line
                      className="cursor-pointer"
                      onClick={() => handleDeleteItem(item._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
