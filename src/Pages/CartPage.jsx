import React, { useEffect, useState } from "react";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";

const CartPage = () => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const { data } = await axiosPublic.get(`/cart/${user.email}`);
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    if (user?.email) {
      fetchCartData();
    }
  }, [user?.email]);

  return (
    <div className="md:px-8 mx-auto">
      <p className="text-4xl font-medium mb-6">Your Selected Medicine</p>
      <div>
        <div className="overflow-x-auto my-5">
          <table className="table">
            <thead className="font-medium text-base">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
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
                  <td>${item.price}</td>
                  <td>{item.company}</td>
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
