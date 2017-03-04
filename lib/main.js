'use babel'

import HonorAltGraph from './honor-altgraph'

export default {

  honorAltGraph: null,

  activate (state) {
    honorAltGraph = new HonorAltGraph()
  },

  deactivate () {
    honorAltGraph.destroy()
  }
};
