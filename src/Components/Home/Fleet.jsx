import React from "react";
import { fleet } from "../../Content/carRental";
import Button from "../Button";
import { useState } from "react";

function Fleet() {
  const [carDesc, setCarDesc] = useState(0);

  const handleClick = (id) => {
    setCarDesc(id);
  };

  const handleButton = () => {
    const BookNowSection = document.getElementById("Booknow");
    if (BookNowSection) {
      BookNowSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-light-beige md:h-full lg:py-12">
        <div className="flex flex-col justify-center items-center lg:mx-24">
          <div className="text-center p-4">
            <h3 className="text-dark-gray text-xl pb-6">{fleet.subtitle}</h3>
            <h1 className="text-3xl lg:text-5xl text-slate-950 pb-8 lg:pb-20">
              {fleet.title}
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-around items-center w-full lg:gap-x-12">
            <div className="flex flex-col justify-around items-center gap-y-3 lg:h-full">
              {fleet.carData.map((data, index) => (
                <Button
                  key={index}
                  onClick={() => handleClick(index)}
                  // bgColor="bg-dark-green"
                  className={`my-2 py-4 px-4 w-60 h-16 sm:px-8 text-sm font-semibold shadow-md shadow-dark-green hover:shadow-lg hover:shadow-dark-green hover:transition-all ease-in-out duration-300 hover:scale-105 sm:text-md rounded-sm ${
                    index === carDesc ? "bg-slate-950" : "bg-dark-green"
                  }`}
                >
                  {data.name}
                </Button>
              ))}
            </div>
            <div>
              <img
                src={fleet.carData[carDesc].image}
                className="w-[300px] md:w-[500px] sm:w-full"
                alt={fleet.carData[carDesc].name}
              />
            </div>
            <div>
              <div className="flex flex-col justify-around items-center w-80 sm:w-96 hover:shadow-2xl ">
                {Object.entries(fleet.carData[carDesc])
                  .filter(([key, value], index) => index !== 0)
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="flex border border-black bg-white "
                    >
                      <span className="text-sm sm:text-base font-bold w-40 sm:w-48 py-2 border-r-2 border-black text-center capitalize ">
                        {key}
                      </span>
                      <span className="text-sm w-40 sm:w-48 py-2 text-center ">
                        {value}
                      </span>
                    </div>
                  ))}

                <div onClick={handleButton}>
                  <Button
                    bgColor="bg-dark-green"
                    className="my-6 mb-12 lg:my-2 lg:mb-0 py-4 px-4 w-80 sm:w-96 h-16 sm:px-8 text-xl text-white rounded-sm border-2 border-slate-950 font-semibold hover:bg-slate-950 hover:shadow-lg hover:shadow-dark-mustard-yellow hover:transition-all ease-in-out duration-300  sm:text-md"
                  >
                    Reserve Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fleet;
