import React from "react";
import { hero } from "../../Content/carRental";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import BookNow from "./BookNow";

function Hero() {
  const handleClick = () => {
    const BookNowSection = document.getElementById("Booknow");
    if (BookNowSection) {
      BookNowSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        className={`md:h-screen flex bg-contain bg-right bg-no-repeat bg-light-beige pt-24 pb-10`}
        style={{ backgroundImage: `url(${hero.bgImage})` }}
      >
        <div className="flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-between px-10 lg:gap-x-20 lg:px-28 md:px-20">
          <div className="lg:flex-1">
            <h3 className="text-dark-gray text-xl font-semibold pb-6 pt-6">
              {hero.subtitle}
            </h3>
            <h1 className="text-slate-950 text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold pb-6 leading-tight">
              {hero.title}
            </h1>
            <p className="text-dark-gray text-base pb-6">{hero.description}</p>
            <div className="pt-4 flex">
              <div onClick={handleClick}>
                <Button
                  bgColor="bg-dark-green"
                  className="mr-4 my-2 py-4 px-4 sm:px-8 text-sm font-semibold shadow-md shadow-dark-green hover:shadow-lg hover:shadow-dark-mustard-yellow hover:transition-all ease-in-out duration-300 hover:scale-105 sm:text-md"
                >
                  Book Ride
                  <FontAwesomeIcon icon={faCircleCheck} className="pl-1" />
                </Button>
              </div>
              <div>
                <Link to="/about">
                  <Button
                    bgColor="bg-black"
                    className="mr-4 my-2 py-4 px-4 sm:px-8 text-sm font-semibold shadow-md shadow-dark-green hover:shadow-lg hover:shadow-dark-mustard-yellow hover:transition-all ease-in-out duration-300 hover:scale-105 sm:text-md"
                  >
                    Learn More
                    <FontAwesomeIcon icon={faCircleRight} className="pl-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:flex-1 lg:pl-10 pt-20 lg:pt-0">
            <img
              src={hero.image}
              alt="Herocar"
              className="w-[200px] md:w-[300px] lg:w-[600px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
