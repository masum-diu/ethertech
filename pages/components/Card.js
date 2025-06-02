import React from "react";

function Card({ imgurl, title, description }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-3">
      <div className="flex items-center space-x-3 py-5">
        <img
          className="object-cover"
          style={{ width: "100%", maxWidth: "80px" }}
          src={imgurl}
          alt="Card Image"
        />
        <h2
          className="text-xl font-semibold text-gray-800"
          style={{ fontSize: "25px" }}
        >
          {title}
        </h2>
      </div>

      <div className="py-4">
        <p className="mt-2 text-gray-600 text-sm" style={{ fontSize: "15px" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
