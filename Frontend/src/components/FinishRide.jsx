import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = ({setFinishRidePanel}) => {
    return (
    <>
    <h5 className='text-center font-bold text-2xl' onClick={()=>setFinishRidePanel(false)}><i className="ri-arrow-drop-down-line"></i></h5>
      <h1 className="font-bold text-2xl">Finish Ride</h1>
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
      
        <Link to={'/captain-riding'}
         
          className="flex justify-center w-full bg-green-600 font-bold p-2 mt-2 rounded-lg text-white"
        >
          Complete Ride
        </Link>
        
      </div>
    </>
  );
}

export default FinishRide
