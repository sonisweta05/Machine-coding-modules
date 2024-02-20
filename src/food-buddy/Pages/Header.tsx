import { Link } from "react-router-dom";
import Logo from "../../Logo.jpg";
import NavLink from "../componentsFood/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import FoodHome from "./food-buddy/componentsFood/Home";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative z-10 p-2 md:px-2 px-10 flex items-center justify-between bg-white h-22">
        <div className="flex gap-2 ">
          <Link to="/food/home">
            <img src={Logo} alt="appLogo" className="h-[80px]" />
          </Link>
          <div className="flex flex-col  justify-center">
            <h2 className="text-xl font-Pacifico">Food Buddy</h2>
            <h6 className="text-sm font-RobotoCondenced">by Sweta & Shubham</h6>
          </div>
        </div>
        <div className="hidden md:flex pr-4">
          <NavLink classname="text-black flex items-center justify-between py-5 gap-5 text-lg font-semibold" />
        </div>
        <button
          className={`text-3xl md:hidden transition-transform ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
          onClick={toggleOpen}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBurger} />
        </button>
      </div>
      {isOpen && (
          <NavLink classname="flex flex-wrap flex-col w-11/12 h-60 shadow-lg rounded-lg m-auto gap-2 top-28 justify-center overflow-hidden md:hidden text-lg left-0 right-0 items-center absolute bg-gray-500 backdrop-filter backdrop-blur-sm bg-opacity-20 z-10" />
      )}
    </>
  );
};

export default Header;
