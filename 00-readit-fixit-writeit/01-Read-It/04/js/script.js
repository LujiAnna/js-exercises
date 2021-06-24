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

document.write(`<ol>`); //prepares ordered numbered list in DOM
for (let i = 0; i < movies.length; i++) { // from 0 to 10 movies
  document.write(`<li>${movies[i]}</li>`); // print in browser in list all the movies
}
document.write(`</ol>`); //end of list tree
