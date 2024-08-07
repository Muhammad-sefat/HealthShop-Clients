import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await axiosPublic.get("/testimonial");
        console.log(data);
        setTestimonials(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="py-10">
      <p className="text-4xl font-semibold text-center">
        What Our Customers Say
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper my-5"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <section className="p-6">
              <div className="container max-w-2xl text-white mx-auto rounded bg-teal-500">
                <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
                  <img
                    src={testimonial.image}
                    alt="Customer"
                    className="w-20 h-20 rounded-full dark:bg-gray-500"
                  />
                  <blockquote className="max-w-lg text-lg italic font-medium text-center">
                    {`"${testimonial.description}"`}
                  </blockquote>
                  <div className="text-center dark:text-gray-600">
                    <Rating
                      className="text-2xl"
                      initialRating={testimonial.rating}
                      readonly
                      emptySymbol={<FaRegStar className="text-yellow-400" />}
                      fullSymbol={<FaStar className="text-yellow-400" />}
                    />
                    <p className="mt-2 font-medium">{testimonial.name}</p>
                    <p>{testimonial.profession}</p>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
