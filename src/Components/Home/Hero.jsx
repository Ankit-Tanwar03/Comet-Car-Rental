import React from "react";
import { hero } from "../../Content/carRental";
import Button from "../Button";

function Hero() {
  return (
    <>
      <div
        className={`h-screen flex bg-contain bg-right bg-no-repeat bg-light-beige`}
        style={{ "background-image": `url(${hero.bgImage})` }}
      >
        <div className="flex justify-between gap-x-20 items-center w-full px-28">
          <div className="flex-1">
            <h3 className="text-dark-gray text-xl font-semibold py-2">
              {hero.subtitle}
            </h3>
            <h1 className="text-slate-950 text-[70px] font-bold leading-tight">
              {hero.title}
            </h1>
            <p className="text-dark-gray text-base py-2">{hero.description}</p>
            <div className="pt-4">
              <Button
                bgColor="bg-dark-green"
                className="mr-4 my-2 py-4 px-8 text-md font-semibold shadow-md shadow-dark-green hover:shadow-lg hover:shadow-dark-mustard-yellow hover:transition-all ease-in-out duration-300 hover:scale-105"
              >
                Book Ride
              </Button>
              <Button
                bgColor="bg-dark-green"
                className="mr-4 my-2 py-4 px-8 text-xl hover:bg-dark-mustard-yellow shadow-md shadow-dark-mustard-yellow hover:shadow-lg hover:shadow-dark-green hover:text-dark-green hover:transition-all ease-in-out duration-500 hover:scale-110"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 pl-10">
            <img src={hero.image} alt="Herocar" className="w-[600px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
