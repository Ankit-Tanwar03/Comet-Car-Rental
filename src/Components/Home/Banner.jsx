import React from "react";

function Banner() {
  return (
    <div className="bg-teal-950 text-white  flex flex-col items-center justify-center lg:h-64 py-10">
      <h1 className="text-xl sm:text-3xl lg:text-5xl text-center px-6 lg:px-0 pb-4 lg:pb-10 font-semibold">
        Save big with our cheap car rental!
      </h1>
      <h3 className="text-sm sm:text-lg lg:text-2xl text-center px-6 lg:px-0">
        Top Airports. Local Suppliers.{" "}
        <span className="text-mustard-yellow">24/7</span> Support.
      </h3>
    </div>
  );
}

export default Banner;
