export default class {
  constructor(dom) {
    dom.innerHTML = `
      <div>
        ⇑Use the slider to change the date ⇑
      </div>
      <h2 id="current-date"></h2>
    `

    this.dateElement = dom.querySelector("#current-date")
  }

  selectDate(date) {
    this.dateElement.textContent = date
  }
}
