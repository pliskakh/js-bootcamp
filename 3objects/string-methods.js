let name = 'Misha Plisko';

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
let password = 'abc123password098';
console.log(password.includes('pass'));


let str = '    Misha     PLisko    ';
// Trim method
console.log(name.trim());


// CHALLENGE AREA

// isValidPassword
function isValidPassword(password) {
  return password.length > 8 && !password.includes('password');
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&*'));
console.log(isValidPassword('asdferiuociduapassword'));