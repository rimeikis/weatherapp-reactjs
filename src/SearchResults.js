import React, { Fragment } from "react";

const Form = ({ weatherData, fetchState }) => {
  const showText = () => {
    if (fetchState === "ERROR") {
      return "There has been an error!";
    } else if (fetchState === "LOADING") {
      return "Loading weather data...";
    } else {
      return null;
    }
  };

  const showData = () => {
    return (
      weatherData && (
        <Fragment>
          {weatherData.city}
          {weatherData.country}
          {weatherData.temperature}
          {weatherData.main}
          {weatherData.description}
        </Fragment>
      )
    );
  };

  const showIcon = () => {
    return (
      weatherData.icon && (
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="Weather Icon"
        />
      )
    );
  };

  return (
    <Fragment>
      {showText()}
      {showData()}
      {showIcon()}
    </Fragment>
  );
};

export default Form;
