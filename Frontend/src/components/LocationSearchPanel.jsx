import React from "react";

const LocationSearchPanel = ({ setPanelPosition, setVechiclePanel }) => {
  // locations array
  const locations = [
    "24B, Khulna, Bangladesh, Near Digraj Bazar, College Road, Digraj",
    "20B, Khulna, Bangladesh, Near Digraj Bazar, College Road, Digraj",
    "20A, Khulna, Bangladesh, Near Digraj Bazar, College Road, Digraj",
    "14C, Khulna, Bangladesh, Near Digraj Bazar, College Road, Digraj",
  ];
  return (
    <div>
      {locations.map((item,index) => (
        <div key={index} onClick={() => {setVechiclePanel(true);setPanelPosition(false);}} className="flex border-2 rounded-lg border-white active:border-black p-3 items-center gap-2 my-2">
          <h2 className="bg-gray-300 w-16 h-10 flex justify-center items-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <p className="font-medium">
            {item}
          </p>
        </div>
      ))}

     
    </div>
  );
};

export default LocationSearchPanel;
