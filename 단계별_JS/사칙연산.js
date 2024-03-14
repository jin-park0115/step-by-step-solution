const calcylate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
  }
};

console.log(10, 5, "+"); //15
console.log(10, 5, "-"); // 10
console.log(10, 5, "*"); // 50
console.log(10, 5, "/"); // 2
console.log(10, 5, "%"); // 0
