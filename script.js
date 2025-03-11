const fortunes = [
    "A new opportunity is on the horizon—be ready to seize it!",
    "Luck is on your side today. Trust your instincts!",
    "Your hard work will soon pay off in an unexpected way.",
    "Go with the flow, and you’ll find yourself exactly where you need to be.",
    "A quiet moment will bring you the answer you seek.",
    "A creative idea will spark a breakthrough for you soon.",
    "Someone appreciates you more than you realize.",
    "Patience will bring greater rewards than rushing into action.",
    "Stay focused—the goal you’ve been working toward is within reach.",
    "Change is coming, but it will lead to something even better."
];

console.log();

function HandleFortuneMessages() {
    let fortuneDiv = document.getElementById("fortune-msg");
    let newMessage = `<h1 id="fortune-msg-txt"> ${fortunes[Math.floor(Math.random() * fortunes.length)]} </h1>`;
    fortuneDiv.innerHTML = newMessage;
}

function HandleFortuneMsgColor(color) {
    let fortuneMsg = document.querySelector("#fortune-msg-txt");
    fortuneMsg.style.color = color; // Apply the selected color to the text
}
function HandleFortuneMsgBorderColor(color) {
    let fortuneMsg = document.querySelector("#fortune-msg");
    fortuneMsg.style.borderColor = color; // Apply the selected color to the text
}

function HandleFortuneBgColor(color) {
    let fortuneMsg = document.querySelector("#fortune-msg");
    fortuneMsg.style.backgroundColor = color; // Apply the selected color to the text
}

function HandleFortuneFontStyle(style) {
    let fortuneMsg = document.querySelector("#fortune-msg-txt");
    fortuneMsg.style.fontFamily = style;
    console.log(style);
}



let time = 0;
let interval;

function startTimer() {
    if (!interval) {
        interval = setInterval(() => {
            if (time < 30) {
                time += 3;
                document.getElementById("display").innerText = time + "s";
            } else {
                clearInterval(interval);
                interval = null;
            }
        }, 3000);
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    time = 0;
    document.getElementById("display").innerText = "0s";
}

document.addEventListener("DOMContentLoaded", loadTasks)

function loadTasks() {
    let taskList = document.getElementsByClassName("todos")[0];
    taskList.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(tasks);
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.classList.add("todo");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTask(index));

        let span = document.createElement("span");
        span.textContent = task.task;
        if (task.completed) span.classList.add("completed");

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    })
}

function addTask() {

    let currentKey = parseInt(localStorage.getItem("key"), 10) || 0;
    let todoInput = document.getElementsByClassName("todo-input")[0];
    let todoList = document.getElementsByClassName("todos")[0];
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.push({
        key: currentKey,
        task: todoInput.value,
        completed: false
    })
    currentKey += 1;
    localStorage.setItem("tasks", JSON.stringify(tasks))
    localStorage.setItem("key", currentKey);
    todoList.innerHTML += `<li class="todo"> ${todoInput.value} </li><hr>`
}

function toggleTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}


HandleFortuneMessages();