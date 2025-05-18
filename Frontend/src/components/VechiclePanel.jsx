import React from 'react'

const VechiclePanel = ({setVechiclePanel,setconfirmedRidePanel}) => {
  return (
    <>
      <h5 onClick={(e) => setVechiclePanel(false)} className="text-center text-2xl mb-1 "><i className="ri-arrow-down-s-line"></i></h5>
        <h1 className="font-bold text-2xl">Choose Your Vechicle</h1>
          <div onClick={(e)=>{setVechiclePanel(false);setconfirmedRidePanel(true)}} className="flex items-center justify-between w-full bg-white border-2  active:border-black rounded-lg px-2 py-3 my-2">
            <img className="w-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
            <div className=" w-1/2">
              <h2 className="font-semibold text-2xl">UberGo <span className="font-light text-[15px]"><i className="ri-user-fill"></i>4</span></h2>
              <p className="font-semibold">2 mins away</p>
              <p className="text-xs">Affordable, compact rides</p>
            </div>
            <h1 className="text-2xl font-semibold">$250</h1>
          </div>
           <div onClick={(e)=>{setVechiclePanel(false);setconfirmedRidePanel(true)}} className="flex items-center justify-between w-full bg-white border-2  active:border-black rounded-lg px-2 py-3 my-2">
            <img className="w-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className=" w-1/2">
              <h2 className="font-semibold text-2xl">UberAuto <span className="font-light text-[15px]"><i className="ri-user-fill"></i>4</span></h2>
              <p className="font-semibold">2 mins away</p>
              <p className="text-xs">Affordable, compact rides</p>
            </div>
            <h1 className="text-2xl font-semibold">$50</h1>
          </div>
          <div onClick={(e)=>{setVechiclePanel(false);setconfirmedRidePanel(true)}} className="flex items-center justify-between w-full bg-white border-2  active:border-black rounded-lg px-2 py-3 my-2">
            <img className="w-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className=" w-1/2">
              <h2 className="font-semibold text-2xl">UberMoto <span className="font-light text-[15px]"><i className="ri-user-fill"></i>2</span></h2>
              <p className="font-semibold">2 mins away</p>
              <p className="text-xs">Affordable, compact rides</p>
            </div>
            <h1 className="text-2xl font-semibold">$120</h1>
          </div>
    </>
  )
}

export default VechiclePanel
