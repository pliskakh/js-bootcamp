// students score, total possible score

let mark = function (scoreStudent, scorePossible) {
  let result = scoreStudent / scorePossible * 100;
  if (result >= 0 && result <= 59) console.log(`You got a F (${result}%)`);
  else if (result > 59 && result <= 69) console.log(`You got a D (${result}%)`);
  else if (result > 69 && result <= 79) console.log(`You got a C (${result}%)`);
  else if (result > 79 && result <= 89) console.log(`You got a B (${result}%)`);
  else if (result > 89 && result <= 100) console.log(`You got a A (${result}%)`);
  else console.log('You\'re too dumb or too genius');
};

mark(25, 30);