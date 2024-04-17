import React from "react";
import { services } from "../../Content/carRental";

function Service() {
  return (
    <>
      <div className="bg-slate-300">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h3>{services.subtitle}</h3>
            <h1>{services.title}</h1>
          </div>
          <div>
            <ul className="flex flex-wrap justify-center items-center mx-auto">
              {services.cards.map((card, index) => (
                <li key={index} className="w-[30vw]">
                  <img src={card.image} alt="" />
                  <h1>{card.title}</h1>
                  <p>{card.description}</p>
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
