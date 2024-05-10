import React from "react";
import Button from "../Button.jsx";
import { downloadApp } from "../../Content/carRental.js";
import GooglePlay from "../../assets/DownloadApp/googlePlay.svg";
import apple from "../../assets/DownloadApp/apple.svg";

function DownloadApp() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center px-4 py-8 md:py-12 bg-beige">
        <div className="w-full md:w-4/5 lg:w-3/5 xl:w-1/2 flex flex-col items-start justify-center xl:pl-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-slate-950 font-bold mb-4 ">
            {downloadApp.title}
          </h1>
          <p className="text-base md:text-lg text-dark-gray mb-6">
            {downloadApp.description}
          </p>
          <div className="flex flex-col md:flex-row gap-x-2 ml-10 sm:ml-0">
            <Button
              bgColor="bg-black"
              className="w-60 mr-4 my-1 py-4 px-4 md:px-6 lg:px-8 text-sm font-semibold rounded-sm shadow-md shadow-dark-green hover:shadow-lg hover:shadow-dark-mustard-yellow hover:transition-all ease-in-out duration-300 hover:scale-105 sm:text-md"
            >
              Get it on <br />{" "}
              <span className=" text-md md:text-lg lg:text-xl leading-loose">
                <img
                  src={GooglePlay}
                  alt=""
                  className="w-[25px] inline-block mr-2"
                />
                Google Play{" "}
              </span>{" "}
            </Button>
            <Button
              bgColor="bg-black"
              className="w-60 mr-4 my-1 py-4 px-4 md:px-6 lg:px-8 text-sm font-semibold rounded-sm shadow-md shadow-dark-green hover:shadow-lg hover:shadow-dark-mustard-yellow hover:transition-all ease-in-out duration-300 hover:scale-105 sm:text-md"
            >
              Download on <br />{" "}
              <span className=" text-md md:text-lg lg:text-xl leading-loose">
                <img
                  src={apple}
                  alt=""
                  className="w-[25px] inline-block mr-2"
                />
                App Store{" "}
              </span>{" "}
            </Button>
          </div>
        </div>
        <div className="w-full md:w-4/5 lg:w-3/5 xl:w-1/2 flex items-center justify-center">
          <img
            src={downloadApp.image}
            alt="App Image"
            className="w-[300px] my-10 md:my-0 md:w-[450px]"
          />
        </div>
      </div>
    </>
  );
}

export default DownloadApp;
