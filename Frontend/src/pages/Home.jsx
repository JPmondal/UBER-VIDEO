import React from "react";
import "remixicon/fonts/remixicon.css";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VechiclePanel from "../components/VechiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const panelRef = useRef();
  const panelCloseRef = useRef();
  const vechiclePanelRef = useRef()
  const confirmedRidePanelRef = useRef()
  const vechicleFoundPanelRef = useRef()
  const waitingForDriverPanelRef = useRef()


  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelPosition, setPanelPosition] = useState(false);
  const [vechiclePanel, setVechiclePanel] = useState(false);
  const [confirmedRidePanel,setconfirmedRidePanel] = useState(false)
  const [vechicleFoundPanel, setVechicleFoundPanel] = useState(false);
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);



  useGSAP(
    function () {
      if (panelPosition) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding : 24
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding : 0
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelPosition]
  );

  useGSAP(()=>{
    if(vechiclePanel){
      gsap.to(vechiclePanelRef.current,{
      transform : 'translateY(0)'
    })
    }else{
      gsap.to(vechiclePanelRef.current,{
      transform : 'translateY(100%)'
    })
    }
  },[vechiclePanel])

    useGSAP(()=>{
    if(confirmedRidePanel){
      gsap.to(confirmedRidePanelRef.current,{
      transform : 'translateY(0)'
    })
    }else{
     gsap.to(confirmedRidePanelRef.current,{
      transform : 'translateY(100%)'
    })
    }
  },[confirmedRidePanel])

     useGSAP(()=>{
    if(vechicleFoundPanel){
      gsap.to(vechicleFoundPanelRef.current,{
      transform : 'translateY(0)'
    })
    }else{
     gsap.to(vechicleFoundPanelRef.current,{
      transform : 'translateY(100%)'
    })
    }
  },[vechicleFoundPanel])

       useGSAP(()=>{
    if(waitingForDriverPanel){
      gsap.to(waitingForDriverPanelRef.current,{
      transform : 'translateY(0)'
    })
    }else{
     gsap.to(waitingForDriverPanelRef.current,{
      transform : 'translateY(100%)'
    })
    }
  },[waitingForDriverPanel])

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Uber logo */}
      <img
        className="w-20 absolute top-4 left-4"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="w-screen h-screen">
        <img
          className="w-full h-full object-cover"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
          alt=""
        />
      </div>
      <div className=" absolute top-0 flex flex-col justify-end h-screen">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            onClick={(e) => setPanelPosition(false)}
            ref={panelCloseRef}
            className="absolute w-10 h-10 bg-gray-300 flex justify-center items-center rounded-full font-bold top-4 right-4"
          >
            <i className="ri-arrow-down-line"></i>
          </h5>
          <h3 className="font-bold text-2xl">Find a Trip</h3>
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <input
              onChange={(e) => setPickup(e.target.value)}
              value={pickup}
              onClick={(e) => setPanelPosition(true)}
              type="text"
              placeholder="Add pickup Location"
              className="bg-gray-200 px-3 py-2 rounded-lg w-full mt-2"
            />
            <input
              onChange={(e) => setDestination(e.target.value)}
              value={destination}
              onClick={(e) => setPanelPosition(true)}
              type="text"
              placeholder="Enter your destination"
              className="bg-gray-200 px-3 py-2 rounded-lg w-full mt-2"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel setVechiclePanel={setVechiclePanel}  setPanelPosition={setPanelPosition} />
        </div>
      </div>
      <div ref={vechiclePanelRef} className="absolute bottom-0 z-10 translate-y-full w-full p-4 bg-white">
        
          <VechiclePanel setVechiclePanel={setVechiclePanel} setconfirmedRidePanel={setconfirmedRidePanel} />

      </div>
       <div ref={confirmedRidePanelRef} className="absolute bottom-0 z-10 translate-y-full w-full p-4 bg-white">
        
          <ConfirmedRide  setconfirmedRidePanel={setconfirmedRidePanel} setVechicleFoundPanel={setVechicleFoundPanel}/>

      </div>
      <div ref={vechicleFoundPanelRef}  className="absolute bottom-0 z-10 translate-y-full w-full p-4 bg-white">

      <LookingForDriver setWaitingForDriverPanel={setWaitingForDriverPanel}/>

      </div>
      <div ref={waitingForDriverPanelRef}  className="absolute bottom-0 z-10 translayfute-y-full w-full p-4 bg-white">

      < WaitingForDriver />

      </div>
      
    </div>
  );
};

export default Home;
