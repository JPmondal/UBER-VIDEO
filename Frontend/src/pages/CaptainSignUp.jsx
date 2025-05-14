import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignUp = () => {
  // State variables to store firstname, lastname, email, password, and user data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [vechicleColor, setVechicleColor] = useState("");
  const [vechiclePlate, setVechiclePlate] = useState("");
  const [vechicleCapacity, setVechicleCapacity] = useState(1);
  const [vechicleType, setVechicleType] = useState("car");


    const navigate = useNavigate();


  const { captain, setCaptain } = useContext(CaptainDataContext);

  // Function to handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Update userData state with email and password
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vechicle: {
        color: vechicleColor,
        plate: vechiclePlate,
        capacity: vechicleCapacity,
        vechicleType: vechicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );
    console.log(response);

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    // Clear input fields after submission
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVechicleColor("");
    setVechiclePlate("");
    setVechicleCapacity("");
    setVechicleType("");
  };

  return (
    <div className="p-6 flex flex-col">
      <div>
        {/* Uber logo */}
        <img
          className="w-16"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        {/* Login form */}
        <form onSubmit={(e) => onSubmitHandler(e)} className="mt-2">
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
          <div className="flex gap-2">
            {/* Vechicle color input field */}
            <div className="mt-2">
              <p className="font-medium text-md">Vechicle color</p>
              <input
                onChange={(e) => setVechicleColor(e.target.value)} // Update vechicleColor state on input change
                value={vechicleColor} // Bind input value to vechicleColor state
                className="bg-gray-200 w-full p-3 rounded mt-2 placeholder-gray-500"
                type="text"
                placeholder="vechicle color"
              />
            </div>
            {/* Vechicle capacity input field */}
            <div className="mt-2">
              <p className="font-medium text-md">Vechicle capacity</p>
              <input
                onChange={(e) => setVechicleCapacity(e.target.value)} // Update vechicleCapacity state on input change
                value={vechicleCapacity} // Bind input value to vechicleCapacity state
                className="bg-gray-200 w-full p-3 rounded mt-2 placeholder-gray-500"
                type="number"
                placeholder="vechicle capacity"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {/* Vechicle plate input field */}
            <div className="mt-2">
              <p className="font-medium text-md">Vechicle plate</p>
              <input
                onChange={(e) => setVechiclePlate(e.target.value)} // Update vechiclePlate state on input change
                value={vechiclePlate} // Bind input value to vechiclePlate state
                className="bg-gray-200 w-full p-3 rounded mt-2 placeholder-gray-500"
                type="text"
                placeholder="vechicle plate"
              />
            </div>
            {/* Vechicle type input field */}
            <div className="mt-2">
              <p className="font-medium text-md">Vechicle type</p>
              <select
                onChange={(e) => setVechicleType(e.target.value)} // Update vechicleType state on input change
                value={vechicleType} // Bind input value to vechicleType state
                className="bg-gray-200 w-full p-3 rounded mt-2 placeholder-gray-500"
              >
                <option value="car">car</option>
                <option value="motorcycle">motorcycle</option>
                <option value="auto">auto</option>
              </select>
            </div>
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
      <p className="text-xs leading-tight text-justify mt-2">
        By signing up, you agree to our{" "}
        <Link className="text-blue-600">Terms of Service</Link> and{" "}
        <Link className="text-blue-600">Privacy Policy</Link>.
      </p>
    </div>
  );
};

export default CaptainSignUp;
