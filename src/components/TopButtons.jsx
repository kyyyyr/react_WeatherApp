import React from "react";

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: "Berlin",
    },
    {
      id: 2,
      title: "Jakarta",
    },
    {
      id: 3,
      title: "Dubai",
    },
    {
      id: 4,
      title: "Sydney",
    },
    {
      id: 5,
      title: "Singapore",
    },
  ];

  return (
    <div className=" flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className=" text-white font-medium text-lg">
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
