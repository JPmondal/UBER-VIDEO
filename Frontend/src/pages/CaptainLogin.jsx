import React from "react";
import {  useState,useContext } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  // State variables to store email, password, and user data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {captain,setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();

  // Function to handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Update userData state with email and password
    const captainData = {
      email: email,
      password: password,
    };

    const response = await  axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,captainData)

      console.log(response);

      if(response.status === 200){
        const data = response.data;
        setCaptain(data.captain);
      
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }

    // Clear input fields after submission
    setEmail("");
    setPassword("");
  };



  return (
    <div className="p-6 flex flex-col justify-between h-screen">
      <div>
        {/* Uber logo */}
        <img
          className="w-20"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        {/* Login form */}
        <form onSubmit={(e) => onSubmitHandler(e)} className="mt-6">
          {/* Email input field */}
          <div className="mt-2">
            <p className="font-medium text-md">What's your email</p>
            <input
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              value={email} // Bind input value to email state
              className="bg-gray-200 w-full p-3 rounded mt-2 placeholder-gray-500"
              type="email"
              placeholder="email@example.com"
            />
          </div>
          {/* Password input field */}
          <div className="mt-2">
            <p className="font-medium text-md">Enter your Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)} // Update password state on input change
              value={password} // Bind input value to password state
              className="bg-gray-200 w-full p-3 rounded mt-2 placeholder-gray-500"
              type="password"
              placeholder="password"
            />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-black text-white mt-4 p-3 text-md font-bold rounded"
          >
            Log In
          </button>
          {/* Link to signup page */}
          <p className="text-center mt-4 font-semibold">
            Join a fleet?{" "}
            <Link to="/captain-signup" className="text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      {/* Link to captain login page */}
      <Link
        to="/login"
        className="w-full bg-orange-600 font-bold text-center p-3 rounded text-white"
      >
        Sign in as User
      </Link>
    </div>
  );
};

export default CaptainLogin;
