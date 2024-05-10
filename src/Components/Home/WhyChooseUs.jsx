import React from "react";
import { whyChooseUs } from "../../Content/carRental.js";
import Button from "../Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function WhyChooseUs() {
  return (
    <>
      <div
        className="bg-beige flex flex-col items-center justify-center pb-12 bg-contain bg-left bg-no-repeat"
        style={{ backgroundImage: `url(${whyChooseUs.bgImage})` }}
      >
        <div className="max-w-full overflow-hidden pb-24">
          <img
            src={whyChooseUs.image}
            alt="Car_Image"
            className="w-[400px] md:w-[800px] lg:w-[1200px]"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:px-48">
          <div className="mx-4 lg:w-1/2 lg:mx-0 mb-8 lg:mr-8 lg:mb-0 lg:pr-20">
            <h3 className="text-xl lg:text-2xl font-semibold text-dark-gray pb-6">
              {whyChooseUs.subtitle}
            </h3>
            <h1 className="text-2xl lg:text-5xl font-bold text-slate-950 pb-6">
              {whyChooseUs.title}
            </h1>
            <p className="text-base lg:text-lg text-dark-gray pb-6">
              {whyChooseUs.description}
            </p>
            <Link to="/models">
              <Button
                bgColor="bg-dark-green"
                className="mr-4 my-2 py-4 px-4 sm:px-8 text-sm font-semibold shadow-md shadow-dark-green hover:shadow-lg hover:shadow-dark-mustard-yellow hover:transition-all ease-in-out duration-300 hover:scale-105 sm:text-md"
              >
                {whyChooseUs.buttonTitle}
                <FontAwesomeIcon icon={faCircleRight} className="pl-1" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center lg:w-1/2">
            {whyChooseUs.cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row justify-center items-center bg-light-beige rounded-lg shadow-2xl p-7 mx-4 mb-4 lg:mx-0"
              >
                <div className="w-32 lg:w-32 h-32 lg:h-auto mb-4 lg:mr-4 lg:mb-0">
                  <img
                    src={card.image}
                    alt="image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg lg:text-2xl font-semibold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-base lg:text-sm text-gray-700">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
