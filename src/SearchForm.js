import React, { useState, Fragment } from "react";

const Search = ({ onSubmit }) => {
  const [userQuery, setUserQuery] = useState("");

  const handleChange = event => {
    setUserQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(userQuery);
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Search;
