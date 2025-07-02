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

  const handleTagClick = (serviceIndex, tagIndex, tag) => {
    // Select only one tag per service - clear previous selections in this service only
    const newSelectedTags = {};

    // Clear all selections for this specific service
    Object.keys(selectedTags).forEach(key => {
      const [serviceIdx] = key.split('-');
      if (parseInt(serviceIdx) !== serviceIndex) {
        newSelectedTags[key] = selectedTags[key];
      }
    });

    // Add the new selection for this service
    const tagKey = `${serviceIndex}-${tagIndex}`;
    newSelectedTags[tagKey] = true;

    setSelectedTags(newSelectedTags);

    // Close current tab and open next tab
    // If it's the last tab, stay on the last tab instead of cycling to first
    const nextIndex = serviceIndex === services.length - 1 ? serviceIndex : (serviceIndex + 1) % services.length;
    setOpenIndex(nextIndex);
  };

  const isTagSelected = (serviceIndex, tagIndex) => {
    const tagKey = `${serviceIndex}-${tagIndex}`;
    return selectedTags[tagKey] || false;
  };

  // Helper to get selected tags per service
  const getSelectedTagsPerService = () => {
    const selected = [];
    Object.keys(selectedTags).forEach((key) => {
      if (selectedTags[key]) {
        const [serviceIdx, tagIdx] = key.split('-').map(Number);
        selected.push({
          serviceIdx,
          tagIdx,
          tag: services[serviceIdx].tags[tagIdx],
        });
      }
    });
    // Sort by service index for consistent order
    return selected.sort((a, b) => a.serviceIdx - b.serviceIdx);
  };

  const handleReset = () => {
    setSelectedTags({});
    setOpenIndex(0);
  };

  return (
    <section className="overflow-x-hidden px-4 lg:pl-24 lg:pr-6 py-16 bg-white">
      {/* 1. Top Section (restored to previous flex row design) */}
      <div className="mb-12 flex flex-col lg:flex-row justify-between gap-30">
        <div className="w-full px-40">
          <p className="text-sm font-extrabold text-gray-800">OUR SERVICES</p>
          <h2 className="text-4xl font-bold mt-4 text-black">
            <span className="text-[#FCB813]">World-Class</span> Tech Services
          </h2>
        </div>
        <div className="w-full text-[16px] text-[#939393] font-manrope leading-relaxed px-50">
          See how we can help you reach your goals. Answer three questions to help us match our expertise and software solutions to your needs. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
      </div>

      {/* 2. Main Section: Left (Tabs) + Right (Cards/Results) */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Accordion/Tabs */}
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
                <div className={`mt-4 flex flex-wrap gap-2 transition-all duration-300 overflow-hidden ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
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
                {openIndex === idx && (
                  <div className="w-full h-48" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Cards/Results + Navigation + Selected Tags Bar */}
        <div className="flex-1 min-w-0 flex flex-col relative">
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(cardWidth + cardGap) * cards.length}px`,
                transform: `translateX(-${(cardWidth + cardGap) * startIndex}px)`,
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
                    {/* Category at the top */}
                    <div>
                      <p className="text-xs text-gray-500 group-hover:text-white mb-2 text-left">
                        {card.category}
                      </p>
                    </div>
                    {/* Title and description centered in the middle */}
                    <div className="flex-1 flex flex-col justify-center ">
                      <h3 className="text-xl font-bold text-black group-hover:text-white mb-2 leading-snug text-left">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-300 text-left">
                        {card.description}
                      </p>
                    </div>
                    {/* Image at the bottom */}

                    {/* Navigation/Arrow section remains unchanged */}
                    <div className="mt-6 relative w-full">
                      <div className="flex items-center justify-start w-full rounded-xl border border-gray-200 group-hover:border-white px-4 py-3 transition group">
                        <div className="w-6 h-6 rounded-full border border-gray-400 group-hover:border-white flex items-center justify-center transition-all duration-500 group-hover:translate-x-4 group-hover:scale-110">
                          <ArrowRight
                            size={14}
                            className="text-black group-hover:text-white transition-all duration-300 group-hover:translate-x-1"
                          />
                        </div>
                        <div className="ml-2 h-[1px] bg-gray-200 group-hover:bg-white w-full transition-all duration-500" />
                      </div>
                      {/* Hover Image */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <img
                          src={card.image}
                          alt="Service Preview"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
                            <ArrowRight
                              size={20}
                              className="text-white animate-pulse"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Arrows and Selected tags bar aligned at the bottom */}
          <div className="mt-8 flex items-center w-full gap-x-8">
            {/* Navigation Arrows */}
            <div className="flex gap-3">
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
            {/* Selected tags bar */}
            {getSelectedTagsPerService().length > 0 && (
              <div className="flex gap-3 items-center ml-auto" style={{minHeight: '56px'}}>
                {getSelectedTagsPerService().map((item, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-900 text-base font-semibold shadow-sm flex items-center min-w-[48px] justify-center"
                    style={{letterSpacing: '0.01em'}}>
                    {item.tag}
                  </span>
                ))}
                <button
                  onClick={handleReset}
                  className="ml-2 px-6 py-2 rounded-full border border-gray-300 text-gray-700 text-base font-semibold flex items-center gap-2 transition min-w-[48px] justify-center shadow-sm"
                  style={{letterSpacing: '0.01em'}}>
                  Reset filter <span className="text-lg font-bold">×</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
