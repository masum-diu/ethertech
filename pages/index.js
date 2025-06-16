import React from "react";
import Layout from "./components/Layout";
import Card from "./components/Card";
import SliderPage from "./components/ExpandingSlider";
import Contact from "./components/Contact";
import CaseStudies from "./components/CaseStudies";

function Home() {
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
  ];

  return (
    <Layout>
      <hr className="container" />
      <br />
      <div className="container">
        <SliderPage></SliderPage>
      </div>
      {/* The  Decentralized part start*/}
      <div className="mt-10" style={{ backgroundColor: "#181B20" }}>
        <div className="card-text container flex justify-between ">
          {/* first text */}
          <div>
            <p
              className="text-white text-[16px] font-bold mt-20"
              style={{ color: "#FFFFFF" }}
            >
              FROM CONCEPTS TO EFFECTS
            </p>
            {/* second text */}
            <p className="text-white text-[40px] font-bold max-w-[529px] mt-8 ">
              <span style={{ color: "#FCB813" }}>Decentralized</span> Yet
              Universal
            </p>
          </div>
          {/* third text */}
          <div>
            <p className="text-white text-[16px]  max-w-[658px] mt-20 font-manrope ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also
            </p>

            <dix className="left-right-button flex justify-end mt-10 space-x-3 ">
              <button>
                <img
                  src="/images/left.png"
                  alt="Search"
                  style={{ width: "100%", maxWidth: "41px" }}
                />
              </button>
              <button>
                <img
                  src="/images/right.png"
                  alt="Search"
                  style={{ width: "100%", maxWidth: "41px" }}
                />
              </button>
            </dix>
          </div>
        </div>

        <div className="container card-section mt-10 py-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              imgurl={card.imgurl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* The  Decentralized part end*/}

      {/* Our services start*/}
      <div className="card-text container flex justify-between ">
        {/* first text */}
        <div>
          <p
            className="text-black text-[16px] font-bold mt-20"
            style={{ color: "#000000" }}
          >
            OUR SERVICES
          </p>
          {/* second text */}
          <p className="text-black text-[40px] font-bold max-w-[529px] mt-9 ">
            <span style={{ color: "#FCB813" }}>World-Class</span> Tech Services
          </p>
        </div>
        {/* third text */}
        <div>
          <p
            className="text-white text-[16px]  max-w-[718px] mt-20 font-manrope "
            style={{ color: "#939393" }}
          >
            See how we can help you reach your goals Answer three questions to
            help us match our expertise and software solutions to your needs
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also
          </p>
        </div>
      </div>

      {/* Our services end*/}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-red-500 text-center px-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          nostrum quas vel ea animi, ipsam perspiciatis assumenda adipisci
          voluptate iste ex a eaque cum odio? Iure illum perferendis autem quos.
        </p>
      </div>
      <CaseStudies></CaseStudies>
      <Contact></Contact>
    </Layout>
  );
}

export default Home;
