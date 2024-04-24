import React from "react";
import { services } from "../../Content/carRental";

function Service() {
  return (
    <>
      <div className=" md:h-screen bg-beige">
        <div className="flex flex-col justify-center items-center pt-24">
          <div>
            <h3 className="text-dark-gray text-xl text-center pb-6">
              {services.subtitle}
            </h3>
            <h1 className="text-slate-950 text-5xl text-center pb-6">
              {services.title}
            </h1>
          </div>
          <div>
            <ul className="flex flex-wrap justify-center items-center mx-auto pt-14 pb-14 sm:pb-0">
              {services.cards.map((card, index) => (
                <li
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                >
                  <div className="bg-light-beige rounded-lg shadow-2xl m-2 flex flex-col items-center py-6">
                    <img
                      src={card.image}
                      alt=""
                      className="w-32 rounded-t-lg p-4"
                    />
                    <div className="p-4">
                      <h1 className="text-lg font-semibold">{card.title}</h1>
                      <p className="text-gray-700">{card.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
