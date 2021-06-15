/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    let input1 = document.getElementById("op-one");
    let input2 = document.getElementById("op-two");

    console.log(input1, input2);

    var performOperation = function(operation) {
        let x = +input1.value;
        let y = +input2.value;
        console.log(x, y);

        switch (operation) {
            case "addition":
                console.log(x + y);
                break;
            case "substraction":
                console.log(value1 - value2);
                break;
            case "multiplication":
                console.log(value1 * value2);
                break;
            case "division":
                console.log(value1 / value2);
                break;
                default:
                    'try again later'

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
