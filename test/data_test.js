import Data from "../src/data"

describe(Data, () => {
  const raw_data = {
    confirmed: {
      columns: ["Province/State", "Country/Region", "Lat", "Long", "3/16/20", "3/17/20", "3/18/20", "3/19/20"],
      0: {
        "Province/State": "",
        "Country/Region": "Croatia",
        "Lat": "45.1",
        "Long": "15.2",
        "3/16/20": "57",
        "3/17/20": "65",
        "3/18/20": "81",
        "3/19/20": "105"
      },
      1: {
        "Province/State": "Hubei",
        "Country/Region": "China",
        "Lat": "30.9756",
        "Long": "112.2707",
        "3/16/20": "67798",
        "3/17/20": "67799",
        "3/18/20": "67800",
        "3/19/20": "67800"
      },
      2: {
        "Province/State": "",
        "Country/Region": "Test no growth",
        "Lat": "40",
        "Long": "40",
        "3/16/20": "100",
        "3/17/20": "200",
        "3/18/20": "200",
        "3/19/20": "200"
      },
      length: 3
    },
    deaths: {
      columns: ["Province/State", "Country/Region", "Lat", "Long", "3/16/20", "3/17/20", "3/18/20", "3/19/20"],
      0: {
        "Province/State": "",
        "Country/Region": "Croatia",
        "Lat": "45.1",
        "Long": "15.2",
        "3/16/20": "0",
        "3/17/20": "0",
        "3/18/20": "1",
        "3/19/20": "1"
      },
      1: {
        "Province/State": "Hubei",
        "Country/Region": "China",
        "Lat": "30.9756",
        "Long": "112.2707",
        "3/16/20": "3099",
        "3/17/20": "3111",
        "3/18/20": "3122",
        "3/19/20": "3130"
      },
      2: {
        "Province/State": "",
        "Country/Region": "Test no growth",
        "Lat": "40",
        "Long": "40",
        "3/16/20": "0",
        "3/17/20": "0",
        "3/18/20": "0",
        "3/19/20": "0"
      },
      length: 3
    },
    recovered: {
      columns: ["Province/State", "Country/Region", "Lat", "Long", "3/16/20", "3/17/20", "3/18/20", "3/19/20"],
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
      2: {
        "Province/State": "",
        "Country/Region": "Test no growth",
        "Lat": "40",
        "Long": "40",
        "3/16/20": "0",
        "3/17/20": "0",
        "3/18/20": "0"
      },
      3: {
        "Province/State": "",
        "Country/Region": "Test record which is not in confirmed data",
        "Lat": "50",
        "Long": "50",
        "3/16/20": "0",
        "3/17/20": "0",
        "3/18/20": "0"
      },
      length: 4
    }
  }

  let data

  beforeEach(() => {
    data = new Data(raw_data)
  })

  it("extracts dates from the confirmed columns", () => {
    expect(data.dates).toEqual(["3/16/20", "3/17/20", "3/18/20", "3/19/20"])
  })

  it("compiles a list of locations with name, coordinates and active cases on each day", () => {
    expect(data.locations).toEqual([
      {
        name: "Croatia",
        latitude: 45.1,
        longitude: 15.2,
        "3/16/20": {active: 55, delta: 0},
        "3/17/20": {active: 61, delta: 8},
        "3/18/20": {active: 76, delta: 16},
        "3/19/20": {active: 100, delta: 24}
      },
      {
        name: "China/Hubei",
        latitude: 30.9756,
        longitude: 112.2707,
        "3/16/20": {active: 9557, delta: 0},
        "3/17/20": {active: 8685, delta: 1},
        "3/18/20": {active: 7751, delta: 1},
        "3/19/20": {active: 7743, delta: 1}
      },
      {
        name: "Test no growth",
        latitude: 40,
        longitude: 40,
        "3/16/20": {active: 100, delta: 0},
        "3/17/20": {active: 200, delta: 100},
        "3/18/20": {active: 200, delta: 100},
        "3/19/20": {active: 200, delta: 0}
      },
    ])
  })
})
