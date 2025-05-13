import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const UserLogin = () => {
  // State variables to store email, password, and user data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserdata] = useState({});

  // Function to handle form submission
  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Update userData state with email and password
    setUserdata({
      email: email,
      password: password,
    });

    // Clear input fields after submission
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
      console.log(userData); // Log user data to the console
  },[userData])

  return (
    <div className="p-6 flex flex-col justify-between h-screen">
      <div>
        {/* Uber logo */}
        <img
          className="w-20 mt-4"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
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
            New here?{" "}
            <Link to="/signup" className="text-blue-600">
              Create a new Account
            </Link>
          </p>
        </form>
      </div>
      {/* Link to captain login page */}
      <Link
        to="/captain-login"
        className="w-full bg-green-600 font-bold text-center p-3 rounded text-white"
      >
        Sign in as Captain
      </Link>
    </div>
  );
};

export default UserLogin;
