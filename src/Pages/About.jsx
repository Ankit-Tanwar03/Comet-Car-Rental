import React, { useEffect } from "react";
import { aboutContent } from "../Content/about.js";
import Service from "../Components/Home/Service.jsx";

function About() {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }

    scrollToTop();
    return () => {
      window.removeEventListener("load", scrollToTop);
    };
  }, []);
  return (
    <>
      <div className="bg-light-beige pb-12 pt-20 sm:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-0">
          <h3 className="text-lg lg:text-xl text-center text-dark-gray mb-6 lg:mb-10">
            {aboutContent.title}
          </h3>
          <h1 className="text-3xl lg:text-5xl text-center text-slate-950 mb-12 lg:mb-20">
            {aboutContent.subtitle}
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-20 mb-12 lg:mb-20">
            {aboutContent.cards.map((card, index) => (
              <div
                key={index}
                className="bg-beige rounded-lg shadow-2xl p-4 lg:p-6 flex items-center w-60 min-w-56"
              >
                <img
                  src={card.image}
                  alt={card.image}
                  className="w-10 h-10 lg:w-16 lg:h-16 mr-4 rounded-full"
                />
                <div>
                  <p className="text-base lg:text-lg text-slate-900 font-semibold mb-1">
                    {card.num}
                  </p>
                  <p className="text-dark-gray">{card.head}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-5xl">
            {aboutContent.description.map((desc, index) => (
              <div key={index} className="mb-4 lg:mb-6">
                {Array.isArray(desc) ? (
                  <ul className="list-disc pl-5">
                    {desc.map((item, idx) => (
                      <li key={idx} className="text-dark-gray text-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-dark-gray text-lg">{desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Service />
    </>
  );
}

export default About;
