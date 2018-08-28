let square = function (number) {
  let result = number * number;
  return result;
};

let value = square(3);
console.log(value);

console.log(square(10));

// challenge area
let convertFahrenheitToCelsius = function (tempFahrenheit) {
  return (tempFahrenheit - 32) / 1.8;
};

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));