/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by Anna
 * started at 24/06/2021
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// (function() {

    // your code here

    // 01. Change Background Color on Click of a button

    //  For each button, when clicked change the background color of the page to
    // red, green, yellow, blue from specific colored buttons

// Alt1: Change only happens in js, & using functions. Using onclick method
// TODO: select the button to watch

// TODO: wait for (check for) button clicks
document.getElementById("red").onclick = function() {
    red();
    };
    
    function red() {
    // document.getElementById("para").style.color = "blue";
    
    // TODO: change the background color of the page
    document.body.style.backgroundColor = "red";
    }
    
    // Alt2: Change only happens in js, and no function used
    document.getElementById("green").onclick = function() {
      document.body.style.backgroundColor = "green";
    };
    
    // Alt3: Change happens in html and js file, with function
    const yellowButton = document.getElementById('yellow');

    function yellow() {
    document.body.style.backgroundColor = "yellow";
    };

    yellowButton.addEventListener('click', yellow);
    
    // Alt4: Using click event & addEventListener method
    const blueButton = document.getElementById('blue');
    
    blueButton.addEventListener('click', event => {
      document.body.style.backgroundColor = "blue";
    });
    
    // })();
    
