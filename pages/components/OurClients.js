import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const OurClients = () => {
  return (
    <div className="mt-20 bg-[#181B20] py-24 text-white relative overflow-hidden mb-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between relative z-10">
        {/* Left Section */}
        <div className="md:w-1/2 relative">
          {/* Foreground Text */}
          <div className="relative z-10">
            <p className="text-sm font-extrabold text-white uppercase tracking-wide mb-4">
              OUR CLIENTS
            </p>
            <p className="text-4xl sm:text-5xl lg:text-[40px] font-bold leading-tight mb-5">
              <span className="text-[#FCB813]">We Build Lasting</span>
              <br /> Partnerships With Our Clients
            </p>
          </div>

          {/* Background Image - more visible and placed behind */}
          <div className="  flex justify-start items-end pointer-events-none">
            <Image
              src="/images/cllogo.png"
              alt="Background Logo"
              width={500}
              height={500}
              className="opacity-100"
            />
          </div>
        </div>

        {/* Right Stats Section */}
        <div className="md:w-1/2 flex flex-col  gap-6  md:mt-0">
          <div className="w-full h-px bg-[#FFFFFF] mb-10"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
            {/* First Stat */}
            <div className="flex items-center gap-4 text-center">
              <Image
                src="/images/handshake.png"
                width={50}
                height={50}
                alt="Handshake"
              />
              <div>
                <p className="text-2xl font-bold">1,120+</p>
                <p className="text-[16px] mt-1">Completed Projects</p>
              </div>
            </div>
            {/* Second Stat */}
            <div className="flex items-center gap-4 text-center">
              <Image src="/images/team.png" width={50} height={50} alt="Team" />
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-[16px] mt-1">Team Members</p>
              </div>
            </div>
            {/* Third Stat */}
            <div className="flex items-center gap-4 text-center">
              <Image
                src="/images/group.png"
                width={50}
                height={50}
                alt="Group"
              />
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-[16px] mt-1">Satisfaction Rate</p>
              </div>
            </div>
            {/* Fourth Stat */}
            <div className="flex items-center gap-4 text-center">
              <Image
                src="/images/clock 2.png"
                width={50}
                height={50}
                alt="Clock"
              />
              <div>
                <p className="text-2xl font-bold">8+ Years</p>
                <p className="text-[16px] mt-1">Completed Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos Marquee */}
      <Marquee className="mt-14 z-10 relative">
        <Image
          src="/images/cl1.png"
          alt="Client 1"
          className="mx-20"
          width={50}
          height={50}
        />
        <Image
          src="/images/cl2.png"
          alt="Client 2"
          className="mx-20"
          width={70}
          height={70}
        />
        <Image
          src="/images/cl3.png"
          alt="Client 3"
          className="mx-20"
          width={60}
          height={60}
        />
        <Image
          src="/images/cl4.png"
          alt="Client 4"
          className="mx-20"
          width={70}
          height={70}
        />
        <Image
          src="/images/cl5.png"
          alt="Client 5"
          className="mx-20"
          width={60}
          height={60}
        />
        <Image
          src="/images/cl6.png"
          alt="Client 6"
          className="mx-20"
          width={60}
          height={60}
        />
      </Marquee>
    </div>
  );
};

export default OurClients;
