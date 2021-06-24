/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let btnColor = document.getElementById('run');
    console.log(btnColor);
    btnColor.addEventListener('click', changeColor);

    let inputColor = document.getElementById('color');
    console.log(inputColor);

    // does not work
    let valueColor = inputColor.value;
    console.log(valueColor);
    
    function changeColor(){
        console.log(inputColor);
        console.log(valueColor); // can not read color
        document.body.style.backgroundColor = document.getElementById('color').value;
    }

})();
