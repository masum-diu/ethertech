import React from "react";

const OurPartner = () => {
  const partnerLogos = [
    "oddo.png",
    "meta.png",
    "int.png",
    "check.png",
    "cloud.png",
    "uib.png",
  ];

  return (
    <div className="relative py-12 bg-white overflow-hidden mt-20">
      {/* Background world map image */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <img
          src="/images/back.png"
          alt="Background"
          className="w-[60%] opacity-80 object-contain"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
          {/* Left Heading */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-sm font-extrabold text-gray-800 uppercase tracking-wide mb-4">
              OUR PARTNER
            </p>
            <p className="text-black text-4xl sm:text-5xl lg:text-[40px] font-bold leading-tight">
              <span className="text-[#FCB813]">Our Global</span> Tech Partner
            </p>
          </div>

          {/* Right Description */}
          <div className="md:w-1/2 md:pl-6">
            <p className="text-[#939393] text-base leading-relaxed">
              See how we can help you reach your goals. Answer three questions
              to help us match our expertise and software solutions to your
              needs. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book...
            </p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {partnerLogos.map((logoName, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <img
                src={`/images/${logoName}`}
                alt={`${logoName.split(".")[0]} Logo`}
                className="max-h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/150x80/cccccc/333333?text=${
                    logoName.split(".")[0]
                  }`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
