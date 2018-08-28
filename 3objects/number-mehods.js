let num = 309.148;

console.log(num.toFixed(2)); // 309.15

console.log(Math.round(num)); // 309
console.log(Math.floor(num)); // 309
console.log(Math.ceil(num)); // 310


let randomNum = Math.random(); // 0 - .999999
console.log(randomNum);

let min = 10, max = 20;
let anotherRandomNum = Math.floor(Math.random() * (max-min + 1)) + min; // 10 - 20
console.log(anotherRandomNum);

// CHALLENGE AREA
function makeGuess(number){
  let min = 1, max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`Random number: ${randomNum}`);
  return randomNum === number;
}

console.log(makeGuess(1));