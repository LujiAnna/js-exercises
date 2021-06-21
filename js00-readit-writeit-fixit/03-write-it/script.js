// 01. Array of movies playing at your local cinema

const movies = [
  'Aloha',
  'SCANDAL',
  'think like a man'
]

//  Display the movies in an ul list.

document.write(`<ol>`);

  for (let i=0; i < movies.length; i++) {
    console.log(movies[i]); // print on console
    document.write(`<li> ${movies[i]} </li>`); // print on browser
  }

document.write(`</ol>`);

// =====================

// 02. Transform the text to lowercase
document.write('Transform list to lower case');

document.write(`<ol>`);

  for (let i=0; i < movies.length; i++) {
    console.log(movies[i]); // print on console
    document.write(`<li> ${movies[i].toLowerCase()} </li>`); // print on browser
  }

document.write(`</ol>`);

// * Display the list in reversed order

document.write('Reverse list');

let reverseOrder = movies;

document.write(`<ol>`);
for (let i=reverseOrder.length - 1; i >= 0; i--) {
  console.log(reverseOrder[i]); // print on console
  document.write(`<li> ${reverseOrder[i]} </li>`); // print on browser
}

document.write(`</ol>`);

// =====================

// 03. 
