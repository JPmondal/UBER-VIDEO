import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen w-full">
        <Link to={'/home'} className="fixed top-3 right-4 z-10 bg-white h-10 w-10 flex items-center justify-center rounded-full">
        <i className="font-bold text-lg ri-home-2-line"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className='flex justify-between items-center'>
       <img className="w-28" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
       <div>
        <h3 className='font-semibold text-lg text-right text-gray-800'>Sarthak</h3>
        <h1 className='font-bold text-2xl'>MP04 AB 1234</h1>
        <p className='text-gray-500 text-base text-right'>Maruti Suzuki Alto</p>
       </div>
    </div>
    <div className=''>
        
        <div className='flex gap-4 border-b-2 p-2'>
            <h5 className='flex justify-center items-center font-bold text-2xl'><i className="ri-map-pin-fill"></i></h5>
            <div>
                <h2 className='font-bold text-2xl'>252/15-B</h2>
                <p className='text-gray-500 text-base'>Burirdanga Mongla</p>
            </div>
        </div>
        <div className='flex gap-4 p-2'>
            <h5 className='flex justify-center items-center font-bold text-2xl'><i className="ri-currency-line"></i></h5>
            <div>
                <h2 className='font-bold text-2xl'>$193.20</h2>
                <p className='text-gray-500 text-base'>Cash Cash</p>
            </div>
        </div>
    </div>
      <button className="w-full bg-green-400 font-bold p-2 rounded-lg text-white">Make a Payment</button>

      </div>
    </div>
  );
};

export default Riding;
