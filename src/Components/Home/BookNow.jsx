import React, { useState } from "react";
import Button from "../Button";
import bgImage from "../../assets/Book Car/bgImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import info from "../../assets/Book Car/info.svg";

import { fleet } from "../../Content/carRental";
import { locations } from "../../Content/carRental";

function BookNow() {
  const [selectCar, setSelectCar] = useState(fleet.carData[0].name);
  const [pickUpLocation, setpickUpLocation] = useState(locations.cities[0]);
  const [dropOffLocation, setdropOffLocation] = useState(locations.cities[0]);
  const [pickUpDate, setpickUpDate] = useState("");
  const [dropOffDate, setdropOffDate] = useState("");
  const [pickUpTime, setpickUpTime] = useState("");
  const [dropOffTime, setdropOffTime] = useState("");
  const [timeError, setTimeError] = useState(false);
  const [fieldError, setFieldError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [carImageId, setcarImageId] = useState(0);
  const [totalDays, setTotalDays] = useState(1);
  const [formSubmitted, setformSubmitted] = useState(false);
  const [bookingID, setBookingID] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    phoneNo: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const handleClick = (e) => {
    if (
      (selectCar ||
        pickUpLocation ||
        dropOffLocation ||
        pickUpDate ||
        dropOffDate) === ""
    ) {
      setFieldError(true);
    } else if (dropOffDate < pickUpDate) {
      setDateError(true);
    } else {
      setFieldError(false);
      setDateError(false);
      if (pickUpDate && dropOffDate) {
        calculateTotalDays(pickUpDate, dropOffDate);
      }
      handleOpen();
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((pickUpTime || dropOffTime) === "") {
      setTimeError(true);
    } else {
      console.log(formData);
      handleClose();
      setformSubmitted(true);
      setBookingID(generateBookingId());
      setFieldError(false);
      setTimeError(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleImage = (selectedIndex) => {
    setcarImageId(selectedIndex);
  };

  const calculateTotalDays = (pickUpDate, dropOffDate) => {
    const startDate = new Date(pickUpDate);
    const endDate = new Date(dropOffDate);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      console.error("Invalid date format");
      return;
    }

    const difference = endDate - startDate;
    if (isNaN(difference)) {
      console.error("Invalid date difference");
      return;
    }

    if (difference == 0) {
      const totalDays = 1;
      setTotalDays(totalDays);
    } else {
      const totalDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setTotalDays(totalDays);
    }
  };

  const generateBookingId = () => {
    const numbers = "0123456789";
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let bookingId = "";

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      bookingId += numbers[randomIndex];
    }

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * alphabets.length);
      bookingId += alphabets[randomIndex];
    }

    bookingId = shuffleString(bookingId);

    return bookingId;
  };

  function shuffleString(str) {
    const array = str.split("");
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
  }
  return (
    <>
      <div id="Booknow" className="bg-beige flex justify-center items-center">
        <div
          className="bg-dark-gray mx-4 mt-16 md:mx-8 lg:mx-20 p-8 md:p-12 rounded-lg shadow-2xl shadow-mustard-yellow w-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-5 text-white">
            Book a Car
          </h2>
          {formSubmitted && (
            <p className="text-md text-center text-cyan-900 font-semibold py-2 border rounded-lg bg-beige opacity-80 mb-5">
              Booking Confirmed! Your Booking ID is{" "}
              <span className="text-red">{bookingID}</span>.{" "}
              <span className="block">
                Please check your email for more details.
              </span>
            </p>
          )}
          {fieldError && (
            <p className="text-[#FF4D30] text-sm">
              <span className="text-[#FF4D30] text-base">*</span> Please fill
              all the required fields.
            </p>
          )}
          {dateError && (
            <p className="text-[#FF4D30] text-sm">
              <span className="text-[#FF4D30] text-base">*</span> Drop date
              cannot be selected before pick up date.
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col justify-center items-start">
              <label className="py-4 font-semibold text-white">
                Select a Car <span className="text-[#FF4D30]">*</span>
              </label>
              <select
                value={selectCar}
                onChange={(e) => {
                  const selectedIndex = e.target.selectedIndex;
                  setSelectCar(e.target.value);
                  handleImage(selectedIndex);
                }}
                className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:border-dark-green"
              >
                {fleet.carData.map((car, index) => (
                  <option key={index}>{car.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="py-4 font-semibold text-white">
                Pick-up Location <span className="text-[#FF4D30]">*</span>
              </label>
              <select
                value={pickUpLocation}
                onChange={(e) => setpickUpLocation(e.target.value)}
                className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:border-dark-green"
              >
                {locations.cities.map((city, index) => (
                  <option key={index}>{city}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="py-4 font-semibold text-white">
                Drop-off Location <span className="text-[#FF4D30]">*</span>
              </label>
              <select
                value={dropOffLocation}
                onChange={(e) => setdropOffLocation(e.target.value)}
                className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:border-dark-green"
              >
                {locations.cities.map((city, index) => (
                  <option key={index}>{city}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="py-4 font-semibold text-white">
                Pick-up Date <span className="text-[#FF4D30]">*</span>
              </label>
              <input
                type="date"
                value={pickUpDate}
                onChange={(e) => setpickUpDate(e.target.value)}
                className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:border-dark-green"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="py-4 font-semibold text-white">
                Drop-off Date <span className="text-[#FF4D30]">*</span>
              </label>
              <input
                type="date"
                value={dropOffDate}
                onChange={(e) => setdropOffDate(e.target.value)}
                className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:border-dark-green"
              />
            </div>
            <div
              onClick={handleClick}
              className="flex flex-col justify-center items-start pt-14"
            >
              <Button
                bgColor="bg-dark-green"
                className="w-full py-3 px-4 sm:px-8 text-sm font-semibold shadow-md shadow-dark-green hover:shadow-lg hover:shadow-dark-mustard-yellow hover:transition-all ease-in-out duration-300 hover:scale-105 sm:text-md"
              >
                Book Ride
                <FontAwesomeIcon icon={faCircleCheck} className="pl-1" />
              </Button>
            </div>
            <p className="text-white text-sm pt-5">
              <span className="text-[#FF4D30] text-base">*</span> Mandatory
              fields
            </p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 overflow-y-scroll">
          <div className="bg-beige w-full md:w-2/3 relative border-2 rounded-sm mt-[1100px] sm:mt-[800px] md:mt-[900px] xl:mt-[700px]">
            <button onClick={handleClose} className="absolute top-2 right-2 ">
              <FontAwesomeIcon icon={faCircleXmark} className="text-white" />
            </button>
            <h1 className="text-3xl font-bold bg-dark-green text-white p-6 ">
              Complete Reservation
            </h1>

            <div className="bg-light-beige p-5 font-semibold text-slate-950 border border-dark-green">
              <p className="flex items-start">
                <img src={info} className="w-6 mt-1 mr-2" />
                Upon completing this reservation enquiry, you will receive your
                rental voucher on arrival at the rental desk and a toll-free
                customer support number.
              </p>
            </div>

            <div className="py-5 sm:py-10 px-4 sm:px-10  border-b border-dark-green flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:items-start">
              <div className="flex flex-col items-start">
                {timeError && (
                  <p className="text-[#FF4D30] text-sm mb-3 sm:mb-5">
                    <span className="text-[#FF4D30] text-base">*</span> Please
                    select the time.
                  </p>
                )}
                <div className="mb-3 sm:mb-5">
                  <h3 className="text-slate-950 font-bold">
                    Pick-Up Date & Time{" "}
                    <span className="text-[#FF4D30] text-base">*</span>
                  </h3>
                  <h4 className="text-dark-green font-semibold">
                    {pickUpDate}
                  </h4>
                  <label htmlFor="time" className="mr-2 text-dark-gray">
                    Select Time:
                  </label>
                  <input
                    onChange={(e) => setpickUpTime(e.target.value)}
                    value={pickUpTime}
                    type="time"
                    className="border-2 rounded px-2 focus:border-dark-gray"
                  />
                </div>
                <div className="mb-3 sm:mb-5">
                  <h3 className="text-slate-950 font-bold">
                    Drop-Off Date & Time{" "}
                    <span className="text-[#FF4D30] text-base">*</span>
                  </h3>
                  <h4 className="text-dark-green font-semibold">
                    {dropOffDate}
                  </h4>
                  <label htmlFor="time" className="mr-2 text-dark-gray">
                    Select Time:
                  </label>
                  <input
                    onChange={(e) => setdropOffTime(e.target.value)}
                    value={dropOffTime}
                    type="time"
                    className="border-2 rounded px-2 focus:border-dark-gray"
                  />
                </div>
                <div className="mb-3 sm:mb-5">
                  <h3 className="text-slate-950 font-bold">Pick-Up Location</h3>
                  <h4 className="text-dark-green font-semibold">
                    {pickUpLocation}
                  </h4>
                </div>
                <div className="mb-3 sm:mb-5">
                  <h3 className="text-slate-950 font-bold">
                    Drop-Off Location
                  </h3>
                  <h4 className="text-dark-green font-semibold">
                    {dropOffLocation}
                  </h4>
                </div>
              </div>
              <div className="ml-8 md:ml-24 lg:ml-32 xl:ml-64">
                <h3 className="text-center text-dark-green font-semibold">
                  <span className="font-bold text-slate-950">
                    Selected Car:{" "}
                  </span>
                  {selectCar}
                </h3>
                {carImageId !== null && (
                  <img
                    src={fleet.carData[carImageId].image}
                    alt={fleet.carData[carImageId].name}
                    className="w-72 md:w-96"
                  />
                )}
                <h3 className="text-center text-2xl mt-4">
                  <span className="font-semibold">Total Rent: </span>
                  <span className="text-dark-green font-semibold">
                    ${totalDays * fleet.carData[carImageId].rent}
                  </span>
                  <span>
                    {" "}
                    for{" "}
                    <span className="text-dark-green font-semibold">
                      {totalDays}
                    </span>{" "}
                    days.{" "}
                  </span>
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <div className="mb-4">
                <label htmlFor="fullName" className="block mb-2 font-semibold">
                  Full Name <span className="text-[#FF4D30] text-base">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="block mb-2 font-semibold">
                  Age <span className="text-[#FF4D30] text-base">*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min={18}
                  max={65}
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email <span className="text-[#FF4D30] text-base">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNo" className="block mb-2 font-semibold">
                  Phone Number{" "}
                  <span className="text-[#FF4D30] text-base">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block mb-2 font-semibold">
                  Address <span className="text-[#FF4D30] text-base">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="city" className="block mb-2 font-semibold">
                    City <span className="text-[#FF4D30] text-base">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block mb-2 font-semibold">
                    Country <span className="text-[#FF4D30] text-base">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="zipCode" className="block mb-2 font-semibold">
                  Zip Code <span className="text-[#FF4D30] text-base">*</span>
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="text-right flex justify-between">
                <p className="text-black text-sm pt-5">
                  <span className="text-[#FF4D30] text-base">*</span> Mandatory
                  fields
                </p>
                <Button
                  type="submit"
                  bgColor="bg-black"
                  className="mr-4 my-2 py-4 px-4 sm:px-8 text-sm font-semibold shadow-md shadow-dark-green hover:shadow-lg hover:shadow-dark-mustard-yellow hover:transition-all ease-in-out duration-300 hover:scale-105 sm:text-md"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default BookNow;
