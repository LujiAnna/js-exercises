/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by Anna
 * started at 24/06/2021
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here


//1. user opens page
  addEventListener('DOMContentLoaded', function(){
    // 2. DOM collects current time using inbuilt function
      
    // testing
      let time = 12;
    
      // fetch-get current time
      time = new Date().getHours() ;
      console.log(time);
    

      // 02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
    // before 17h30
    // console.log(new Date().getHours().toString() + 'h'+ new Date().getMinutes()): // '12h33'
    
     // fetch-get current time
     time1 = +((new Date().getHours().toString() + new Date().getMinutes()))  ;
     console.log(time1);
    
    if(time1 < +1730) {
      document.getElementById('target').innerHTML = 'Hello';
    } else {
      document.getElementById('target').innerHTML = 'Good evening';
    }
    
      })

})();
