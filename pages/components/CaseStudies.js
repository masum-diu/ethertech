import Card from "./Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CaseStudies = () => {
  const cards = [
    {
      imgurl: "https://via.placeholder.com/300x200",
      title: "Demo 1",
      description: "Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      imgurl: "https://via.placeholder.com/300x200",
      title: "Demo 2",
      description: "Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      imgurl: "https://via.placeholder.com/300x200",
      title: "Demo 3",
      description: "Lorem Ipsum has been the industry's standard dummy text.",
    },
  ];

  return (
    <div className="py-16 container mx-auto ">
      {/* Heading Section */}
      <div className="flex justify-between items-center flex-wrap mb-10">
        <div>
          <p className="text-black text-sm font-extrabold">CASE STUDIES</p>
          <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mt-6">
            <span className="text-[#FCB813]">Creating efficient </span>
            and value-driven products.
          </h2>
        </div>
        <div className="flex space-x-3 mt-6 md:mt-0">
          <button className="w-[41px] h-[41px] rounded-full border flex items-center justify-center hover:bg-gray-100">
            <FaArrowLeft />
          </button>
          <button className="w-[41px] h-[41px] rounded-full border flex items-center justify-center hover:bg-gray-100">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {cards.map((card, index) => (
          <div key={index} className="w-[450px]">
            <Card imgurl={card.imgurl} />
            <h3 className="mt-4 text-l font-semibold text-gray-900">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
