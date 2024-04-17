import React from "react";
import { whyChooseUs } from "../../Content/carRental";
import Button from "../Button";

function WhyChooseUs() {
  return (
    <>
      <div>
        <div>
          <img src={whyChooseUs.image} alt="" />
        </div>
        <div className="flex flex-row justify-center items-center">
          <div>
            <h3>{whyChooseUs.subtitle}</h3>
            <h1>{whyChooseUs.title}</h1>
            <p>{whyChooseUs.description}</p>
            <Button>{whyChooseUs.buttonTitle}</Button>
          </div>
          <div className="flex flex-col justify-center items-center">
            {whyChooseUs.cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-start"
              >
                <img src={card.image} alt="" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
