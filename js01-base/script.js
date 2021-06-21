// 1.1: var & alert


(function() {

   // var & alert

// create a variable
   let test = 'Hello, World';

// Display the variable in in a dialog box (alert box).

// window.alert() instructs the browser to display a dialog with an optional message,
// and to wait until the user dismisses the dialog.
alert(test);

// ==============================

// 1.2: var & prompt

// Ask the name of the user

// window.prompt() instructs the browser to display a dialog with an optional message
 // prompting the user to input some text, and to wait until the user either submits
  // the text or cancels the dialog.
let name = prompt('What is your name?');

// and display in the dialog box the following welcome message : Hello, [name] !.
alert(`Hello, ${name} !`);

// ==============================

// 1.3: prompt & if

// Ask the user if he wants some cake. If yes, congratulate him/her; for any
// other response, say: More cake for me then :p !
let cake = prompt('Do you want some cake?');

// yes
// alert(`Congratulations !`);
if (cake ==='yes' || cake === 'y' || cake === 'ya' || cake === 'sure')
  alert(`Congratulations !`)
else //else alert(`More cake for me then :p !`)
alert(`More cake for me then :p !`);

// ==============================
// 1.4: ASV avec confirmation <- START HERE!!!

// age/gender/town with confirmation

// Ask three questions to the user: his/her Age, Gender, and the Town where he/she lives.
 // Display the collected responses in a dialog box and ask to confirm.
 // If not confirmed, re-run the process.

// TODO: Ask user input
let userAge = prompt('What is your age');
console.log('userAge');
console.log(userAge);

// TODO: do same for t
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
