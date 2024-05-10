import React from "react";
import Button from "../Button.jsx";

function Cards({ image, name, rent, model, transmission, seats, fuel }) {
  return (
    <div className="w-full lg:w-[30vw] h-[80vh] flex flex-col lg:flex-col bg-white rounded-lg overflow-hidden shadow-md shadow-cyan-500/50 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-950 m-10">
      <img
        src={image}
        alt="Card Image"
        className="h-48 sm:h-56 lg:h-auto object-fill"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <p className="text-gray-800 text-lg font-semibold mb-2">{name}</p>
          <p className="text-gray-600 mb-4">{rent}</p>
          <div className="">
            <p>{model}</p>
            <p>{transmission}</p>
            <p>{seats}</p>
            <p>{fuel}</p>
          </div>
          <div>
            <Button>Book Ride</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
