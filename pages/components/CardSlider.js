"use client";
import Image from "next/image";

const Card = ({ imgurl, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-md w-[417px] flex-shrink-0">
    <div className="flex items-center gap-5 mb-6">
      <Image src={imgurl} alt={title} width={80} height={80} />
      <h3 className="text-[25px] font-semibold text-black">{title}</h3>
    </div>
    <p className=" text-[15px] text-gray-600 mt-[78px] text-sm">
      {description}
    </p>
  </div>
);

const CardSlider = ({ cards, sliderRef }) => {
  return (
    <div className="relative overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out gap-6"
      >
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
