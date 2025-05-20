import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUpPanel from "../components/ConfirmRidePopUpPanel";

const CaptainHome = () => {

  const ridePopUpPanelRef = useRef();
  const confirmRidePopUpPanelRef = useRef();
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopUpPanel]);
   useGSAP(() => {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopUpPanel]);

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
      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
          alt=""
        />
      </div>
      <div className="h-2/5 p-4">
        <CaptainDetails />
      </div>
      <div ref={ridePopUpPanelRef} className="absolute bottom-0 z-10 translate-y-full  w-full p-4 bg-white">
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
      <div ref={confirmRidePopUpPanelRef} className="absolute h-screen bottom-0 z-10 translate-y-full  w-full p-4 bg-white">
        <ConfirmRidePopUpPanel setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
