import React from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {

  const finishRidePanelRef = useRef();
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="fixed p-4 top-0 left-0 w-full flex justify-between items-center">
        <img
          className="w-20 top-4 left-4"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to={"/home"}
          className=" bg-white h-10 w-10 flex items-center justify-center rounded-full"
        >
          <i className="font-bold text-lg ri-logout-circle-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
          alt=""
        />
      </div>
      <div onClick={() => setFinishRidePanel(true)} className="h-1/5 p-4 bg-yellow-400">
        <h5 className="text-center">
          <i className="p-2 rounded-full bg-white font-semibold text-lg ri-arrow-up-line"></i>
        </h5>
        <div className="flex justify-between mt-3">
          <p className="font-bold text-2xl">4 KM away</p>
          <button className="bg-green-600 px-4 py-2 rounded-lg font-bold text-white">
            Complete Ride
          </button>
        </div>
      </div>
      <div
        ref={finishRidePanelRef}
        className="absolute bottom-0 z-10 translate-y-full  w-full p-4 bg-white"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
};

export default CaptainRiding;
