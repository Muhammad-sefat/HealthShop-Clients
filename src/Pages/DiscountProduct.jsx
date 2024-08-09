import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const DiscountProduct = () => {
  const [products, setProducts] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get("/discount-products");
      setProducts(Array.isArray(data) ? data : []);
    };
    getData();
  }, []);

  return (
    <div className="my-8">
      <p className="text-4xl font-semibold py-5 text-center">
        Our Discount Products
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper my-6"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body text-left">
                <h2 className="card-title"> Name : {product.name}</h2>
                <p className="text-lg font-medium">
                  Category : {product.category}
                </p>
                <p>Price: ${product.price}</p>
                <p className="text-blue-500">
                  Discount Price: ${product.discount}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiscountProduct;
