import map from "lodash/map"
import each from "lodash/each"
import parseInt from "lodash/parseInt"

export default class {
  constructor(data) {
    this.dates = data.confirmed.columns.slice(4)
    let locationsMap = {}

    this.locations = map(data.confirmed, (location) => {
      let locationData = {
        name: this._locationName(location),
        latitude: parseFloat(location["Lat"]),
        longitude: parseFloat(location["Long"])
      }

      let previous = null
      let previousDelta = 0
      each(this.dates, (date) => {
        let active = parseInt(location[date])
        let delta = previous ? active - previous : 0
        previous = active

        locationData[date] = {active: active, delta: (delta != 0) ? delta : previousDelta}
        previousDelta = delta
      })

      locationsMap[locationData.name] = locationData

      return locationData
    })

    this._subtractValues(data.deaths, locationsMap)
    this._subtractValues(data.recovered, locationsMap)
  }

  _locationName(location) {
    if(location["Province/State"] && location["Province/State"] != "") {
      return `${location["Country/Region"]}/${location["Province/State"]}`
    } else {
      return location["Country/Region"]
    }
  }

  _subtractValues(locations, locationsMap) {
    each(locations, (location) => {
      let locationData = locationsMap[this._locationName(location)]

      each(this.dates, (date) => {
        locationData[date].active = locationData[date].active - parseInt(location[date])
      })
    })
  }
}
