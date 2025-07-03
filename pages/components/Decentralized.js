import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CardSlider from "./CardSlider";

const Decentralized = () => {
  const cards = [
    {
      imgurl: "/images/card1.png",
      title: "A multinational fintech company",
      description:
        "ETHER has been working with leading fintech companies, providing all tech services to various banks in Bangladesh.",
    },
    {
      imgurl: "/images/card2.png",
      title: "Customers in different countries",
      description:
        "ETHER has been working with leading fintech companies, providing all tech services to various banks in Bangladesh.",
    },
    {
      imgurl: "/images/card3.png",
      title: "Center for global operations",
      description:
        "We provide necessary operational support from Bangladesh to USA, Canada, Australia, Singapore and Vietnam.",
    },
    {
      imgurl: "/images/card3.png",
      title: "Scalable infrastructure",
      description:
        "Our cloud infrastructure scales seamlessly to match your growing demands.",
    },
    {
      imgurl: "/images/card3.png",
      title: "Secure cloud hosting",
      description: "Security and reliability in every layer of our tech stack.",
    },
  ];

  const CARD_WIDTH = 370; // includes padding + margin
  const VISIBLE_CARDS = 3;
  const [position, setPosition] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(cards.length > VISIBLE_CARDS);

  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const newPosition =
      direction === "next"
        ? Math.min(
            position + CARD_WIDTH,
            CARD_WIDTH * (cards.length - VISIBLE_CARDS)
          )
        : Math.max(position - CARD_WIDTH, 0);

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${newPosition}px)`;
    }

    setPosition(newPosition);
    setShowPrev(newPosition > 0);
    setShowNext(newPosition < CARD_WIDTH * (cards.length - VISIBLE_CARDS));
  };

  return (
    <div
      className="mt-10 py-[50px]"
      style={{
        backgroundColor: "#181B20",
        backgroundImage: "url('images/Point Section.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:pl-[calc((90vw-1024px)/2)] md:pr-[calc((90vw-1024px)/2)] xl:pl-[calc((90vw-1080px)/2)] xl:pr-[calc((90vw-1080px)/2)]    flex flex-col lg:flex-row justify-between ">
        {/* Left section */}
        <div className="mt-10">
          <p className="text-white text-[16px] font-bold">
            FROM CONCEPTS TO EFFECTS
          </p>
          <p className="text-white text-[40px] font-bold max-w-[529px] mt-[20px]">
            <span style={{ color: "#FCB813" }}>Decentralized</span> Yet
            Universal
          </p>
        </div>

        {/* Right section */}
        <div className="mt-10">
          <p className="text-white text-[16px] max-w-[658px] font-manrope">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also
          </p>

          <div className="flex justify-end mt-10 space-x-3 ">
            <button
              onClick={() => handleScroll("prev")}
              className={`w-[41px] h-[41px] rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-gray-800 transition ${
                !showPrev ? "opacity-30 cursor-not-allowed" : ""
              }`}
              disabled={!showPrev}
            >
              <FaArrowLeft size={14} />
            </button>
            <button
              onClick={() => handleScroll("next")}
              className={`w-[41px] h-[41px] rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-gray-800 transition ${
                !showNext ? "opacity-30 cursor-not-allowed" : ""
              }`}
              disabled={!showNext}
            >
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-10  overflow-hidden">
        <div className=" md:pl-[calc((90vw-1024px)/2)] xl:pl-[calc((90vw-1080px)/2)] ">
          <CardSlider cards={cards} sliderRef={sliderRef} />
        </div>
      </div>
    </div>
  );
};

export default Decentralized;
