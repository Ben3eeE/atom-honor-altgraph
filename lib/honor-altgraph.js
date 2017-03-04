'use babel'

import { CompositeDisposable } from 'atom'

export default class HonorAltGraph {
  constructor () {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.keymaps.addKeystrokeResolver(({event, keymap}) => {
      // Only support windows for now.
      if (process.platform !== "win32") {
        return
      }

      // We are not interested in resolving anything that doesn't include AltGraph
      if(!event.getModifierState('AltGraph')) {
        return
      }

      const nonAltModifiedKey = this.nonAltModifiedKeyForKeyboardEvent(event, keymap)
      let key = event.key

      // If there is no AltGraph modified we are not interested to resolve it differently
      if (!nonAltModifiedKey || key === nonAltModifiedKey) {
        return
      }

      return key
    }))
  }

  destroy () {
    this.subscriptions.dispose()
  }

  nonAltModifiedKeyForKeyboardEvent (event,keymap) {
    const characters = keymap[event.code]
    if (event.code && characters) {
      if (event.shiftKey)
        return characters.withShift
      else
        return characters.unmodified
      }
    }
}
