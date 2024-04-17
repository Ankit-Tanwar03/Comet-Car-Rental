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
    <div className="bg-blue-50 shadow-lg fixed top-0 left-0 right-0 z-50 py-1 px-6 lg:px-24 bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className={`${isMenuOpen ? "hidden" : "flex items-center"}`}>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-16" />
          </Link>
        </div>
        <ul
          className={`${
            isMenuOpen
              ? "h-screen w-screen flex flex-col items-center justify-between"
              : "flex flex-row items-center space-x-1 ml-[] sm:space-x-6 transition-all duration-300 ease-in-out"
          }`}
        >
          <li
            onClick={toggleMenu}
            className={`text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer ${
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
                `text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${isActive ? "text-red-700" : "text-gray-900"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${isActive ? "text-red-700" : "text-gray-900"}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${isActive ? "text-red-700" : "text-gray-900"}`
              }
            >
              Vehicle Model
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${isActive ? "text-red-700" : "text-gray-900"}`
              }
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-900 font-semibold text-lg hover:text-blue-700 transition duration-300 ease-in-out cursor-pointer lg:block lg:mr-20 xl:mr-40 ${
                  isMenuOpen ? "block mb-4" : "hidden"
                } ${isActive ? "text-red-700" : "text-gray-900"}`
              }
            >
              Contact
            </NavLink>
          </li>
          <ul className="flex flex-row items-center space-x-1 sm:space-x-6 ">
            <li>
              <Button
                bgColor="bg-red-600"
                className={`lg:block px-4 py-2 ${
                  isMenuOpen ? "block mb-4" : "hidden"
                }`}
              >
                SignIn
              </Button>
            </li>
            <li
              className={`lg:block px-4 py-2 ${
                isMenuOpen ? "block mb-4" : "hidden"
              }`}
            >
              <Button>Create Account</Button>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
