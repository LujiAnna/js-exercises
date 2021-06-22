/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here

    var keys = ``;
    let values = ``;

    function showProps(obj) {
        for (var i in obj) {
          // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
          if (obj.hasOwnProperty(i)) {
            keys += `${i}\n`;
            values += `${obj[i]}\n`;
          }
        }
        console.log('keys are ', keys);
        console.log('values are ',values);
      }

      let display = document.getElementById('run');
      display.addEventListener('click', show)

      function show(){
       showProps(person);
      }
})();
