import loader from "./loader"
import DateSelector from "./date_selector"
import Data from "./data"
import Info from "./info"
import Map from "./map"

window.onload = (event) => {
  let map = new Map(document.getElementById('map'))
  let info = new Info(document.getElementById('info'))

  loader(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv",
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv",
    (csvs) => {
      let data = new Data(csvs)
      map.initLocations(data.locations)
      new DateSelector(data.dates, document.getElementById("date-selector"), (date) => {
        map.update(date)
        info.selectDate(date)
      })
    }
  )
};



