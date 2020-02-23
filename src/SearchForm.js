import React, { useState } from "react";

const Search = ({ fetchWeatherData }) => {
  const [userQuery, setUserQuery] = useState("");

  const handleChange = event => {
    setUserQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetchWeatherData(userQuery);
    setUserQuery("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={userQuery}
          placeholder="Enter a City"
          required
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
