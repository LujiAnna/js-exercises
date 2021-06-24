/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 15/06/2021
 */


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
});

})();
