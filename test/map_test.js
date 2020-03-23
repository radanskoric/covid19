import { select } from "d3"

import Map from "../src/map"

describe(Map, () => {
  let dom, map

  beforeEach(() => {
    dom = document.createElement("div")

    map = new Map(dom)
  })

  it("creates a map element without any bubbles", () => {
    expect(dom.querySelector("svg")).not.toBeNull()
    expect(select(dom).selectAll('circle.datamaps-bubble').size()).toEqual(0)
  })

  describe("when locations are initialised", () => {
    const locations = [
      {name: "Croatia", latitude: 45.1, longitude: 15.2, "3/16/20": {active: 55, delta: 0}, "3/17/20": {active: 61, delta: 8}, "3/18/20": {active: 76, delta: 16}},
      {name: "China/Hubei", latitude: 30.9756, longitude: 112.2707, "3/16/20": {active: 9557, delta: 0}, "3/17/20": {active: 8685, delta: 1}, "3/18/20": {active: 7751, delta: 1}},
    ]

    beforeEach(() => {
      map.initLocations(locations)
    })

    it("creates bubble circles for locations", () => {
      expect(select(dom).selectAll('circle.datamaps-bubble').size()).toEqual(2)
    })

    describe("#update", () => {
      beforeEach(() => {
        map.update("3/17/20")
      })

      it("keeps number of circles the same", () => {
        expect(select(dom).selectAll('circle.datamaps-bubble').size()).toEqual(2)
      })
    })
  })
})
