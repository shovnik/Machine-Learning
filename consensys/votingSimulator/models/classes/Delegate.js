const utils = require("../../utils");

module.exports =
class Delegate {
  constructor(numPrefs, options) {
    this.prefs = new Map();
    const prefIndices = utils.rng(options.maxPrefs, numPrefs);
    for(let j = 0; j < options.maxPrefs; j++) {
      const inclination = (Math.random() < 0.5) ? 1: -1;;
      this.prefs.set(prefIndices[j], inclination);
    }
  }
}
