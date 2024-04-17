import React from "react";
import { hero } from "../../Content/carRental";
import Button from "../Button";

function Hero() {
  return (
    <>
      <div className="bg-slate-500">
        <div className="flex justify-center items-center mx-auto">
          <div>
            <h3>{hero.subtitle}</h3>
            <h1>{hero.title}</h1>
            <p>{hero.description}</p>
            <Button>Book Ride</Button>
            <Button>Learn More</Button>
          </div>
          <div>
            <img src={hero.image} alt="Herocar" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
