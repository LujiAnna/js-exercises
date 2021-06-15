/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by Anna@BeCode
 * started at 15/06/2021
 */


(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // TODO: Click button
    // button tag: <button type="button" id="run">Run the script</button>
    var btnClicked = document.getElementById("run");
    // console.log(btnClicked);

    // TODO: Display fourth item
    // Add event listener to button
    btnClicked.addEventListener("click", fruitsPrint);

    // Function to print fruits on console
    function fruitsPrint() {
      console.log(fruits[3]);
    }

})();
