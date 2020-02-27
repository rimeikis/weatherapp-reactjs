import React, { useState, Fragment } from "react";
import SearchResults from "./SearchResults";
import SearchForm from "./SearchForm";

const WeatherAppContainer = () => {
  const [fetchState, setFetchState] = useState(null);
  const [weatherData, setWeatherData] = useState({
    country: "",
    city: "",
    temperature: "",
    description: "",
    icon: ""
  });

  const fetchWeatherData = userQuery => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    setFetchState("LOADING");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userQuery}&units=metric&appid=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        setWeatherData({
          country: data.sys.country,
          city: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon
        });
        setFetchState(null);
      })
      .catch(() => {
        setFetchState("ERROR");
      });
  };

  return (
    <Fragment>
      <SearchForm onSubmit={fetchWeatherData} />
      <SearchResults weatherData={weatherData} fetchState={fetchState} />
    </Fragment>
  );
};

export default WeatherAppContainer;
