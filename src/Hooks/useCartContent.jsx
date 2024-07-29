import { axiosPublic } from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const useCartCount = () => {
  const { user } = useAuth();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cart?email=${user?.email}`);
      return res.data;
    },
  });
  return { cart, refetch };
};

export default useCartCount;
