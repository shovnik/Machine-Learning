const utils = require("../../utils");

module.exports =
class Voter {
  constructor(numPrefs) {
    this.prefs = new Map();
    for(let j = 0; j < numPrefs; j++) {
      const stance = Math.floor(Math.random()*7) - 3; // |stance|: importance, +: for, -:against
      this.prefs.set(j, stance);
    }
  }

  assignDelegate(delegates) {
    this.delegates = new Map();
    for(const [key, value] of this.prefs) {
      const potentialDelegates = [];
      for(let i = 0; i < delegates.length; i++)
        if(delegates[i].prefs.has(key) && delegates[i].prefs.get(key)*value > 0)
          potentialDelegates.push(i);
      this.delegates.set(key, utils.pick(potentialDelegates));
    }
  }
}
