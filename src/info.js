export default class {
  constructor(dom) {
    dom.innerHTML = `
      <p>
        ⇑Use the slider to change the date ⇑
      </p>
      <h2 id="current-date"></h2>
    `

    this.dateElement = dom.querySelector("#current-date")
  }

  selectDate(date) {
    this.dateElement.textContent = date
  }
}
