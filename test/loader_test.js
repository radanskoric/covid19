import loader from "../src/loader"

import "jasmine-ajax"

describe(loader, () => {
  const confirmedUrl = "https://www.example.org/confirmed.csv"
  const deathsUrl = "https://www.example.org/deaths.csv"
  const recoveredUrl = "https://www.example.org/recovered.csv"

  const confirmedCsv = [{name: "confirmed"}]
  const deathsCsv = [{name: "death"}]
  const recoveredCsv = [{name: "recovered"}]

  const fakeCsv = function(url) {
    switch (url) {
      case confirmedUrl:
        return Promise.resolve(confirmedCsv)
        break
      case deathsUrl:
        return Promise.resolve(deathsCsv)
        break
      case recoveredUrl:
        return Promise.resolve(recoveredCsv)
        break
      default: throw("Unexpected url: " + url)
    }
  }

  it("works", () => {
    loader(confirmedUrl, deathsUrl, recoveredUrl, (data) => {
      expect(data).toEqual({
        confirmed: confirmedCsv,
        deaths: deathsCsv,
        recovered: recoveredCsv
      })
    }, fakeCsv)
  })
})
