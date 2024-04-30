import React from "react";
import { testimonialData } from "../Content/testimonials";

const TestimonialCard = ({ image, name, review }) => {
  return (
    <div className="h-80 sm:h-96 rounded-lg shadow-2xl my-4 bg-light-beige overflow-hidden">
      <div className="px-6 pt-8">
        <p className="h-40 sm:h-48 text-dark-gray text-lg sm:text-xl lg:text-xl mb-4 flex items-start justify-center">
          {review}
        </p>
      </div>
      <div className="h-32 sm:h-36 flex items-center justify-start px-6 py-4 bg-slate-700 shadow-lg shadow-slate-500">
        <img
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover object-center rounded-full mr-4 sm:mr-6 "
          src={image}
          alt={name}
        />
        <p className="text-white text-base font-semibold sm:text-md lg:text-lg">
          {name}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-beige py-8 lg:px-40 px-6 pt-32">
      <h1 className="text-center text-3xl lg:text-5xl mb-8 text-slate-950">
        {testimonialData.title}
      </h1>
      <h2 className="text-center text-xl lg:text-2xl mb-8 text-dark-gray">
        {testimonialData.subtitle}
      </h2>
      <p className=" text-center text-dark-gray mb-8 md:mb-16">
        {testimonialData.description}
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {testimonialData.cards.map((card, index) => (
          <TestimonialCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
