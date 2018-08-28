let add = function (a, b) {
  return a + b;
};

let result = add(10, 15);
console.log(result);

// default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}`;
};

let scoreText = getScoreText(undefined, 22);
console.log(scoreText);

// challenge area
let getTipAmount = function (total, tipPercent = .2) {
  return `tip: ${total * tipPercent}`;
};

let tips = getTipAmount(100);
console.log(tips);