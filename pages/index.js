import React from "react";
import Layout from "./components/Layout";
import Card from "./components/Card";

// ✅ Component name capitalized (React standard)
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
      <div style={{ backgroundColor: "#181B20" }}>
        <div
          className="container card-section mt-20 py-20 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          
        >
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
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-red-500 text-center px-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          nostrum quas vel ea animi, ipsam perspiciatis assumenda adipisci
          voluptate iste ex a eaque cum odio? Iure illum perferendis autem quos.
        </p>
      </div>
    </Layout>
  );
}

export default Home;
