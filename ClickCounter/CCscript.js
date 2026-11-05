let display = document.getElementById("display");
let counterAdd = document.getElementById("counterAdd");
let counterMinus = document.getElementById("counterMinus");
let counterReset = document.getElementById("reset");

let counter = 0;

counterAdd.addEventListener("click", function () {
    counter++;
    display.textContent = counter;
});

counterMinus.addEventListener("click", function() {
    counter--;
    display.textContent = counter;
});

counterReset.addEventListener("click", function() {
    counter = 0;
    display.textContent = counter;
});
