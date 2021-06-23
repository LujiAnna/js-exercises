/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // TODO: 1. click on the button, get the id from the form
    let inputId = document.getElementById('hero-id');
    console.log(inputId);
    
    btnId = document.getElementById('run');
    btnId.addEventListener('click', grab);

    let targetId = document.getElementById('target');
    console.log(targetId);
    // TODO: error- Returns null when querySelect    
    let name = document.querySelector('.name');
    console.log(name);
    let alterEgo = document.querySelector('.alter-ego');
    console.log(alterEgo);
    let powers = document.querySelector('.powers');
    console.log(powers);


    function grab() {
        console.log(inputId.value);

        // TODO: 2. get the corresponding X-Men from the API 
        fetch('http://127.0.0.1:5500/_shared/api.json')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
          let array = data.heroes;
        //   console.log(array[inputId.value-1].name);
        //   OR
        console.log(data.heroes[inputId.value-1].name);
let ourHero = inputId.value;
       // TODO: 3. display it in the tag whose id is "target". 
       targetId.innerHTML = data.heroes[inputId.value-1].name;
       name.innerHTML = data.heroes[inputId.value-1].name;
        })

    }

    // TODO: 4. Use the tag template to reproduce a suitable html structure.
// TODO: error
    (function(){
        fetch('http://127.0.0.1:5500/_shared/api.json')
            .then((response)=>{
               console.log(response); 
                return response.json();
                // console.log(response.json())
            })
            .then((data)=>{

for (let index = 0; index < data.heroes.length; index++) {
    console.log(data.heroes[index].name);
    name.innerHTML = data.heroes[index].name;
    alterEgo.innerHTML = data.heroes[index].alterEgo;
    powers.innerHTML = data.heroes[index].abilities;
   }
            })

})

})();
