import React from "react";
import Cards from "../Components/VehicleModels/Cards";
import { fleet } from "../Content/carRental";

function VehicleModels() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-50 pt-[73px]">
        <h1 className="mt-[60px] text-2xl text-blue-700 font-bold mb-6">
          Explore Cars
        </h1>
        <p className="mt-5 mb-5 text-xl text-center text-gray-700 font-medium">
          Let's drive to happiness
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
          {fleet.carData.map((card, index) => (
            <Cards
              key={index}
              image={card.image}
              name={card.name}
              rent={card.rent}
              model={card.model}
              transmission={card.transmission}
              seats={card.seater}
              fuel={card.fuel}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default VehicleModels;
