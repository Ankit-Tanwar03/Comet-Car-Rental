import React, { useState } from "react";
import { FAQs } from "../../Content/carRental.js";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="bg-light-beige pb-20">
        <div className="flex flex-col items-center justify-center pt-20 mx-5 lg:mx-60 xl:mx-96">
          <h1 className="text-slate-950 text-3xl pb-12">{FAQs.title}</h1>
          <h3 className="text-lg pb-14">{FAQs.subtitle}</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-teal-950 opacity-90 text-white shadow-2xl w-11/12 sm:w-4/5 lg:w-1/2">
            {FAQs.cards.map((card, index) => (
              <div key={index}>
                <p
                  onClick={() => toggleAccordion(index)}
                  className={` border-[1px] border-teal-800 flex justify-start items-center px-6 md:px-12 py-5  ${
                    activeIndex === index
                      ? "max-h-[100px] transition-max-height duration-300 ease-in-out bg-dark-green "
                      : "max-h-[100px] overflow-hidden transition-max-height duration-300 ease-in-out"
                  }`}
                >
                  {card.Q}
                </p>
                <p
                  className={`h-full ${
                    activeIndex === index
                      ? " text-slate-950 max-h-[600px] px-10 py-10 transition-max-height duration-500 ease-in-out bg-beige shadow-inner shadow-dark-mustard-yellow overflow-clip"
                      : "opacity-0 max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out"
                  }`}
                >
                  {card.A}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
