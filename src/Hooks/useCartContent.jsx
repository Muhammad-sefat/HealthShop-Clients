import { useState, useEffect } from "react";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";

const useCartCount = () => {
  const { user } = useAuth();
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = async () => {
    try {
      if (user?.email) {
        const { data } = await axiosPublic.get(`/cart-count/${user.email}`);
        setCartCount(data.count);
      }
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

  useEffect(() => {
    updateCartCount();
  }, [user?.email]);

  return { cartCount, updateCartCount };
};

export default useCartCount;
