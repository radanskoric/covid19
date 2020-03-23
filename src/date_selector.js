import { select } from "d3"

// Class that implements the date slider at the top of the page
export default class {
  constructor(dates, dom, dateChangeFn) {
    dom.innerHTML = `
      <input id="slider" type="range" min="1" max="${dates.length}" step="1" value="${dates.length}"/>
    `
    dateChangeFn(dates[dates.length - 1])

    select(dom).select("input").on("input", function() {
      dateChangeFn(dates[this.value - 1])
    })
  }
}
