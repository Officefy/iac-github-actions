const github = require("@actions/github");

module.exports = async (analysis) => {
  analysis.event = github.context.eventName
}