import React from "react";
import { aboutContent } from "../Content/about";
import Service from "../Components/Home/Service";

function About() {
  return (
    <>
      <div className="bg-slate-200">
        <div className="pt-[73px]">
          <h3>{aboutContent.title}</h3>
          <h1>{aboutContent.subtitle}</h1>
          <div className="flex">
            {aboutContent.cards.map((card, index) => (
              <div key={index} className="flex">
                <img src={card.image} alt={card.image} />
                <div>
                  <p>{card.num}</p>
                  <p>{card.head}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {aboutContent.description.map((desc, index) => (
              <div key={index}>
                {Array.isArray(desc) ? (
                  <ul className="list-disc pl-5">
                    {desc.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{desc}</p>
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
