import { WhippetFacts } from "./whippet-files/WhippetFacts";

// document.addEventListener('DOMContentLoaded', () => {
//   // do your setup here
//   console.log('Initialized app');
//   Initialize.init();
  
// });

class Initialize {
  static init() {
    console.log('Init');

    WhippetFacts()
  }
}
// const { WhippetFacts } = require("./whippet-files/WhippetFacts");

window.onload = Initialize.init();


