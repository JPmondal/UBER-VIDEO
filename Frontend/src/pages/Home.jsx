import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-[url('https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-screen  flex flex-col justify-between">
        <img 
          className="w-20 ml-10 mt-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <div className="bg-white px-5 py-4">
          <h1 className="mb-3 text-3xl font-bold">Get Started with Uber</h1>
          <Link className="flex justify-center items-center bg-black text-white rounded w-full py-2 mb-3 outline-none " to="/login">Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
