'use babel'

import { CompositeDisposable } from 'atom'
import HonorAltGraph from './honor-altgraph'

export default {

  honorAltGraph: null,

  activate (state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'honor-altgraph:toggle': () => this.toggle()
    }))

    honorAltGraph = new HonorAltGraph()
  },

  deactivate () {
    honorAltGraph.destroy()
    this.subscriptions.dispose()
  }
};
