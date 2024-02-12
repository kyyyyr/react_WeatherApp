import React from "react";
import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className=" flex flex-row justify-center my-6">
      <div className=" flex flex-row items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="search..."
          className=" text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-full"
        />

        <UilSearch
          size={25}
          className=" text-white hover:scale-125 transition ease-in- cursor-pointer"
        ></UilSearch>
        <UilLocationPoint
          size={25}
          className=" text-white hover:scale-125 transition ease-in- cursor-pointer"
        ></UilLocationPoint>
      </div>

      <div className=" flex flex-row items-center justify-center w-1/4">
        <button name="metric" className=" text-white text-xl font-light">
          °C
        </button>
        <p className=" text-white text-lg mx-1">|</p>
        <button name="imperial" className=" text-white text-xl font-light">
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
