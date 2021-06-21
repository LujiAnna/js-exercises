// 02. Script external file

const amount = 20;

// use quotes
document.write("<h1>Top " + amount + " Greatest Movies of All Time</h1>");

// use back-ticks
document.write(`<h2>The first ${amount / 2} movies</h2>`);

// 'Template literals'
// Template literals are string literals allowing embedded expressions. You
// can use multi-line strings and string interpolation features with them.

// ================================

//  03. For Loop

const amount1 = 10;

for (let i = 0; i < amount1; i++) { //start from 0, as long as 0 is less than 10, add 1 to it
// console
  console.log(i); // 0, 1 ,....9 printed on console
  document.write(`<p>${i + 1}</p>`); // 1,2..10, in paragraph lines in browser
}

// ================================

//  04. Arrays

const movies = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `One Flew Over the Cuckoo's Nest`,
  `Lawrence of Arabia`,
];

// For Loop
document.write(`<ol>`); //prepares ordered numbered list in DOM
for (let i = 0; i < movies.length; i++) { // from 0 to 10 movies
  document.write(`<li>${movies[i]}</li>`); // print in browser the list all the movies
}
document.write(`</ol>`); //end of list tag

// ================================

//  05. ForEach & Functions 

// This fn adds HTML element tag to the dynamic content
// Parameters: html tags and the content
const wrapWithTag = (content, tagname) => {
  return `<${tagname}>${content}</${tagname}>`;
};

// Function to make lowercase to the letter, make html code, write to DOM
// each element of the array. Array ((of) strings) parameter is passed
const parseTitle = title => {
  const lowerTitle = title.toLowerCase(); // string converted to lower case.

// function to generate html code
  const wrapped = wrapWithTag(lowerTitle,`li`);
  document.write(wrapped);
};

// document.write(wrapWithTag(title.toLowerCase(),`li`));
// document.write(wrapWithTag(movie.toLowerCase(),`li`));

// forEach() method executes a provided callback function once for each array element.
document.write(`<ol>`);
movies.forEach(movie => parseTitle(movie));
document.write(`</ol>`);
