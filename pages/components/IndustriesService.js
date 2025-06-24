import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AnimatedSliderCart from "./AnimatedSliderCart";

const IndustriesService = () => {
  const cards = [
    {
      bg_image:
        "https://plus.unsplash.com/premium_photo-1661872680599-bfb0a671f8b1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
      icon: "/images/card1.png",
      title: "A multinational fintech company",
      short_des: "ETHER has been working with leading in Bangladesh.",
    },
    {
      bg_image:
        "https://plus.unsplash.com/premium_photo-1661872680599-bfb0a671f8b1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
      icon: "/images/card1.png",
      title: "A multinational fintech company",
      short_des: "ETHER has been working with leading in Bangladesh.",
    },
    {
      bg_image:
        "https://plus.unsplash.com/premium_photo-1661872680599-bfb0a671f8b1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
      icon: "/images/card1.png",
      title: "A multinational fintech company",
      short_des: "ETHER has been working with leading in Bangladesh.",
    },
    {
      bg_image:
        "https://plus.unsplash.com/premium_photo-1661872680599-bfb0a671f8b1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
      icon: "/images/card1.png",
      title: "A multinational fintech company",
      short_des: "ETHER has been working with leading in Bangladesh.",
    },
    {
      bg_image:
        "https://plus.unsplash.com/premium_photo-1661872680599-bfb0a671f8b1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
      icon: "/images/card1.png",
      title: "A multinational fintech company",
      short_des: "ETHER has been working with leading in Bangladesh.",
    },
    {
      bg_image:
        "https://plus.unsplash.com/premium_photo-1661872680599-bfb0a671f8b1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
      icon: "/images/card1.png",
      title: "A multinational fintech company",
      short_des: "ETHER has been working with leading in Bangladesh.",
    },
  ];

  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [position, setPosition] = useState(0);
  const sliderRef = useRef(null);
  const CARD_WIDTH = 315;
  const handleScroll = (direction) => {
    const newPosition =
      direction === "next" ? position + CARD_WIDTH : position - CARD_WIDTH;

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${newPosition}px)`;
    }
    setPosition(newPosition);
    setShowPrev(newPosition > 0);
    setShowNext(newPosition < CARD_WIDTH * (cards.length - 3));
  };

  return (
    <div className="mb-20 p-10">
      <div className=" container mx-auto  flex flex-col md:flex-row justify-between ">
        <div>
          <p className="text-sm font-extrabold text-gray-800  uppercase tracking-wide">
            INDUSTRIES
          </p>

          <p className="text-black text-[40px] font-bold max-w-[529px] ">
            <span className="text-[#FCB813]">Industries </span>We Serve
          </p>
        </div>

        <div>
          <p className="text-[#939393] text-[16px] max-w-[718px]  leading-relaxed">
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
      <div className="container left-right-button flex justify-end mt-10 space-x-3">
        <button
          onClick={() => handleScroll("prev")}
          className={`w-[41px] h-[41px] rounded-full border border-gray-400 flex items-center justify-center text-black hover:bg-gray-300 transition  ${
            !showPrev ? "opacity-30 cursor-not-allowed" : ""
          } `}
          disabled={!showPrev}
        >
          <FaArrowLeft size={14} />
        </button>
        <button
          onClick={() => handleScroll("next")}
          className={`w-[41px] h-[41px] rounded-full border border-gray-400 flex items-center justify-center text-black hover:bg-gray-300 transition ${
            !showNext ? "opacity-30 cursor-not-allowed" : ""
          }`}
          disabled={!showNext}
        >
          <FaArrowRight size={14} />
        </button>
      </div>

      {/* slider part */}

      <div className="container card-section mt-10 py-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
        <AnimatedSliderCart
          cards={cards}
          sliderRef={sliderRef}
        ></AnimatedSliderCart>
      </div>
    </div>
  );
};

export default IndustriesService;
