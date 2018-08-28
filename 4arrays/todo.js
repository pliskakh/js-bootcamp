// Create an array with five todos
// You have X todos
// Print the first and second to last items - > Todo: walk the dog

const toDoList = [
  'walk with dog',
  'make a shitty blog',
  'go for a walk',
  'watch porn',
  'take a short nap'
];

const message = `You have ${toDoList.length} todos`,
  firstTodo = `Todo: ${toDoList[0]}`,
  preLastTodo = `Todo: ${toDoList[toDoList.length - 2]}`;

console.log(`${message} \n ${firstTodo} \n ${preLastTodo}`);

// delete the third item
toDoList.splice(2, 1, 'lay on the sofa');

// add new item to the end
toDoList.push('just get lazy');

// remove the first item
toDoList.shift();

console.log(toDoList);

console.log('========== FOREACH loop ======');
toDoList.forEach(function (item, index) {
  console.log(`${index+1}. ${item}`);
});

console.log('========== FOR loop ======');
for (let i = 0; i < toDoList.length; i++) {
  console.log(`${i + 1}. ${toDoList[i]}`);
}


// convert array to array of objects -> text, completed
// create function to remove a todo by text value

const toDoArrayList = [{
    text: 'walk with dog',
    complete: true
  },
  {
    text: 'make a shitty blog',
    complete: true
  },
  {
    text: 'go for a walk',
    complete: false
  },
  {
    text: 'watch porn',
    complete: false
  },
  {
    text: 'take a short nap',
    complete: false
  }
];


// FIND INDEX challenge (uncomplete)

// test
//deleteTodo(toDoArrayList, 'watch porn');
//console.log(toDoArrayList);