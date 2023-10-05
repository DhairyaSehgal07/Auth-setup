import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-center align-center border-2 border-black mt-4">
      <div className="flex flex-col justify-center align-center">
        <h1 className="text-4xl mt-4 mr-4">MERN Authentication</h1>
        <p className="m-2">
          This is a boiler plate for MERN authentication that stores a JWT in an
          HTTP-Only cookie .It also uses Redux Toolkit ans the React Bootstrap
          library.
        </p>
        <div className="flex">
          <Link to='/login'>
            <button className="m-4 py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              Sign In
            </button>
          </Link>
          <Link to='/register'>
            <button className="m-4 py-2 px-4 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-400">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
