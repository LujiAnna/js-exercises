/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by Anna@BeCode
 * started at 12/06/2021
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let value1 = +document.getElementById("op-one").value;
        let value2 = +document.getElementById("op-two").value;
        console.log(value1 + value2)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let value1 = +document.getElementById("op-one").value;
        let value2 = +document.getElementById("op-two").value;
        console.log(value1 - value2)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let value1 = +document.getElementById("op-one").value;
        let value2 = +document.getElementById("op-two").value;
        console.log(value1 * value2)
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let value1 = +document.getElementById("op-one").value;
        let value2 = +document.getElementById("op-two").value;
        console.log(value1 / value2)
    });
})();