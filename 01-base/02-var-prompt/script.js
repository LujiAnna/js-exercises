/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by Anna
 * started at 24/06/2021
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // var & prompt

// Ask the name of the user

// window.prompt() instructs the browser to display a dialog with an optional message
 // prompting the user to input some text, and to wait until the user either submits
  // the text or cancels the dialog.
let name = prompt('What is your name?');

// and display in the dialog box the following welcome message : Hello, [name] !.
alert(`Hello, ${name} !`);

})();
