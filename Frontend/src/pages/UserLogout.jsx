import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogout = () => {
  const base_url = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const logOut = async () => {
      try {
        const response = await axios.get(`${base_url}/users/logout`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    };
    logOut();
  }, [token, navigate, base_url]);

  return <>UserLogout</>;
};

export default UserLogout;
