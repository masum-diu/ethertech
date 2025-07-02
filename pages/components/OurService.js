import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export const OurServices = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const services = [
    {
      title: "UX Consultant",
      description:
        "Offering appealing and functional UI/UX design services that attract and engage users",
      tags: [
        "User Research & Analysis",
        "UX Strategy & Planning",
        "UI",
        "Usability & Testing",
        "UI/UX for Specialized Platforms",
        "Handoff & Implementation",
        "Full Product Design",
      ],
    },
    {
      title: "Engineering Software Development",
      description: "",
      tags: [],
    },
    {
      title: "Technical Support",
      description: "",
      tags: [],
    },
  ];

  const cards = Array(10).fill({
    category: "UX/UI DESIGN",
    title: "Product and service design",
    description:
      "Get strategic guidance on creating best-in-class domain-specific technology solutions",
    image: "/images/Slider-card.png", // <-- Make sure this exists in /public/images
  });

  const cardWidth = 360;
  const cardGap = 24;
  const visibleCards = 3;

  const handleNext = () => {
    if (startIndex < cards.length - visibleCards) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="overflow-x-hidden px-8 py-16 bg-white">
      {/* Top Intro Content */}
      <div className="max-w-[1500px] mx-auto mb-16 flex flex-col lg:flex-row justify-between gap-12">
        <div className="w-full">
          <p className="text-sm font-extrabold text-gray-800">OUR SERVICES</p>
          <h2 className="text-4xl font-bold mt-4 text-black">
            <span className="text-[#FCB813]">World-Class</span> Tech Services
          </h2>
        </div>
        <div className="w-full text-[16px] text-[#939393] font-manrope leading-relaxed">
          See how we can help you reach your goals. Answer three questions to
          help us match our expertise and software solutions to your needs.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </div>
      </div>

      {/* Accordion + Carousel */}
      <div className="mx-auto flex flex-col lg:flex-row gap-6">
        {/* Accordion Section */}
        <div className="w-full lg:w-[528px] shrink-0">
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white h-full">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="border-b last:border-b-0 pb-4 mb-4 last:mb-0"
              >
                <div
                  className="flex justify-between cursor-pointer items-start"
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                >
                  <p className="text-[16px] font-semibold text-black leading-relaxed">
                    <span className="font-bold">
                      {idx + 1}. {service.title}
                    </span>
                    {service.description && (
                      <span className="font-normal text-gray-600">
                        : {service.description}
                      </span>
                    )}
                  </p>
                  <span className="text-xl">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </div>
                {openIndex === idx && service.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-sm border rounded-full px-3 py-1 text-gray-700 border-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full relative">
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(cardWidth + cardGap) * cards.length}px`,
                transform: `translateX(-${
                  (cardWidth + cardGap) * startIndex
                }px)`,
              }}
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  style={{
                    width: `${cardWidth}px`,
                    height: `516px`,
                    marginRight: `${cardGap}px`,
                  }}
                  className="flex-shrink-0 group relative overflow-hidden transition-all duration-300 rounded-2xl" // Rounded here
                >
                  {/* Dark background on hover */}
                  <div className="absolute inset-0 bg-[#181B20] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                  {/* Fade-in image */}
                  <img
                    src={card.image}
                    alt="Service"
                    className="absolute bottom-6 left-6 right-6 h-28 object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  />

                  <div className="h-full w-full border border-gray-200 rounded-xl p-6 flex flex-col justify-between bg-white group-hover:bg-[#181B20] transition-all duration-300 relative z-20">
                    <div>
                      <p className="text-xs text-gray-500 group-hover:text-white mb-2">
                        {card.category}
                      </p>
                      <h3 className="text-xl font-bold text-black group-hover:text-white mb-2 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-300">
                        {card.description}
                      </p>
                    </div>
                    <div className="mt-6 relative">
                      <div className="flex items-center justify-start w-full rounded-xl border border-gray-200 group-hover:border-white px-4 py-3 transition group">
                        <div className="w-6 h-6 rounded-full border border-gray-400 group-hover:border-white flex items-center justify-center transition-transform duration-500 group-hover:translate-x-2">
                          <ArrowRight
                            size={14}
                            className="text-black group-hover:text-white transition-colors duration-300"
                          />
                        </div>
                        <div className="ml-2 h-[1px] bg-gray-200 group-hover:bg-white w-full transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute -bottom-12 left-0 flex gap-3 mt-4">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition disabled:opacity-30"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex >= cards.length - visibleCards}
                className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition disabled:opacity-30"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
