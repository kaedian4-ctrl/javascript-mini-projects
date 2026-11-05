let display = document.getElementById("display");
let counterAdd = document.getElementById("counterAdd");
let counterMinus = document.getElementById("counterMinus");

let counter = 0;

counterAdd.addEventListener("click", function () {
    counter++
    display.textContent = counter
});

counterMinus.addEventListener("click", function() {
    counter--
    display.textContent = counter
});
