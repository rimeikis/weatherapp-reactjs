import React, { Fragment } from "react";
import WeatherAppContainer from "./WeatherAppContainer";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const App = () => {
  return (
    <Fragment>
      <Box pb={5} pt={3} color="primary.main">
        <Grid container justify="center">
          <Typography variant="h4">React Weather</Typography>
        </Grid>
      </Box>
      <Box color="text.secondary">
        <WeatherAppContainer />
      </Box>
    </Fragment>
  );
};

export default App;
