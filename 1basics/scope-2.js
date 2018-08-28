// global scope
  // local scope
    // local scope
  // local scope

let name = 'Mike';

if (true) {
  let name = 'Ivan';
  if (true) {
    name = 'Jane';
    console.log(name);
  }
}

if (true) {
  console.log(name);
}