/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 15/06/2021
 */


(function() {

// get current time
let time = new Date();
console.log(time);
let hour = time.getHours();
console.log(hour);

// TODO: grab button element
let display = document.getElementById("target").innerHTML = "new-value";
// TODO: Set an event listener

if( hour < 18){
    // console.log('Hello');
    document.getElementById('target').innerHTML = 'Hello';
} else {
    // console.log('Good evening');
    document.getElementById('target').innerHTML = 'Good evening';
}

// TODO: Change content value

    // 01. text according to the hour
// to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

//1. user opens page
addEventListener('DOMContentLoaded', function(){
    // 2. DOM collects current time using inbuilt function

})();
