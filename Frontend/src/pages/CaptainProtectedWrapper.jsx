import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isCaptain, setIsCaptain] = useState(null);

  useEffect(() => {
    const captainCheck = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log(response);

        if (response.data.captain) {
          setIsCaptain(true);
        } else {
          setIsCaptain(false);
        }
      } catch (error) {
        console.log(error);
        setIsCaptain(false);
      }
    };

    if (!token) {
      setIsCaptain(false);
    } else {
      captainCheck();
    }
  }, [token]);

  useEffect(() => {
    if (isCaptain === false) {
      navigate("/captain-login");
    }
  }, [isCaptain, navigate]);

  if(isCaptain === null){
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
