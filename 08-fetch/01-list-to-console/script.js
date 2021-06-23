/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // TODO: 1. Grab API from file:///Users/annaikoki/Desktop/soft%20dev/js/js-exercises/js-exercises/_shared/api.json 
    // TODO: Error. Turn the link into https localhost by opening the json file from editor to get to server/port :http://127.0.0.1:5500/_shared/api.json; 

// a. Try to use the AJAX framework
    //     const xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function() {
//   const myObj = JSON.parse(this.responseText);
// //   document.getElementById("demo").innerHTML = myObj.name;
// }
// xmlhttp.open("GET", "http://127.0.0.1:5500/_shared/api.json");
// xmlhttp.send();
// console.log(myObj);

// b. Try to use fetch !recommended
// const fetchResponsePromise = fetch('http://127.0.0.1:5500/_shared/api.json');
// console.log(fetchResponsePromise);

    // TODO: 2. Fetch JSON and log into console
    // TODO: TypeError: Failed to execute 'json' on 'Response': body stream already read

    const myDom = document.querySelector('body');

(function(){
    fetch('http://127.0.0.1:5500/_shared/api.json')
        .then((response)=>{
        //    console.log('hello world'); 
           console.log(response); 
        //    console.log(response.json()); //TypeError: Failed to execute 'json' on 'Response': body stream already read
            return response.json();
            // console.log(response.json())
        })
        .then((data)=>{
            // console.log('hey yo!');
            console.log(data); // displays an array of objects

        })
        
        // .then(function(response) {
        //     let objectURL = URL.createObjectURL(response);
        //     myImage.src = objectURL;

        // .then((response)=>{
        //     let objectURL = URL.createObjectURL(response);
        //     //  myDom.innerHTML = objectURL;
        //     console.log(objectURL);
        // })
}());



    // TODO: 3. Access REST API from domain server port
    // http://127.0.0.1:5500/_shared/api.json'

    // TODO: 4. click on the button, use the fetch function and following the JSON object, retrieve the list of X-Men and display it in the console.
    let btnX = document.getElementById('run');
    btnX.addEventListener('click', display);

    function display(){
        fetch('http://127.0.0.1:5500/_shared/api.json')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            // console.log(data); // displays an array of objects

// iterate array : data.heroes
let array = data.heroes;

// Here's 2 different ways
for (let index = 0; index < array.length; index++) {
//   console.log(array[index]);

// for (let index in array) {
//   console.log(array[index]);

// iterate object
// let object = array[index];
//   for (const property in object) {
//       console.log(`${property}: ${object[property]}`);
// }

// print name 
// console.log(array[index].name);

// OR
console.log(data.heroes[index].name);


}


// }


// const object = { a: 1, b: 2, c: 3 };

// // iterate object
// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }


        })}

    // TODO: 5. Read about API, setTimeOut function, fetch function and AJAX, Promises, Async/Await from W3
})()
