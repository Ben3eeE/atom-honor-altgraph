'use babel'

import HonorAltGraph from './honor-altgraph'

export default {

  honorAltGraph: null,

  activate (state) {
    this.honorAltGraph = new HonorAltGraph()
  },

  deactivate () {
    this.honorAltGraph.destroy()
  }
}
