import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function DetailTemperature() {
  return (
    <div>
      <div className=" flex items-center justify-center text-xl text-sky-300">
        <p>Cloudy</p>
      </div>

      <div className=" flex flex-row items-center justify-between pt-0 text-white">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sun" />

        <p className=" text-5xl">34°</p>

        <div className=" flex flex-col space-y-2">
          <div className=" flex items-center justify-center font-light text-sm">
            <UilTemperature size={18} className=" mr-1"></UilTemperature>
            Real fell:
            <span className=" font-medium ml-1">32°</span>
          </div>
          <div className=" flex flex-col space-y-2">
            <div className=" flex items-center justify-center font-light text-sm">
              <UilTear size={18} className=" mr-1"></UilTear>
              Humidity:
              <span className=" font-medium ml-1">43%</span>
            </div>
          </div>
          <div className=" flex flex-col space-y-2">
            <div className=" flex items-center justify-center font-light text-sm">
              <UilWind size={18} className=" mr-1"></UilWind>
              wind:
              <span className=" font-medium ml-1">3 km/h</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flow-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun></UilSun>
        <p className=" font-light">
          Rise:<span className=" font-medium ml-1">04:20 AM</span>
        </p>
        <p className=" font-light">|</p>

        <UilSunset></UilSunset>
        <p className=" font-light">
          Set:<span className=" font-medium ml-1">09:17 PM</span>
        </p>
        <p className=" font-light">|</p>
        <UilArrowUp></UilArrowUp>
        <p className=" font-light">
          High:<span className=" font-medium ml-1">21°</span>
        </p>
        <p className=" font-light">|</p>

        <UilArrowDown></UilArrowDown>
        <p className=" font-light">
          Low:<span className=" font-medium ml-1">17°</span>
        </p>
      </div>
    </div>
  );
}

export default DetailTemperature;
