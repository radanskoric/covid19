import { csv } from "d3"

export default function(confirmedUrl, deathsUrl, recoveredUrl, callback, csvFn = csv) {
  Promise.all([
    csvFn(confirmedUrl),
    csvFn(deathsUrl),
    csvFn(recoveredUrl)
  ]).then(([confirmedData, deathsData, recoveredData]) => {
    callback({
      confirmed: confirmedData,
      deaths: deathsData,
      recovered: recoveredData
    })
  })
}

