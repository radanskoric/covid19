import loader from "./loader"
import DateSelector from "./date_selector"
import Data from "./data"
import Info from "./info"
import Map from "./map"

window.onload = (event) => {
  let map = new Map(document.getElementById('map'))
  let info = new Info(document.getElementById('info'))

  loader(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv",
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv",
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv",
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



