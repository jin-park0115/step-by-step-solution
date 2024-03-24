const input = require("fs").readFileSync(0, "utf-8").toString();

const score = parseInt(input);

if (score < 60) {
  console.log("F");
} else if (score < 70) {
  console.log("D");
} else if (score < 80) {
  console.log("C");
} else if (score < 90) {
  console.log("B");
} else {
  console.log("A");
}
