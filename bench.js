import Benchmark from "benchmark";

import { bigstring } from "./BigString.js"

//Sandy's Effort
const getUrls = (input) => {
  const lines = input.split('\n');

  return lines.reduce((accumulator, line) => {
    if (line.startsWith("<loc>")) {
      const url = line.replace("<loc>", "").replace("</loc>", "");
      accumulator.push(url);
    }
    return accumulator;
  }, [])
}

//Delia's effort
function stripUrls(urlList) {
  const fullArr = urlList.split(/\<(loc)\>|\<\\(loc)\>/).filter(Boolean);

  const filtered = []

  fullArr.forEach(val => {
    if (val.match(/^(http)/)) {
      const chopAt = val.indexOf("</loc>")
      const url = (chopAt >= 0) ? val.slice(0, chopAt) : val.slice(0)
      filtered.push(url)
    }
  });

  return filtered;
}

//Cole's effort
const IHeartThisUXTeam = (str) => Array.from(str.matchAll(/(http.*)</g), url => url[1])


var suite = new Benchmark.Suite();
suite.add("Sandy's Effort", function() {
  getUrls(bigstring)
  })
  .add("Delia's Effort", function () {
    stripUrls(bigstring)
  })
  .add("Cole's Effort", function () {
    IHeartThisUXTeam(bigstring)
  })  
  .on("cycle", function(event) {
  console.log(String(event.target));
  })
  .on("complete", function() {
  // console.log(this)
  console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ 'async': true })