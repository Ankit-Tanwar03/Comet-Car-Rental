import React from "react";
import { testimonialData } from "../Content/testimonials";

const TestimonialCard = ({ image, name, review }) => {
  return (
    // <div className="h-[35vh] rounded shadow-lg mx-auto my-4 bg-white">
    //   <div className="px-6 py-4">
    //     <p className="text-gray-700 text-2xl mb-4">{review}</p>
    //   </div>
    //   <div className="flex items-center justify-start px-6 py-4 bg-gray-100">
    //     <img
    //       className="w-16 h-16 object-cover object-center rounded-full mr-6"
    //       src={image}
    //       alt={name}
    //     />
    //     <p className="text-gray-900 text-lg">{name}</p>
    //   </div>
    // </div>

    <div className="h-[45vh] sm:h-[50vh] rounded-lg shadow-lg mx-auto my-4 bg-white overflow-hidden">
      <div className="px-6 py-4">
        <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl mb-4">
          {review}
        </p>
      </div>
      <div className="flex items-center justify-start px-6 py-4 bg-gray-100">
        <img
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover object-center rounded-full mr-4 sm:mr-6"
          src={image}
          alt={name}
        />
        <p className="text-gray-900 text-base sm:text-lg lg:text-xl">{name}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    // <div className="bg-gray-200 py-8 lg:px-40 px-10 pt-[73px]">
    //   <h1 className="text-center text-3xl font-bold mb-4">
    //     {testimonialData.title}
    //   </h1>
    //   <h2 className="text-center text-xl mb-8">{testimonialData.subtitle}</h2>
    //   <p className="max-w-2xl mx-auto text-center text-gray-700 mb-8">
    //     {testimonialData.description}
    //   </p>
    //   <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
    //     {testimonialData.cards.map((card, index) => (
    //       <TestimonialCard key={index} {...card} />
    //     ))}
    //   </div>
    // </div>

    <div className="bg-gray-200 py-8 lg:px-40 px-6 pt-[73px]">
      <h1 className="text-center text-3xl lg:text-4xl font-bold mb-4">
        {testimonialData.title}
      </h1>
      <h2 className="text-center text-xl lg:text-2xl mb-8">
        {testimonialData.subtitle}
      </h2>
      <p className="max-w-lg mx-auto text-center text-gray-700 mb-8">
        {testimonialData.description}
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {testimonialData.cards.map((card, index) => (
          <TestimonialCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
