import React from "react";
import ExpandingSlider from "./ExpandingSlider";

const OurProducts = () => {
  return (
    <div className="container">
      <div className=" mx-auto  flex flex-col md:flex-row justify-between">
        <div>
          <p className="text-sm font-extrabold text-gray-800 mt-20 uppercase tracking-wide">
            OUR PRODUCTS
          </p>

          <p className="text-black text-[40px] font-bold max-w-[529px] mt-[30px]">
            <span className="text-[#FCB813]">Explore our </span>own products
          </p>
        </div>

        <div>
          <p className="text-[#939393] text-[16px] max-w-[718px] mt-20 leading-relaxed">
            See how we can help you reach your goals. Answer three questions to
            help us match our expertise and software solutions to your needs.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also...
          </p>
        </div>
      </div>

      <div className=" mt-10">
        <ExpandingSlider></ExpandingSlider>
      </div>
    </div>
  );
};

export default OurProducts;
