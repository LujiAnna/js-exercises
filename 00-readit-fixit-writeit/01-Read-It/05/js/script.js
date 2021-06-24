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

const wrapWithTag = (content, tagname) => {
  return `<${tagname}>${content}</${tagname}>`;
};

const parseTitle = title => {
  const lowerTitle = title.toLowerCase();
  const wrapped = wrapWithTag(lowerTitle,`li`);
  document.write(wrapped);
};

// document.write(wrapWithTag(title.toLowerCase(),`li`));
// document.write(wrapWithTag(movie.toLowerCase(),`li`));


document.write(`<ol>`);
movies.forEach(movie => parseTitle(movie));
document.write(`</ol>`);

//The for-loop is no longer present. What was it replaced with? How does this work?
// What does the function 'parseTitle' do? What parameter do we pass to this function?
// What does the function 'wrapWithTag' do? Why are the parameters placed between brackets?