const Voter = require("./classes/Voter");
const Delegate = require("./classes/Delegate");
const Proposal = require("./classes/Proposal")

module.exports =
function main(numVoters, numDelegates, numProposals, numPrefs, params) {
  const voters = [];
  const delegates = [];
  const proposals = [];

  for(let i = 0; i < numProposals; i++)
    delegates.push(new Proposal(numPrefs, params.proposal));
  for(let i = 0; i < numDelegates; i++)
    delegates.push(new Delegate(numPrefs, params.delegate));
  for(let i = 0; i < numVoters; i++) {
    voters.push(new Voter(numPrefs));
    voters[i].assignDelegate(delegates);
  }
  console.log(proposals);
  console.log(delegates);
  console.log(voters);
}
