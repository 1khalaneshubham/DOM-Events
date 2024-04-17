// let btn = document.querySelector("button");

// btn.addEventListener("click",function (event) {
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dbclick",function (event) {
//     console.log(event);
//     console.log("Dbclick button clicked");
// });

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
    console.log("key = ",event.key);
    console.log("Code = ",event.code);
    console.log("key was pressed");
});


// inp.addEventListener("keyup", function() {
//     console.log("key was relesed");
// });