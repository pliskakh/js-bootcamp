let temp = 55;

// logical AND statement (true if both sides are true . false otherwise)
// logical OR statement (true if at least one side is true. false otherwise )

if (temp >= 60 && temp <= 90) {
  console.log('It\'s pretty nice out');
} else if (temp <= 0 || temp >= 120) {
  console.log('Don\'t go outside');
} else {
  console.log('Do what you want');
}


// challenge area
let isGuestOneVegan = true,
  isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer up vegan dishes');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Make sure to offer up some vegan dishes');
} else {
  console.log('Offer up anything on the menu');
}