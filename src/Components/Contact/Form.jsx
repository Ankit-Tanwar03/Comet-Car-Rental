import React from "react";
import Button from "../Button";

function Form() {
  return (
    // <div className="w-[40vw] h-[65vh] p-6 bg-white rounded-lg shadow-md">
    //   <form>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 text-sm font-bold mb-2">
    //         Full Name
    //       </label>
    //       <input
    //         type="text"
    //         className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
    //         placeholder="Harry Kane"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 text-sm font-bold mb-2">
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
    //         placeholder="youremail@example.com"
    //       />
    //     </div>
    //     <div className="mb-6">
    //       <label className="block text-gray-700 text-sm font-bold mb-2">
    //         Message
    //       </label>
    //       <textarea
    //         rows="5"
    //         className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
    //         placeholder="Write your message here..."
    //       ></textarea>
    //     </div>
    //     <div className="flex items-center justify-center">
    //       <Button
    //         type="submit"
    //         className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    //       >
    //         Submit
    //       </Button>
    //     </div>
    //   </form>
    // </div>

    <div className="w-full px-4 sm:px-6 lg:px-8 m-6 sm:m-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full md:w-[40vw] xl:w-[30vw] xl:h-[65vh] p-6 bg-white rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Harry Kane"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="youremail@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
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
