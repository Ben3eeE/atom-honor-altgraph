# honor-altgraph package

The default behavior of Atom is to allow keybindings to shadow AltGraph modified characters. If you are using a typography layout you always intend to write the AltGraph modified character when one exists and don't want packages to block your ability to type AltGraph modified characters. This package adds a [custom keystroke resolver](https://atom.io/docs/api/v1.14.4/KeymapManager#instance-addKeystrokeResolver) to always honor AltGraph modified keys on Windows when one exists.

**Note:** Currently only Windows is supported.
