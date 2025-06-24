import React from "react";

const AnimatedCard = ({ bg_image, title, short_des, icon }) => (
  <div className="border-l border-r">
    <div className="relative group w-60 h-96 overflow-hidden rounded-xl cursor-pointer bg-white">
      {/* Image that animates from bottom to top */}
      <div className="absolute bottom-0 left-0 right-0 h-40 group-hover:h-full transition-all duration-700 ease-out">
        <img src={bg_image} alt="User" className="w-full h-full object-cover" />
      </div>

      {/* Text Content */}
      <div className="relative p-4 z-20">
        {/* Yellow icon visible by default, hidden on hover */}
        <div className="bg-[#FCB813] w-[56px] h-[56px] rounded-xl flex items-center justify-center group-hover:hidden transition-all duration-500">
          <img
            className="w-[35px] h-[35px]"
            src="/images/home_icon.png"
            alt="cart icon"
          />
        </div>

        {/* Gray border icon hidden by default, visible on hover */}
        <div className="w-[56px] h-[56px] rounded-xl flex items-center justify-center border border-gray-100 transition-all duration-500 hidden group-hover:flex">
          <img
            className="w-[35px] h-[35px]"
            src="/images/Home_Icon_2.png"
            alt="cart icon"
          />
        </div>

        <div className="text-gray-800 font-bold text-lg group-hover:text-white transition-colors duration-700 mt-4">
          {title}
        </div>
        <div className="text-gray-500 text-sm group-hover:text-gray-200 mt-[30px] transition-colors duration-700">
          {short_des}
        </div>
        {/* slider button */}
        <div className="flex justify-center mt-32">
          <button className="group relative px-6 py-2 text-white bg-transparent rounded overflow-hidden w-full">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full transition-transform duration-500 group-hover:translate-x-[190px]"></span>
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function AnimatedSliderCart({ cards, sliderRef }) {
  return (
    <div className="relative mx-auto overflow-hidden">
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out gap-4"
        >
          {cards.map((card, idx) => (
            <AnimatedCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
