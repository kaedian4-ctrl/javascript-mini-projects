let taskInput = document.getElementById("taskInput");
let taskAdd = document.getElementById("taskAdd");
let all = document.getElementById("all");
let active = document.getElementById("active");
let completed = document.getElementById("completed");
let taskList = document.getElementById("taskList");
let form = document.querySelector("form");
let taskCounter = document.getElementById("taskCounter")
let currentFilter = "all";


function taskCreator (event) {
    event.preventDefault();

    let userInput = taskInput.value.trim()
    taskInput.value = ""

    if (userInput === "") {
        return
    }

    displayTask(userInput)
    updateTaskCounter()
}

function updateTaskCounter () {
    let remainingTasks = 0;
    let tasks = taskList.querySelectorAll(".task");

    tasks.forEach(function(task) {
        let checkbox = task.querySelector("input");
        if (!checkbox.checked) {
            remainingTasks++;
        }
    });

    taskCounter.textContent = remainingTasks;
}

function displayTask(userInput) {
    let taskContainer = document.createElement("div");
    let checkBox = document.createElement("input");
    let taskText = document.createElement("span");
    let deleteButton = document.createElement("button");

    taskContainer.classList.add("task");


    taskText.textContent = userInput;
    checkBox.type = "checkbox";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        taskContainer.remove();
        updateTaskCounter();
    });


    taskContainer.appendChild(checkBox);
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(deleteButton);
    taskList.appendChild(taskContainer);

    checkBox.addEventListener("change", function() {
        if (checkBox.checked) {
            taskText.classList.add("completed");
            filterTasks(currentFilter);
        } else {
            taskText.classList.remove("completed");
            filterTasks(currentFilter);
        }
        updateTaskCounter();
    });
}

function filterTasks(filter) {
    let tasks = taskList.querySelectorAll(".task")

    tasks.forEach(function(task) {
        let checkBox = task.querySelector("input")

        if (filter === "all") {
            task.style.display = "flex";
        } else if (filter === "active") {
            task.style.display = checkBox.checked ? "none" : "flex";
        } else if (filter === "completed") {
            task.style.display = checkBox.checked ? "flex" : "none";
        }


    });
}

all.addEventListener("click", function() {
    filterTasks("all")
    currentFilter = "all";
    all.classList.add("selected")
    active.classList.remove("selected")
    completed.classList.remove("selected")
});

active.addEventListener("click", function() {
    filterTasks("active")
    currentFilter = "active";
    active.classList.add("selected")
    all.classList.remove("selected")
    completed.classList.remove("selected")

   
});

completed.addEventListener("click", function() {
    filterTasks("completed")
    currentFilter = "completed";
    completed.classList.add("selected")
    active.classList.remove("selected")
    all.classList.remove("selected")

});

form.addEventListener("submit", taskCreator);

updateTaskCounter();
