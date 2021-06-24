/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by Anna
 * started at 24/06/2021
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // prompt & if

// Ask the user if he wants some cake. If yes, congratulate him/her; for any
// other response, say: More cake for me then :p !
let cake = prompt('Do you want some cake?');

// yes
// alert(`Congratulations !`);
if (cake ==='yes' || cake === 'y' || cake === 'ya' || cake === 'sure')
  alert(`Congratulations !`)
else //else alert(`More cake for me then :p !`)
alert(`More cake for me then :p !`);

})();