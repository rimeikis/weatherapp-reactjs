import React, { useState } from "react";
import API_KEY from "./APIKEY";
import SearchResults from "./SearchResults";
import SearchForm from "./SearchForm";

const DataFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState({
    country: "",
    city: "",
    temperature: "",
    main: "",
    description: "",
    icon: ""
  });

  const fetchWeatherData = userQuery => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userQuery}&units=metric&appid=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        setWeatherData({
          country: data.sys.country,
          city: data.name,
          temperature: data.main.temp,
          main: data.weather[0].main,
          description: data.weather[0].description,
          icon: data.weather[0].icon
        });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  };

  return (
    <div>
      <SearchForm fetchWeatherData={fetchWeatherData} />
      <SearchResults
        weatherData={weatherData}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default DataFetch;
