// Lexical Scope (Static scope)
// Global scope - defined outside of all code blocks
// Local scope - defined inside code block

// In the scope you can access variables defined in that scope or in parent/ancestor scope

// Global scope (varOne)
  // Local scope (varTwo)
  // Local scope (varThree)
    // Local scope (varFour)


let varOne = 'varOne';

if(true){
  console.log(varOne);
  let varTwo = 'varTwo';
}

if(true){
  let varThree = 'varThree';
  console.log(varOne);
  //console.log(varTwo);

  if(true){
    let varFour = 'varFour';

      console.log(varOne);
      //console.log(varTwo);
      console.log(varThree);


  }

}

// console.log(varTwo); error