import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://health-shop-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
