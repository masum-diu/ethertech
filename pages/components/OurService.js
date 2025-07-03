import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export const OurServices = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedTags, setSelectedTags] = useState({});

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
      description: "Custom software development and engineering solutions",
      tags: [
        "Web Development",
        "Mobile Development",
        "API Development",
        "Database Design",
        "Cloud Solutions",
        "DevOps",
        "System Architecture",
      ],
    },
    {
      title: "Technical Support",
      description: "Comprehensive technical support and maintenance services",
      tags: [
        "24/7 Support",
        "Bug Fixes",
        "Performance Optimization",
        "Security Updates",
        "Training & Documentation",
        "System Monitoring",
        "Emergency Response",
      ],
    },
  ];

  const cards = Array(10).fill({
    category: "UX/UI DESIGN",
    title: "Product and service design",
    description:
      "Get strategic guidance on creating best-in-class domain-specific technology solutions",
    image: "/images/Slider-card.png",
  });

  const cardWidth = 360;
  const cardGap = 16;
  const visibleCards = 4.5; // Adjusted for better visibility

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

  const handleTagClick = (serviceIndex, tagIndex, tag) => {
    const newSelectedTags = {};
    Object.keys(selectedTags).forEach((key) => {
      const [serviceIdx] = key.split("-");
      if (parseInt(serviceIdx) !== serviceIndex) {
        newSelectedTags[key] = selectedTags[key];
      }
    });
    const tagKey = `${serviceIndex}-${tagIndex}`;
    newSelectedTags[tagKey] = true;
    setSelectedTags(newSelectedTags);
    const nextIndex =
      serviceIndex === services.length - 1
        ? serviceIndex
        : (serviceIndex + 1) % services.length;
    setOpenIndex(nextIndex);
  };

  const isTagSelected = (serviceIndex, tagIndex) => {
    const tagKey = `${serviceIndex}-${tagIndex}`;
    return selectedTags[tagKey] || false;
  };

  const getSelectedTagsPerService = () => {
    const selected = [];
    Object.keys(selectedTags).forEach((key) => {
      if (selectedTags[key]) {
        const [serviceIdx, tagIdx] = key.split("-").map(Number);
        selected.push({
          serviceIdx,
          tagIdx,
          tag: services[serviceIdx].tags[tagIdx],
        });
      }
    });
    return selected.sort((a, b) => a.serviceIdx - b.serviceIdx);
  };

  const handleReset = () => {
    setSelectedTags({});
    setOpenIndex(0);
  };

  return (
    <section className="overflow-x-hidden py-16 bg-white">
      <div className=" md:pl-[calc((90vw-1024px)/2)] md:pr-[calc((90vw-1024px)/2)] xl:pl-[calc((90vw-1080px)/2)] xl:pr-[calc((90vw-1080px)/2)]  mb-12 flex flex-col lg:flex-row justify-between items-start ">
        <div className="w-full lg:w-1/2">
          <p className="text-[16px] font-extrabold text-gray-800">
            OUR SERVICES
          </p>
          <h2 className="text-[40px] font-bold mt-4 text-black">
            <span className="text-[#FCB813]">World-Class</span> Tech Services
          </h2>
        </div>
        <div className="w-full lg:w-1/2  text-[16px] text-[#939393] leading-relaxed">
          See how we can help you reach your goals Answer three questions to
          help us match our expertise and software solutions to your needs Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also
        </div>
      </div>
      {/* the whole slider part starts*/}
      <div className="flex flex-col lg:flex-row  mt-20">
        {/* Left: Accordion */}
        <div className="w-full lg:w-[560px] px-9">
          <div className="w-[528px] rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
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
                <div
                  className={`mt-4 flex flex-wrap gap-2 transition-all duration-300 overflow-hidden ${
                    openIndex === idx
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {service.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTagClick(idx, tagIdx, tag);
                      }}
                      className={`text-sm border rounded-full px-3 py-1 cursor-pointer transition-all duration-200 ${
                        isTagSelected(idx, tagIdx)
                          ? "bg-[#FCB813] text-white border-[#FCB813] shadow-md"
                          : "text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Slider Cards */}
        <div className="flex-1 pl-8 min-w-0 flex flex-col relative">
          <div className="overflow-hidden relative">
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
                  className="flex-shrink-0 group relative overflow-hidden transition-all duration-300 rounded-2xl"
                >
                  <div className="h-full w-full border border-gray-200 rounded-xl p-6 flex flex-col bg-white group-hover:bg-[#181B20] transition-all duration-300 relative z-20">
                    <p className="text-xs text-gray-500 group-hover:text-white mb-2 text-left">
                      {card.category}
                    </p>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-black group-hover:text-white mb-2 leading-snug text-left">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-300 text-left">
                        {card.description}
                      </p>
                    </div>
                    <div className="mt-6 relative w-full">
                      <div className="flex items-center justify-start w-full w-[328px] h-[120px] mb-4  border-gray-200 group-hover:border-white px-4 py-3 transition group">
                        <div className="w-6 h-6 bg-white rounded-full border border-gray-400 group-hover:border-white flex items-center justify-center transition-all duration-500 group-hover:translate-x-4 group-hover:scale-110">
                          <ArrowRight
                            size={14}
                            className="text-black group-hover:text-white transition-all duration-300 group-hover:translate-x-1"
                          />
                        </div>
                        <div className="ml-2 h-[1px] bg-gray-200 group-hover:bg-white w-full transition-all duration-500" />
                      </div>

                      {/* Image Hover Section */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="w-[328px] h-[120px] overflow-hidden rounded-xl shadow-lg">
                          <img
                            src={card.image}
                            alt="Service Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation + Selected Filters */}
          <div className="mt-8 flex items-center w-full gap-x-4 justify-between">
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="w-[41px] h-[41px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition disabled:opacity-30"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex >= cards.length - visibleCards}
                className="w-[41px] h-[41px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition disabled:opacity-30"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            {getSelectedTagsPerService().length > 0 && (
              <div
                className="flex gap-3 items-center ml-auto"
                style={{ minHeight: "56px" }}
              >
                {getSelectedTagsPerService().map((item, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-900 text-base font-semibold shadow-sm flex items-center min-w-[48px] justify-center"
                  >
                    {item.tag}
                  </span>
                ))}
                <button
                  onClick={handleReset}
                  className="ml-2 px-6 py-2 rounded-full border border-gray-300 text-gray-700 text-base font-semibold flex items-center gap-2 transition min-w-[48px] justify-center shadow-sm"
                >
                  Reset filter <span className="text-lg font-bold">×</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* the whole slider part starts*/}
    </section>
  );
};
