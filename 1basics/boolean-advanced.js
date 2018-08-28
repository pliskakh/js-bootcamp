let isAccountLocked = true;
let role = 'admin';

if (isAccountLocked) {
  console.log('Your account is locked');
} else if (role === 'admin') {
  console.log('Welcome, admin');
} else {
  console.log('Welcome');
}


// challenge area
let temp = 45;

if(temp < 45){
  console.log('Its fucking freezing');
} else if(temp === 45){
  console.log('Pretty nice!!! I can go outside!');
} else {
  console.log('No way! It\'s hot outside');
}