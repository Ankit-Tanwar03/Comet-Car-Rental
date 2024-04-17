import React, { useState } from "react";
import { FAQs } from "../../Content/carRental";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="bg-red-200 h-[100vh]">
        <div>
          <h1>{FAQs.title}</h1>
          <h3>{FAQs.subtitle}</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-gray-200  shadow-2xl mt-[50px] w-[50vw]">
            {FAQs.cards.map((card, index) => (
              <div key={index}>
                <p
                  onClick={() => toggleAccordion(index)}
                  className={`h-[60px] border-[1px] border-gray-300 flex justify-start items-center pl-[50px] ${
                    activeIndex === index
                      ? "max-h-[100px] transition-max-height duration-300 ease-in-out bg-slate-300 "
                      : "max-h-[100px] overflow-hidden transition-max-height duration-300 ease-in-out"
                  }`}
                >
                  {card.Q}
                </p>
                <p
                  className={`h-full border-gray-300  ${
                    activeIndex === index
                      ? "opacity-100 max-h-[200px] px-[50px] py-[20px] transition-max-height duration-500 ease-in-out bg-red-200 shadow-inner shadow-blue-300 overflow-clip"
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
