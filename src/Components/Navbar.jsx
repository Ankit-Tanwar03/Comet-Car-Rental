import React, { useState } from "react";
import Logo from "../assets/Logo/Logo.png";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-teal-950 shadow-lg fixed top-0 left-0 right-0 z-50 py-1 px-6 lg:px-24 bg-opacity-80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className={`${isMenuOpen ? "hidden" : "flex items-center"}`}>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-16 lg:w-20 xl:w-24" />
          </Link>
        </div>
        <ul
          className={`${
            isMenuOpen
              ? "h-screen w-screen flex flex-col items-center justify-center space-y-4"
              : "flex flex-row items-center space-x-1 md:space-x-4 xl:space-x-6 transition-all duration-300 ease-in-out"
          }`}
        >
          <li
            onClick={toggleMenu}
            className={`text-beige font-semibold text-lg hover:text-lime-200 transition duration-300 ease-in-out cursor-pointer ${
              isMenuOpen ? "lg:block" : "lg:hidden"
            }`}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faX}
                className="absolute top-2 right-2 lg:top-10 lg:right-10"
              />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-beige font-semibold text-md hover:text-lime-300 transition duration-300 ease-in-out cursor-pointer lg:block xl:text-lg ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-lime-300 overline decoration-4"
                    : "text-beige"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-beige font-semibold text-md hover:text-lime-300 transition duration-300 ease-in-out cursor-pointer lg:block xl:text-lg ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-lime-300 overline decoration-4"
                    : "text-beige"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/models"
              className={({ isActive }) =>
                `text-beige font-semibold text-md hover:text-lime-300 transition duration-300 ease-in-out cursor-pointer lg:block xl:text-lg ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-lime-300 overline decoration-4"
                    : "text-beige"
                }`
              }
            >
              Vehicle Model
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                `text-beige font-semibold text-md hover:text-lime-300 transition duration-300 ease-in-out cursor-pointer lg:block xl:text-lg ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-lime-300 overline decoration-4"
                    : "text-beige"
                }`
              }
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-beige font-semibold text-md hover:text-lime-300 transition duration-300 ease-in-out cursor-pointer lg:block xl:text-lg lg:mr-10 xl:mr-28 ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${
                  isActive
                    ? "text-lime-300 overline decoration-4 transition ease-in-out duration-100"
                    : "text-beige"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <ul className="flex flex-col lg:flex-row items-center space-x-1 sm:space-x-2">
            <li>
              <Button
                bgColor="bg-transparent"
                className={`px-4 py-1 rounded-full text-sm font-semibold border-[2px] hover:border-black hover:bg-opacity-0 hover:text-black hover:transition-all ease-in-out duration-200 lg:block xl:px-6  ${
                  isMenuOpen ? "block mb-4" : "hidden"
                }`}
              >
                SignIn
              </Button>
            </li>
            <li>
              <Button
                bgColor="bg-dark-green"
                className={`px-4 py-1 rounded-full text-sm font-semibold border-[2px] hover:border-black hover:bg-opacity-0 hover:text-black hover:transition-all ease-in-out duration-200 lg:block xl:px-6  ${
                  isMenuOpen ? "block mb-4" : "hidden"
                }`}
              >
                Create Account
              </Button>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
