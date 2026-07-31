const body = document.getElementById("body");
const h1 = document.getElementById("h1");
const button = document.getElementById("button");
const history = document.getElementById("history"); 

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

let rollCount = 0;

button.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * diceFaces.length);
    
    let rolledDice = diceFaces[randomIndex];
    
    let diceNumber = randomIndex + 1;
    
    body.textContent = rolledDice;
    
    rollCount++;
    
    const li = document.createElement("li");
    li.textContent = `Roll ${rollCount}: ${rolledDice} (${diceNumber})`;
    
    history.appendChild(li);
    
    console.log("Rolled:", rolledDice);
});