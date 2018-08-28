let name;
name = 'John';

name === undefined ? console.log('Please provide a name') : console.log(name);

// undefined for function arguments
// undefined as function return default value
let square = function(num){
  console.log(num);
};

let result = square();
console.log(result);

// null as assigned value
let age = 27;
age = null;
console.log(age);

