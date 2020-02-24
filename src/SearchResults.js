import React, { Fragment } from "react";

const Form = ({ weatherData, loading, error }) => {
  return (
    <Fragment>
      {error && "There has been an error!"}
      {loading && "Loading weather data..."}
      {weatherData && (
        <div>
          <h3>{weatherData.city}</h3>
          <h3>{weatherData.country}</h3>
          <h3>{weatherData.temperature}</h3>
          <h3>{weatherData.main}</h3>
          <h3>{weatherData.description}</h3>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            alt="Weather Icon"
          />
        </div>
      )}
    </Fragment>
  );
};

export default Form;
