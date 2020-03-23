This is an interactive visualisation based on [data from Johns Hopkins University Center for Systems Science and Engineering](https://github.com/CSSEGISandData/COVID-19).

## Development

Clone the repository and run `npm install` to set it up.

After that use `npm run start` to run the web server. Open the application at http://localhost:8080.

### Tests

Test are written using jasmine. You'll need to have headless chrome installed. After that you can run with `npm test` for a single run or with `npm run guard` to have it watch for changes and rerun tests on any change.

## Production

The visualisation is hosted at `http://radanskoric.eu/covid19/` through Github pages. The build of the js bundle is created by running `npm run build`. It's built into `docs` folder because github has the option to serve github pages from docs folder and the name of the folder is not configurable so this was the simplest way to have it live.
