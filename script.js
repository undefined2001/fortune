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

function HandleFortuneFontStyle(style)
{
    let fortuneMsg = document.querySelector("#fortune-msg-txt");
    console.log(style);
}


function AddTaskToLocalStorage() {
    localStorage.setItem("1", "Hello, World Task");
}


AddTaskToLocalStorage();
HandleFortuneMessages();