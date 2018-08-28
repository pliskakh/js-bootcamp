let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
};

let myOtherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
};

let getSummary = function(book){
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  };
};

let bookSummary = getSummary(myBook);
console.log(bookSummary.pageCountSummary);  

let anotherBookSummary = getSummary(myOtherBook);
console.log(anotherBookSummary.summary);


// Challenge area (create function - take fahrenheit in - return object with all three)
let getTemperature = function(temperatureFahrenheit){
  return {
    fahrenheit: temperatureFahrenheit,
    celsius: (temperatureFahrenheit - 32) / 1.8,
    kelvin: (temperatureFahrenheit + 459.67) * (5 / 9)
  };
};

let temps = getTemperature(74);
console.log(temps.celsius);