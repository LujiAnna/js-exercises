// Declare variable
const amount = 10;

document.write(`<h1>The ${amount} most popular tv shows</h1>`);

// 03. Array

const tvshows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
];

// For loop

document.write(`<ol>`);
for (let i = 0; i < tvshows.length; i++) {
  document.write(`<li>${tvshows[i]}</li>`);
}
document.write(`</ol>`);

// ========

// Reverse order in another array
let reverseTv = tvshows.reverse();
document.write(`<ol>`);
for (let i = 0; i < reverseTv.length; i++) {
  document.write(`<li>${reverseTv[i]}</li>`);
}
document.write(`</ol>`);

// 04. ForEach loop & Function
// Note: forEach should call proper array-variable name
// Note: Parameter passed in forEach should be used inside the function as well
const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

document.write(`<ol>`);
tvshows.forEach(show => document.write(wrapWithTag(show, `li`)));
document.write(`</ol>`);
