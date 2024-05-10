import React from "react";
import Cards from "../Components/VehicleModels/Cards";
import { fleet } from "../Content/carRental";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Button from "../Components/Button";
import {
  faSackDollar,
  faPersonWalkingLuggage,
  faGasPump,
  faGear,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function VehicleModels() {
  const handleClick = () => {
    const BookNowSection = document.getElementById("Booknow");
    if (BookNowSection) {
      BookNowSection.scrollIntoView({ behavior: "smooth" });
    }

    console.log("fucntion called");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-beige pt-32 pb-20 lg:pt-32">
        <h1 className="text-3xl lg:text-5xl text-slate-950  mb-6">
          Explore Cars
        </h1>
        <p className="mt-5 mb-10 text-xl lg:text-xl text-dark-gray text-center font-medium">
          Let's drive to happiness
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
          {fleet.carData.map((card, index) => (
            <div
              key={index}
              className="rounded-lg shadow-2xl mx-4 my-4 bg-light-beige overflow-hidden"
            >
              <div className="px-6 py-4">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-48 object-cover object-center mb-4"
                />
                <div className="px-4 ">
                  <p className="text-slate-950 text-lg lg:text-xl mb-2 font-semibold">
                    {card.name}
                  </p>
                  <p className="text-dark-gray text-left text-base lg:text-base">
                    <FontAwesomeIcon icon={faSackDollar} className="pr-4" /> $
                    {card.rent}/per day
                  </p>
                  <p className="text-dark-gray text-left text-base lg:text-base">
                    <FontAwesomeIcon icon={faCar} className="pr-4" />{" "}
                    {card.model}
                  </p>
                  <p className="text-dark-gray text-left text-base lg:text-base">
                    <FontAwesomeIcon icon={faGear} className="pr-4" />{" "}
                    {card.transmission}
                  </p>
                  <p className="text-dark-gray text-left text-base lg:text-base">
                    <FontAwesomeIcon
                      icon={faPersonWalkingLuggage}
                      className="pr-4"
                    />{" "}
                    {card.seater} Seater
                  </p>
                  <p className="text-dark-gray text-left text-base lg:text-base mb-2">
                    <FontAwesomeIcon icon={faGasPump} className="pr-4" />{" "}
                    {card.fuel}
                  </p>

                  <Link to="/">
                    <div
                      onClick={() => {
                        setTimeout(() => handleClick(), 100);
                      }}
                    >
                      <Button
                        bgColor="bg-dark-green"
                        className="mr-4 my-2 py-4 px-4 w-full sm:px-8 text-sm font-semibold shadow-md shadow-dark-green hover:shadow-lg hover:shadow-dark-mustard-yellow hover:transition-all ease-in-out duration-300 hover:scale-105 sm:text-md"
                      >
                        Book Ride
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="pl-1"
                        />
                      </Button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default VehicleModels;
