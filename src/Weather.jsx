import React, { useState } from "react";

export default function Weather() {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState({});

  const currentWeather = async () => {
    let key = "455109f6d9da753f2f4d276fe69a2c26";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${key}`;
    let recentData = await fetch(url);
    let da = await recentData.json();
    setData(da);
  };
  console.log(data);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setCityName(e.target.value);
        }}
      />

      <input type="button" value="Save" onClick={currentWeather} />
    </div>
  );
}
