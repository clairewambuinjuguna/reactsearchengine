import React, { useState } from "react";

function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  const fahrenheit = (props.celsius * 9) / 5 + 32;

  function ConvertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function ConvertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  return (
    <div>
      <span className="temperature">
        {unit === "celsius"
          ? Math.round(props.celsius)
          : Math.round(fahrenheit)}
      </span>
      <span className="unit">
        <a
          href="/"
          onClick={unit === "celsius" ? ConvertToFahrenheit : ConvertToCelsius}
        >
          {unit === "celsius" ? "°C" : "°F"}
        </a>{" "}
        | {unit === "celsius" ? "°F" : "°C"}
      </span>
    </div>
  );
}

export default WeatherTemperature;
