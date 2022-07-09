const _ = require("lodash");
const core = require("@actions/core");
const github = require("@actions/github");
const linguist = require("linguist-js");

try {
  core.info(JSON.stringify(github.context, null, 2));

  core.summary.addHeading('Analized 0', 0)
  core.summary.addHeading('Analized 1', 1)
  core.summary.addHeading('Analized 2', 2)
  core.summary.addHeading('Analized 3', 3)
  core.summary.addHeading('Analized 4', 4)
  
  core.summary.addDetails('context', JSON.stringify(github.context, null, 2))

  core.summary.addCodeBlock(`
graph event-push;
eventpush-->Analyze;
Analyze-->StaticAnalizys;
StaticAnalizys-->Test;
Test-->Release;
  `,'mermaid')









  // let providers = [ Git, Run, Code ]
  // let output = {}
  // let args = github.context

  // output = providers
  //   .map(p => p.load(args, output))
  //   .reduce((acc, i) => _.merge(acc, i.data), {})

  // if (output.code.isNode) providers = [ Nodejs ]
  // if (output.code.isPython) providers = [ Python ]

  // output = providers
  //   .map(p => p.load(args, output))
  //   .reduce((acc, i) => _.merge(acc, i.data), output)

  // providers = [ Docker, Deploy ]

  // output = providers.map(p => p.load(args, output))
  //   .reduce((acc, i) => _.merge(acc, i.data), output)

  // core.setOutput("config", JSON.stringify(output));

  // const { languages } = linguist(process.cwd(), {
  //   categories: ["programming"],
  // });

  // console.log(`languages: ${JSON.stringify(languages, null, 2)}`);

  // core.setOutput("language", languages);
  // const payload = JSON.stringify(github.context, undefined, 2);

  // console.log(`The event payload: ${payload}`);
} catch (error) {

  core.setFailed(error.message);
}
