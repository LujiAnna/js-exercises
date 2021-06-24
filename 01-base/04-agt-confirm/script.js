/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by Anna
 * started at 24/06/2021
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

// age/gender/town with confirmation

// Ask three questions to the user: his/her Age, Gender, and the Town where he/she lives.
 // Display the collected responses in a dialog box and ask to confirm.
 // If not confirmed, re-run the process.

// TODO: Ask user input
let userAge = prompt('What is your age');
console.log('userAge');
console.log(userAge);

// TODO: do same for gender and location
let userGender = prompt('What is your gender');
let userTown = prompt('Which town do you live');

// TODO: Ask for confirmation
let infoCorrect = confirm('Is this' + userAge + 'your name?');
// TODO: Optional: If not confirmed, ask again
if(infoCorrect === false){
  // TODO: rerun
   userAge = prompt('What is your age');
   infoCorrect = confirm('Is the info correct?');
}

})();
