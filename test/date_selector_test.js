import DateSelector from "../src/date_selector"

describe(DateSelector, () => {
  let dates = ["3/20/20", "3/21/20", "3/22/20"]
  let slider, dom, callback

  beforeEach(() => {
    dom = document.createElement("div")

    callback = jasmine.createSpy("callback")

    slider = new DateSelector(dates, dom, callback)
  })

  it("builds the slider", () => {
    expect(dom.querySelector("input")).not.toBeNull()
  })

  it("calls the callback with last date", () => {
    expect(callback).toHaveBeenCalledWith("3/22/20")
  })
})
