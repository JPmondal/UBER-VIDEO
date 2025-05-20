import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ConfirmRidePopUpPanel = ({ setConfirmRidePopUpPanel }) => {

const [otp, setOtp] = useState('');

const onSubmitHandler = (e) => {
  e.preventDefault()
}

  return (
    <>
      <h1 className="font-bold text-2xl">Confirm this Ride to Start</h1>
      <div className="flex justify-between items-center my-4 bg-yellow-300 p-4 rounded-lg">
        <div className="flex gap-4 items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-G3WLAQ7PAjcLp8Qusd1u69BUjaL_5zJfw&s"
            alt=""
          />
          <p className="font-semibold text-lg">Harshiya Pateliya</p>
        </div>
        <p className="font-bold text-lg">2.2 KM</p>
      </div>

      <div className="">
        <div className="flex gap-4 border-b-2 p-2">
          <h5 className="flex justify-center items-center font-bold text-2xl">
            <i className="ri-map-pin-line"></i>
          </h5>
          <div>
            <h2 className="font-bold text-2xl">562/11-A</h2>
            <p className="text-gray-500 text-base">Lanariya Talab, Bhopal</p>
          </div>
        </div>
        <div className="flex gap-4 border-b-2 p-2">
          <h5 className="flex justify-center items-center font-bold text-2xl">
            <i className="ri-map-pin-fill"></i>
          </h5>
          <div>
            <h2 className="font-bold text-2xl">252/15-B</h2>
            <p className="text-gray-500 text-base">Burirdanga Mongla</p>
          </div>
        </div>
        <div className="flex gap-4 p-2">
          <h5 className="flex justify-center items-center font-bold text-2xl">
            <i className="ri-currency-line"></i>
          </h5>
          <div>
            <h2 className="font-bold text-2xl">$193.20</h2>
            <p className="text-gray-500 text-base">Cash Cash</p>
          </div>
        </div>
      </div>
    
      <div>
        <form onSubmit={(e)=>onSubmitHandler(e)} >
            <input value={otp} onChange={(e) => setOtp(e.target.value)}  className="bg-gray-200 px-3 py-2 rounded-lg w-full mt-2" type="text" placeholder="Enter OTP" />
            <Link
          to={"/captain-riding"}
          onClick={(e) => {}}
          className="flex justify-center w-full mt-2 bg-yellow-400 font-bold p-2 rounded-lg text-white"
        >
          Confirm
        </Link>
        <button
          onClick={(e) => {
            setConfirmRidePopUpPanel(false);
          }}
          className="w-full bg-red-600 font-bold p-2 mt-2 rounded-lg text-white"
        >
          Cancel
        </button>
        </form>
      </div>
    </>
  );
};

export default ConfirmRidePopUpPanel;
