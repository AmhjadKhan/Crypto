import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, SetisOpen] = useState(false);
  const toggleMenu = () => {
    SetisOpen(!isOpen);
  };
  return (
    <>
      <nav className="p-5 bg-gradient-to-r from-purple-500 to-[#0A1830] text-white flex justify-between items-center">
        <div className="text-3xl font-serif font-bold">
          <h1 className="text-gray-800">
            CRYPTO
          </h1>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul
          className={`flex-col md:flex-row md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-purple-500 md:bg-transparent p-5 md:p-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="hover:text-black text-xl">
            <a href="#">Goverment</a>
          </li>
          <li className="hover:text-black text-xl">
            <a href="#">Security</a>
          </li>
          <li className="hover:text-black text-xl">
            <a href="#">Documentayion</a>
          </li>
          <li className="hover:text-black tezt-xl">
            <a href="#">FAQ</a>
          </li>
        </ul>
        <button className="btn btn-primary bg-blue-400 p-4 rounded-lg">
          USE APP
        </button>
      </nav>
    </>
  );
};

export default Navbar;
