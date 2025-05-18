import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const value = {
    user,
    setUser,
  };

  return (
    <div>
      <UserDataContext.Provider value={value}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserDataProvider;
