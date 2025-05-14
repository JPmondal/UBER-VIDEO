import React, { createContext } from "react";

export const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
  return (
    <div>
      <UserDataContext.Provider value={value}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserDataProvider;
