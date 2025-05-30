import React, { createContext, useState } from "react";

// Create a context for Captain data
export const CaptainDataContext = createContext();

// Create a provider component
const CaptainDataProvider = ({ children }) => {
  const [captain, setCaptain] = useState({});
  const [error, setError] = useState(null);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  const value = {
    captain,
    setCaptain,
    error,
    setError,
    updateCaptain,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainDataProvider;
