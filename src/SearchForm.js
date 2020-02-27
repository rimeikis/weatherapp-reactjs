import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const SearchForm = ({ onSubmit }) => {
  const [userQuery, setUserQuery] = useState("");

  const handleChange = event => {
    setUserQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(userQuery);
  };

  return (
    <Box pb={5}>
      <Grid container justify="center">
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            onChange={handleChange}
            value={userQuery}
            label="Enter a City"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </form>
      </Grid>
    </Box>
  );
};

export default SearchForm;
