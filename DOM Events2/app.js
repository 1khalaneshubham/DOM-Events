// let btn = document.querySelector('button');
// console.dir(btn);
// @1
// btn.onclick = function() {
    // console.log("button was clicked");
    // alert("button was clicked");
// };

// @2
// function sayHello() {
    // alert("Hello!");
// }

// btn.onclick = sayHello;

let btns = document.querySelectorAll('button');

for(btn of btns){
    btn.onclick = sayHello;
}

function sayHello() {
    alert("Hello!");
}
