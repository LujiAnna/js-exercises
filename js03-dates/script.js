/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // 01. text according to the hour
// to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

//1. user opens page
  addEventListener('DOMContentLoaded', function(){
// 2. DOM collects current time using inbuilt function
  
// testing
  let time = 12;

  // fetch-get current time
  time = new Date().getHours() ;
  console.log(time);

  // before 18h
  if(time < 18) {
    document.getElementById('target').innerHTML = 'Hello';
  } else {
    document.getElementById('target').innerHTML = 'Good evening';
  }

  // 02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
// before 17h30
// console.log(new Date().getHours().toString() + 'h'+ new Date().getMinutes()): // '12h33'

 // fetch-get current time
 time1 = +((new Date().getHours().toString() + new Date().getMinutes()))  ;
 console.log(time1);

if(time1 < +1730) {
  document.getElementById('target1').innerHTML = 'Hello';
} else {
  document.getElementById('target1').innerHTML = 'Good evening';
}

  })

  // /03-age-by-select/  START HERE!!!



})();
