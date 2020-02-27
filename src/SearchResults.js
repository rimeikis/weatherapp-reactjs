import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const SearchResults = ({ weatherData, fetchState }) => {
  const showText = () => {
    if (fetchState === "ERROR") {
      return "City not found!";
    } else if (fetchState === "LOADING") {
      return <CircularProgress />;
    } else {
      return null;
    }
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
    <Grid
      textAlign="center"
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Box color="secondary.main">
        <Grid>
          <Typography variant="h6">{showText()}</Typography>
        </Grid>
      </Box>

      <Grid>
        <Typography variant="h1">
          {weatherData.temperature &&
            `${Math.floor(weatherData.temperature)}°C`}
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
          {weatherData.city && `${weatherData.city}, ${weatherData.country}`}
        </Typography>
      </Grid>

      <Grid>{showIcon()}</Grid>

      <Grid>
        <Typography variant="h5">
          {weatherData.description.charAt(0).toUpperCase() +
            weatherData.description.slice(1)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchResults;
