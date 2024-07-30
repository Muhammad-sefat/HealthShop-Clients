import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useRole = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: role = [], isLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/user/${user?.email}`);
      return data.role;
    },
  });
  return [role, isLoading];
};

export default useRole;
