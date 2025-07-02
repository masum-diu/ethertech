import React from "react";

// Single Animated Card
const AnimatedCard = ({ bg_image, title, short_des }) => (
  <div className="border-l border-r">
    <div className="relative group w-[376px] h-[600px] overflow-hidden rounded-xl cursor-pointer bg-white">
      {/* Animated Background Image */}
      <div className="absolute bottom-0 left-0 right-0 transition-all duration-700 ease-out group-hover:h-full h-40">
        <div className="h-full w-full p-2 group-hover:p-0 transition-all duration-700 ease-out">
          <img
            src={bg_image}
            alt="Background"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative p-4 z-20">
        {/* Default Icon */}
        <div className="bg-[#FCB813] w-[56px] h-[56px] rounded-xl flex items-center justify-center group-hover:hidden transition-all duration-500">
          <img
            className="w-[35px] h-[35px]"
            src="/images/home_icon.png"
            alt="icon"
          />
        </div>

        {/* Hover Icon */}
        <div className="w-[56px] h-[56px] rounded-xl flex items-center justify-center border border-gray-100 transition-all duration-500 hidden group-hover:flex">
          <img
            className="w-[35px] h-[35px]"
            src="/images/Home_Icon_2.png"
            alt="icon-hover"
          />
        </div>

        <div className="text-gray-800 font-bold text-lg group-hover:text-white transition-colors duration-700 mt-4">
          {title}
        </div>
        <div className="text-gray-500 text-sm group-hover:text-gray-200 mt-6 transition-colors duration-700">
          {short_des}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-44">
          <button className="group relative px-6 py-2 text-white bg-transparent rounded overflow-hidden w-full">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full transition-transform duration-500 group-hover:translate-x-[190px]"></span>
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Animated Slider with Cards
export default function AnimatedSliderCart({ cards, sliderRef }) {
  return (
    <div className="relative overflow-hidden w-full">
      <div
        ref={sliderRef}
        className="flex gap-1 transition-transform duration-500 ease-in-out"
      >
        {cards.map((card, idx) => (
          <div key={idx} className="shrink-0 w-[376px]">
            <AnimatedCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
