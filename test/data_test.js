import Data from "../src/data"

describe(Data, () => {
  const raw_data = {
    confirmed: {
      columns: ["Province/State", "Country/Region", "Lat", "Long", "3/16/20", "3/17/20", "3/18/20"],
      0: {
        "Province/State": "",
        "Country/Region": "Croatia",
        "Lat": "45.1",
        "Long": "15.2",
        "3/16/20": "57",
        "3/17/20": "65",
        "3/18/20": "81"
      },
      1: {
        "Province/State": "Hubei",
        "Country/Region": "China",
        "Lat": "30.9756",
        "Long": "112.2707",
        "3/16/20": "67798",
        "3/17/20": "67799",
        "3/18/20": "67800"
      },
      length: 2
    },
    deaths: {
      columns: ["Province/State", "Country/Region", "Lat", "Long", "3/16/20", "3/17/20", "3/18/20"],
      0: {
        "Province/State": "",
        "Country/Region": "Croatia",
        "Lat": "45.1",
        "Long": "15.2",
        "3/16/20": "0",
        "3/17/20": "0",
        "3/18/20": "1"
      },
      1: {
        "Province/State": "Hubei",
        "Country/Region": "China",
        "Lat": "30.9756",
        "Long": "112.2707",
        "3/16/20": "3099",
        "3/17/20": "3111",
        "3/18/20": "3122"
      },
      length: 2
    },
    recovered: {
      columns: ["Province/State", "Country/Region", "Lat", "Long", "3/16/20", "3/17/20", "3/18/20"],
      0: {
        "Province/State": "",
        "Country/Region": "Croatia",
        "Lat": "45.1",
        "Long": "15.2",
        "3/16/20": "2",
        "3/17/20": "4",
        "3/18/20": "4"
      },
      1: {
        "Province/State": "Hubei",
        "Country/Region": "China",
        "Lat": "30.9756",
        "Long": "112.2707",
        "3/16/20": "55142",
        "3/17/20": "56003",
        "3/18/20": "56927"
      },
      length: 2
    }
  }

  let data

  beforeEach(() => {
    data = new Data(raw_data)
  })

  it("extracts dates from the confirmed columns", () => {
    expect(data.dates).toEqual(["3/16/20", "3/17/20", "3/18/20"])
  })

  it("compiles a list of locations with name, coordinates and active cases on each day", () => {
    expect(data.locations).toEqual([
      {name: "Croatia", latitude: 45.1, longitude: 15.2, "3/16/20": {active: 55, delta: 0}, "3/17/20": {active: 61, delta: 8}, "3/18/20": {active: 76, delta: 16}},
      {name: "China/Hubei", latitude: 30.9756, longitude: 112.2707, "3/16/20": {active: 9557, delta: 0}, "3/17/20": {active: 8685, delta: 1}, "3/18/20": {active: 7751, delta: 1}},
    ])
  })
})
