import React from "react";

const Contact = () => {
  return (
    <div
      className="text-center flex flex-col gap-4 items-center justify-center mt-[100px] mb-[100px]"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
    >
      <h3 className="text-base text-gray-600">
        Be the first to know about new collections and exclusive offers
      </h3>
      <div className="border-2 border-gray-600 p-4 flex items-center justify-between w-[360px]">
        <input
          type="email"
          placeholder="Email"
          className="outline-none bg-transparent"
        />
        <i className="fa-solid fa-arrow-right text-gray-600"></i>
      </div>
    </div>
  );
};

export default Contact;
