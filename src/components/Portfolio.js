import React from "react";
import portfolio from "../assets/portfolio.jpg";

const Portfolio = () => {
  return (
    <div className="container px-4 mx-auto my-16 max-w-screen-2xl md:px-20">
      <div>
        <h1 className="mb-5 text-3xl font-bold text-center md:text-left">
          Portfolio
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <div className="border-[2px] hover:scale-110 cursor-pointer">
          <div className="space-x-4">
            <img className="w-[120px] h-[120px] mx-6" src={portfolio} alt="" />
            <h2 className="mb-2 text-xl font-bold">Shopping App</h2>
            <p className="p-2 text-gray-700">Stand Alone Node.js application</p>
          </div>
          <div className="px-6 py-4 space-x-4 ">
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Play
            </button>
            <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">
              Github
            </button>
          </div>
        </div>
        <div className="border">Card</div>
        <div className="border">Card</div>
        <div className="border">Card</div>
        <div className="border">Card</div>
        <div className="border">Card</div>
        <div className="border">Card</div>
        <div className="border">Card</div>
        <div className="border">Card</div>
        <div className="border">Card</div>
      </div>
    </div>
  );
};

export default Portfolio;
