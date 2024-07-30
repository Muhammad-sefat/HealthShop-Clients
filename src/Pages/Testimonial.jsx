import React from "react";

const Testimonial = () => {
  return (
    <div>
      <section className="p-6 ">
        <div className="container max-w-2xl text-white mx-auto rounded bg-violet-700">
          <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
            <img
              src="https://source.unsplash.com/random/100x100?4"
              alt=""
              className="w-20 h-20 rounded-full dark:bg-gray-500"
            />
            <blockquote className="max-w-lg text-lg italic font-medium text-center">
              "Et, dignissimos obcaecati. Recusandae praesentium doloribus
              vitae? Rem unde atque mollitia!"
            </blockquote>
            <div className="text-center dark:text-gray-600">
              <p>Leroy Jenkins</p>
              <p>CEO of Company Co.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
