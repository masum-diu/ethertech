import React from "react";

export const OurServices = () => {
  return (


    <div className="md:pl-[calc((90vw-1024px)/2)] md:pr-[calc((90vw-1024px)/2)] xl:pl-[calc((90vw-1080px)/2)] xl:pr-[calc((90vw-1080px)/2)] flex flex-col lg:flex-row justify-between ">
      <div className="w-full  md:px-0 xl:px-0 mt-20">
        <p className="text-sm font-extrabold text-gray-800">OUR SERVICES</p>
        <p className="text-black text-[40px] font-bold mt-[25px]">
          <span style={{ color: "#FCB813" }}>World-Class</span> Tech Services
        </p>
      </div>

      <div className="w-full  md:px-0 xl:px-0 mt-20">
        <p
          className="text-white text-[16px]   font-manrope "
          style={{ color: "#939393" }}
        >
          See how we can help you reach your goals Answer three questions to
          help us match our expertise and software solutions to your needs
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also
        </p>
      </div>
    </div>

  );
};
