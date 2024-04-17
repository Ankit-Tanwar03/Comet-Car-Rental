import React from "react";
import { fleet } from "../../Content/carRental";
import Button from "../Button";
import { useState } from "react";

function Fleet() {
  const [carDesc, setCarDesc] = useState(0);

  const handleClick = (id) => {
    setCarDesc(id);
  };

  return (
    <>
      <div className="bg-slate-200 h-[100vh]">
        <div className="flex flex-col justify-center items-center  mx-[100px]">
          <div className="text-center">
            <h3>{fleet.subtitle}</h3>
            <h1>{fleet.title}</h1>
          </div>
          <div className="flex flex-row justify-around items-center w-full h-full">
            <div className="flex flex-col justify-around items-center h-full gap-y-6">
              {fleet.carData.map((data, index) => (
                <Button
                  key={index}
                  onClick={() => handleClick(index)}
                  className="m-2 w-60"
                >
                  {data.name}
                </Button>
              ))}
            </div>
            <div>
              <img
                src={fleet.carData[carDesc].image}
                className="w-[400px]"
                alt=""
              />
            </div>
            <div>
              <div className="border border-gray-400 rounded-md">
                <div className="flex flex-col">
                  {Object.entries(fleet.carData[carDesc])
                    .filter(([key, value], index) => index !== 0)
                    .map(([key, value]) => (
                      <div key={key} className="flex border-b border-gray-300">
                        <span className="font-bold mr-2 w-[150px] py-2 border-r-2 border-gray-300 text-center">
                          {key}:
                        </span>
                        <span className="w-[200px] py-2 text-center">
                          {value}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
              <Button>Reserve Now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fleet;
