import axios from "axios";
import React, { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; 

const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isUser, setIsUser] = useState(null);

  useEffect(()=>{
    const userCheck = async () =>{
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,{
            headers: { Authorization: `Bearer ${token}` },
          })
          console.log(response)
          if(response.data.user){
            setIsUser(true)
          }else{
            setIsUser(false)
            navigate("/login")
          }
      } catch (error) {
        console.log(error);
        setIsUser(false)
        navigate("/login")
      }
    }

    if(!token){
      setIsUser(false)
      navigate("/login")
    }else{
      userCheck()
    }

  },[token,navigate])

  useEffect(()=>{
    if(isUser === false){
      navigate("/login")
    }
  },[isUser,navigate])

  if(isUser === null){
    return <div>Loading...</div>;
  }


  return <>{children}</>;
};

export default UserProtectedWrapper;
