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

document.write(`<ol>`);
for (let i = 0; i < tvshows.length; i++) {
  document.write(`<li>${tvshows[i]}</li>`);
}
document.write(`</ol>`);

// in reverse order
let reverseTv = tvshows.reverse();
document.write(`<ol>`);
for (let i = 0; i < reverseTv.length; i++) {
  document.write(`<li>${reverseTv[i]}</li>`);
}
document.write(`</ol>`);