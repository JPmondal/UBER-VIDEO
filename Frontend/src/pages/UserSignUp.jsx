import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignUp = () => {
  const base_url = import.meta.env.VITE_BASE_URL;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  // Function to handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(`${base_url}/users/register`, newUser);

    console.log(response);

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    // Clear input fields after submission
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

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
          {/* Name input field */}
          <div className="mt-2">
            <p className="font-medium text-md">What's your Name</p>
            <div className="flex justify-between gap-2">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="bg-gray-200 w-1/2  p-3 rounded mt-2 placeholder-gray-500"
                type="text"
                placeholder="First Name"
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-gray-200 w-full p-3 rounded mt-2 placeholder-gray-500"
              type="email"
              placeholder="email@example.com"
            />
          </div>
          {/* Password input field */}
          <div className="mt-2">
            <p className="font-medium text-md">Enter your Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
            Create Account
          </button>
          {/* Link to signup page */}
          <p className="text-center mt-4 font-semibold">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login Here
            </Link>
          </p>
        </form>
      </div>
      {/* Terms and Policy */}
      <p className="text-xs leading-tight text-justify mt-4">
        By signing up, you agree to our{" "}
        <Link className="text-blue-600">Terms of Service</Link> and{" "}
        <Link className="text-blue-600">Privacy Policy</Link>.
      </p>
    </div>
  );
};

export default UserSignUp;
