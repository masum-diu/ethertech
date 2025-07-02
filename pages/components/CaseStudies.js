import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const cards = [
  {
    imgurl: "/images/card1.png",
    title: "Demo",
    description: "Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    imgurl: "/images/card2.png",
    title: "Demo",
    description: "Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    imgurl: "/images/card3.png",
    title: "Demo",
    description: "Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    imgurl: "/images/card4.png",
    title: "Demo",
    description: "Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    imgurl: "/images/card5.png",
    title: "Demo",
    description: "Lorem Ipsum has been the industry's standard dummy.",
  },
];

// === Config ===
const CARD_WIDTH = 350 + 24; // Card width + horizontal gap
const VISIBLE_CARDS = 3;

const Card = ({ imgurl, title, description }) => (
  <div className="bg-white rounded-xl shadow-md w-[581px]  flex-shrink-0 overflow-hidden">
    <div className="w-full h-[524px] bg-gray-200  flex items-center justify-center">
      <Image
        src={imgurl}
        alt={title}
        width={250}
        height={250}
        className="object-contain"
      />
    </div>
    <div className="m-0 p-2">
      <h3 className="text-[16px] font-bold text-black">{title}</h3>
      <p className="text-[12px] text-gray-500 mt-2">{description}</p>
    </div>
  </div>
);

const CaseStudies = () => {
  const [position, setPosition] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(cards.length > VISIBLE_CARDS);
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const maxScroll = CARD_WIDTH * (cards.length - VISIBLE_CARDS);
    const newPosition =
      direction === "next"
        ? Math.min(position + CARD_WIDTH, maxScroll)
        : Math.max(position - CARD_WIDTH, 0);

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${newPosition}px)`;
    }

    setPosition(newPosition);
    setShowPrev(newPosition > 0);
    setShowNext(newPosition < maxScroll);
  };

  return (
    <div className="w-full py-20 bg-white">
      <div className="container-fluid px-6 md:px-12">
        {/* Section Header */}
        <div>
          <p className="text-sm font-extrabold text-gray-800 uppercase tracking-wide mb-4">
            CASE STUDIES
          </p>
          <p className="text-black text-4xl sm:text-5xl lg:text-[40px] font-bold leading-tight">
            <span className="text-[#FCB813]">Creating efficient</span> and
            value-driven products
          </p>
        </div>

        {/* Slider Controls */}
        <div className="mt-10 flex justify-end gap-3">
          <button
            onClick={() => handleScroll("prev")}
            className={`w-[41px] h-[41px] rounded-full border border-gray-400 flex items-center justify-center text-black hover:bg-gray-100 transition ${
              !showPrev ? "opacity-30 cursor-not-allowed" : ""
            }`}
            disabled={!showPrev}
          >
            <FaArrowLeft size={14} />
          </button>
          <button
            onClick={() => handleScroll("next")}
            className={`w-[41px] h-[41px] rounded-full border border-gray-400 flex items-center justify-center text-black hover:bg-gray-100 transition ${
              !showNext ? "opacity-30 cursor-not-allowed" : ""
            }`}
            disabled={!showNext}
          >
            <FaArrowRight size={14} />
          </button>
        </div>

        {/* Slider */}
        <div className="mt-6 overflow-hidden w-full">
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ width: `${CARD_WIDTH * cards.length}px` }}
            >
              {cards.map((card, idx) => (
                <Card key={idx} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
