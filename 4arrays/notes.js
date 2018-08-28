const notes = ['note 1', 'Note 2', 'note 3'];
console.log(notes.length);

console.log(notes[0]);
console.log(notes[notes.length - 1]);


// Add new array element to the END
notes.push('my new note');
console.log(notes);

// Remove array element from the END
notes.pop();
console.log(notes);

// Removes FIRST element of array
notes.shift();
console.log(notes);

// Add new array element to the BEGIN
notes.unshift('My first note');
console.log(notes);

//
notes.splice(1, 0, 'New item');
console.log(notes);

notes.splice(1, 1, 'New note 2');
console.log(notes);

// reasign array item value
notes[2] = 'Super new element';
console.log(notes);


// foreach
notes.forEach(function (item, index) {
  console.log(`${index} - ${item}`);
});

// counting
for (let i = 0; i < notes.length; i++) {
  console.log(notes[i]);
}
// reverse counting
for (let i = notes.length - 1; i >= 0; i--) {
  console.log(notes[i]);
}

console.log(notes.indexOf('note')); // -1 (not found)

console.log('======= OBJECTS IN ARRAY searching');
const planner = [{
    title: 'My next trip',
    body: 'I\'d like to go to the Spain'
  },
  {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
  },
  {
    title: 'Office modification',
    body: 'Get a new table to stand-work'
  },
  {}
];

//console.log(planner.indexOf({}));

// Objects compersation
console.log({} === {}); // false
let someObj = {};
let otherObj = someObj;
console.log(someObj === otherObj); // true


const index = planner.findIndex(function (note) {
  return note.title === 'Office modification';
});
console.log(index);


const findNote = function (notes, noteTitle) {
  const index = notes.findIndex(function (note) {
    return note.title.toLowerCase === noteTitle.toLowerCase();
  });
  return notes[index];
};

// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
// };

const note = findNote(planner, 'Office modification');
console.log(note);


const findNotes = function (notes, query) {
  return planner.filter(function (note) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(planner, 'work'));