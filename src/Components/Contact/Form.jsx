import React from "react";
import Button from "../Button";

function Form() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 m-6 sm:m-0 bg-light-beige rounded-lg shadow-2xl lg:h-[500px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full md:w-4/5 xl:w-full xl:h-[65vh] p-6">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-mustard-yellow focus:border-dark-green"
                placeholder="Harry Kane"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-mustard-yellow focus:border-dark-green"
                placeholder="youremail@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-3 py-2 max-h-40 leading-tight border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-mustard-yellow focus:border-dark-green"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                bgColor="bg-dark-green"
                className="mr-4 my-2 py-4 px-4 sm:px-8 text-sm font-semibold shadow-md shadow-dark-green hover:shadow-lg hover:shadow-dark-mustard-yellow hover:transition-all ease-in-out duration-300 hover:scale-105 sm:text-md"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
