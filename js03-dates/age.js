/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var btn = document.getElementById('run');
   // console.log(btn);
   btn.addEventListener('click', function(e){
    //  btn.innerHTML = 'hello';
    // grab dates and display from dob-day/dob-month/dob-year input id's

    // date
   //  console.log(document.getElementById('dob-day')); // tag
    var dayElement = document.getElementById('dob-day'); 
   //  console.log(day.value); //1

     // month
   //   console.log(document.getElementById('dob-month')); // tag
     var monthElement = document.getElementById('dob-month'); 
   //   console.log(month.value); //1
    //  Q: how to get month inside value?
   //   console.log(month.innerText); //jan, feb, ...dec
   //   console.log(month.value.innerText); // undefined
   //   console.log(month.value.innerHTML); // undefined
// year
// console.log(document.getElementById('dob-year')); // tag
var yearElement = document.getElementById('dob-year'); 

// console.log(year.value); //1954

// btn.innerHTML = day.value + '/' + month.value + '/' + year.value;

// TODO: make a date object with the current birthdate
let birthday = new Date(yearElement.value, monthElement.value, dayElement.value);         
console.log(birthday);

// TODO: calculate the difference btn now and the birthdate

var ageDifMs = Date.now() - birthday.getTime();
console.log(ageDifMs);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    console.log(ageDate)
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    // TODO: console.log the age
    console.log(age);

   })

})();
 