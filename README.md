How to use:

1. Rename the .env_sample file into .env
2. Replace the REACT_APP_API_KEY value to your API key from OpenWeatherMap
3. cd to folder and run "npm install" to install dependencies
4. run "npm start" to start the application

Update 1 (24/02/2020):

1. Combined loading and error states into one state.
2. Renamed components, props, functions and variables accordingly.
3. Replaced all divs to fragments. This is due to no styling and the focus being on maximizing app performance
4. Extracted functions out of JSX and optimized them
5. Used .env to store new api key as environment variable
