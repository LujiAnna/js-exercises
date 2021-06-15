/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by Anna@BeCode
 * started at 15/06/2018
 */

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // Transform the array fruits: 
    // TODO: remove the first
    console.log(fruits.shift());

    // TODO: remove the last element
    console.log(fruits.pop());

    // TODO: add an element "banana" at the start of the array
    console.log(fruits.unshift("banana"));
    console.log(fruits);

    // TODO: add an element "kiwi" at the end.
    const newFruits = fruits.push('kiwi');
    console.log(newFruits);
    console.log(fruits);
})();
