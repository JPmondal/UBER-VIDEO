import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
  // State variables to store firstname, lastname, email, password, and user data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserdata] = useState({});

  // Function to handle form submission
  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Update userData state with email and password
    setUserdata({
      fullname:{
        firstname : firstName,
        lastname : lastName
      },
      email: email,
      password: password,
    });

    // Clear input fields after submission
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  useEffect(() => {
    console.log(userData); // Log user data to the console
  }, [userData]);

  
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
          {/* Name input field */}
          <div className="mt-2">
            <p className="font-medium text-md">What's your Name</p>
            <div className="flex justify-between gap-2">
              <input
                onChange={(e) => setFirstName(e.target.value)} // Update firstname state on input change
                value={firstName} // Bind input value to firstname state
                className="bg-gray-200 w-1/2  p-3 rounded mt-2 placeholder-gray-500"
                type="text"
                placeholder="First Name"
              />
              <input
                onChange={(e) => setLastName(e.target.value)} // Update lastname state on input change
                value={lastName} // Bind input value to lastname state
                className="bg-gray-200 w-1/2 p-3 rounded mt-2 placeholder-gray-500"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

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
            Sign Up
          </button>
          {/* Link to signup page */}
          <p className="text-center mt-4 font-semibold">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login Here
            </Link>
          </p>
        </form>
      </div>
      {/* Terms and Policy */}
      <p className="text-xs leading-tight text-justify mt-4">
        By signing up, you agree to our{" "}
        <Link className="text-blue-600">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link  className="text-blue-600">
          Privacy Policy
        </Link>.
      </p>
    </div>
  );
}

export default CaptainSignUp
