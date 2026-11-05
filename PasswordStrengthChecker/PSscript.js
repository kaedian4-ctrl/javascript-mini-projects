let password = document.getElementById("password");
let togglePassword = document.getElementById("togglePassword");
let weak = document.getElementById("weak");
let medium = document.getElementById("medium");
let strong = document.getElementById("strong");
let clearPassword = document.getElementById("clearPassword");
let upperCaseCheck = document.getElementById("upperCaseCheck");
let lowerCaseCheck = document.getElementById("lowerCaseCheck");
let numberCheck = document.getElementById("numberCheck");
let symbolCheck = document.getElementById("symbolCheck");
let lengthCheck = document.getElementById("lengthCheck");

function passwordValidation () {
    let score = 0;
    let userPassword = password.value;

    upperCaseCheck.textContent = "❌";
    lowerCaseCheck.textContent = "❌";
    numberCheck.textContent = "❌";
    symbolCheck.textContent = "❌";
    lengthCheck.textContent = "❌";

    let upperCase = /[A-Z]/.test(userPassword);
    let lowerCase = /[a-z]/.test(userPassword);
    let number = /[0-9]/.test(userPassword);
    let symbol = /[^A-Za-z0-9]/.test(userPassword);
    let length = userPassword.length >= 8;

    if (upperCase) {
        upperCaseCheck.textContent = "✅";
        score++;
    }

    if (lowerCase) {
        lowerCaseCheck.textContent = "✅";
        score++;
    }

    if (number) {
        numberCheck.textContent = "✅";
        score++;
    }

    if (symbol) {
        symbolCheck.textContent = "✅";
        score++;
    }

    if (length) {
        lengthCheck.textContent = "✅";
        score++;
    }

    strengthChecker(score);
}

function strengthChecker (score) {
    weak.classList.remove("weak");
    medium.classList.remove("medium");
    strong.classList.remove("strong");

    if (score === 0) {
        return;
    }

    if (score === 5) {
        strong.classList.add("strong");
        medium.classList.add("medium");
        weak.classList.add("weak");
    } else if (score >= 3) {
        medium.classList.add("medium");
        weak.classList.add("weak");
    } else {
        weak.classList.add("weak");
    }
}

password.addEventListener("input", passwordValidation);
togglePassword.addEventListener("click", function() {
    password.type = password.type === "password" ? "text" : "password";
    togglePassword.textContent = password.type === "password" ? "Show" : "Hide";
});

clearPassword.addEventListener("click", function() {
    password.value = "";
    password.type = "password";
    togglePassword.textContent = "Show";
    weak.classList.remove("weak");
    medium.classList.remove("medium");
    strong.classList.remove("strong");
    upperCaseCheck.textContent = "❌";
    lowerCaseCheck.textContent = "❌";
    numberCheck.textContent = "❌";
    symbolCheck.textContent = "❌";
    lengthCheck.textContent = "❌";
});
