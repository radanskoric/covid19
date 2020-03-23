import * as Datamap from "datamaps"
import { select } from "d3"
import clamp from "lodash/clamp"

export default class {
  constructor(dom) {
    this.dom = dom
    this.map = new Datamap({
      scope: 'world',
      element: dom,
      responsive: true,
      projection: 'mercator',
      fills: {
        defaultFill: "#aaaaaa"
      },
      bubblesConfig: {
        borderWidth: 1
      }
    })

    select(window).on('resize', () => {
      this.map.resize();
    })

    this.color = d3.scale
                   .linear()
                   .domain([0,50,500])
                   .range(["#00FF00","#FFFF00", "#FF0000"]);
  }

  initLocations(locationsData) {
    this.map.bubbles(locationsData)
  }

  update(date) {
    select(this.dom).selectAll('circle.datamaps-bubble')
       .transition()
       .duration(100)
       .attr("r", (datum) => {
         let active = datum[date].active
         return active == 0 ? 0 : Math.log2(active);
       })
       .style("fill", (datum) => {
         return this.color(clamp(datum[date].delta, 0, 500))
       })
  }
}
