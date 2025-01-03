import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <div className="container fixed top-0 left-0 right-0 h-16 px-4 mx-auto shadow-md md:px-20 max-w-screen-2xl bg-white">
      <div className="flex items-center justify-between h-16 mx-auto">
        <div>
          <img src="" alt="" />
          <h1>Deependra</h1>
          <p>Web Developer</p>
        </div>
        {/* Desktop navbar */}
        <div>
          <ul className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <li
                className="duration-200 cursor-pointer hover:scale-105"
                key={item.id}
              >
                {item.text}
              </li>
            ))}
          </ul>
          <div className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <GiHamburgerMenu size={24} /> : <IoMdClose size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile version navbar */}
      {menu && (
        <div>
          <ul className="flex flex-col items-center justify-center h-screen space-y-3 text-xl md:hidden">
            {navItems.map((item) => (
              <li
                className="font-semibold duration-200 cursor-pointer hover:scale-150"
                key={item.id}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
