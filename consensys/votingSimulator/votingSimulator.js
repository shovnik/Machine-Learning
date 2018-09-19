const input = process.argv.slice(2);

const numVoters = parseInt(input[0]);
const numDelegates = parseInt(input[1]);
const numProposals = parseInt(input[3]);
const numPrefs = parseInt(input[2]);

const params = {
  delegate: {
    maxPrefs: 1
  },
  proposal: {
    maxPrefs: 3,
    multiPref: true,
    polls: false,
    multiPrefPolls: false
  }
}

const model1 = require("./models/model1");

model1(numVoters, numDelegates, numProposals, numPrefs, params);
