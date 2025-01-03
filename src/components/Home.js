import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { ImTelegram } from "react-icons/im";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import profile from "../assets/profile2.jpg";

const Home = () => {
  return (
    <>
      <div className="container px-4 mx-auto my-20 max-w-screen-2xl md:px-20">
        <div className="flex flex-col md:flex-row">
          <div className="order-2 mt-12 space-y-2 md:w-1/2 md:mt-24 md:order-1">
            <span className="text-xl">Wlcome to my feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello I'm a </h1>
              {/* <span className="font-bold text-red-700">Developer</span> */}
              <ReactTyped
                className="font-bold text-red-700"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm text-justify md:text-md">
              You can also use variant modifiers to target media queries like
              responsive breakpoints, dark mode, prefers-reduced-motion, and
              more. For example, use md:scale-125 to apply the scale-125 utility
              at only medium screen sizes and above Deependra
            </p>
            <br />
            <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
              {/* social media */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li className="text-2xl cursor-pointer">
                    <a
                      href="https://www.facebook.com/bhartideependra/"
                      target="_blank"
                    >
                      <FaSquareFacebook />
                    </a>
                  </li>
                  <li className="text-2xl cursor-pointer">
                    {" "}
                    <IoLogoLinkedin />
                  </li>
                  <li className="text-2xl cursor-pointer">
                    <IoLogoYoutube />
                  </li>
                  <li className="text-2xl cursor-pointer">
                    {" "}
                    <ImTelegram />
                  </li>
                </ul>
              </div>
              {/* Currently working on */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div>
                  <ul className="flex space-x-5">
                    <li className="text-2xl duration-200 cursor-pointer hover:scale-110">
                      <DiMongodb />
                    </li>
                    <li className="text-2xl duration-200 cursor-pointer hover:scale-110">
                      {" "}
                      <SiExpress />
                    </li>
                    <li className="text-2xl duration-200 cursor-pointer hover:scale-110">
                      <FaReact />
                    </li>
                    <li className="text-2xl duration-200 cursor-pointer hover:scale-110">
                      {" "}
                      <FaNodeJs />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 mt-8 md:mt-20 md:ml-48 md:w-1/2">
            <img
              className="rounded-full md:w-[450px] md:h-[450px]"
              src={profile}
              alt="profile image"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
