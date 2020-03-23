import Info from "../src/info"

describe(Info, () => {
  let dom, info

  beforeEach(() => {
    dom = document.createElement("div")

    info = new Info(dom)
  })

  it("creates current date element", () => {
    expect(dom.querySelector("#current-date")).not.toBeNull()
  })

  it("updates title content when date changes", () => {
    info.selectDate("3/22/20")
    expect(dom.querySelector("#current-date").textContent).toEqual("3/22/20")
  })
})
