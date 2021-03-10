const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  // the metadata file is action.yml, nameToGreet contains
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  // Date(), if we dont pass to it any number, it returns 
  // the actual date, and toTimeString formate it
  const time = (new Date()).toTimeString();
  // we set the time string as a output variable
  // an output value can be used by other actions 
  // that executes after this one
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  // stringify has one required argument and two optionals values.
  // The required one is the object that will be converted in a string
  // The first opcional one is the "replacer", we can change the behaviour
  // of the conversion
  // The second opcional one is the "space", we can define how many spaces
  // the converter will put
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  // We use the setFailed core's method to show the error message's
  core.setFailed(error.message);
}
