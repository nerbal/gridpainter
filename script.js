let default_size = 16;
let color = "black";
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const blackPen = document.getElementById("black");
const whitePen = document.getElementById("white");
const rainbowPen = document.getElementById("rainbow");
const erasor = document.getElementById("erasor");

blackPen.addEventListener("click", function(){setColor("black")});
whitePen.addEventListener("click", function(){setColor("white")});
rainbowPen.addEventListener("click", function(){setColor("rainbow")});
erasor.addEventListener("click", function(){setColor("bisque")});

const reset = document.querySelector(".reset");
reset.addEventListener("click", resetGrid);

function initializeGrid(size) {
    const container = document.querySelector(".grid");
    const grid = container.querySelectorAll("div");
    grid.forEach((div) => div.remove())
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    for (let i = 0; i < (size * size); i++) {
        const cell = document.createElement("div");
        cell.style.backgroundColor = "bisque";
        cell.addEventListener("mouseover", changeColor);
        container.insertAdjacentElement("beforeend", cell);
    }
}

function resetGrid() {
    const container = document.querySelector(".grid");
    const grid = container.querySelectorAll("div");
    grid.forEach((div) => (div.style.backgroundColor = "bisque"))
}

function changeSize(input) {
    if(input >= 16 && input <= 128) {
        initializeGrid(input);
    } else {
        alert("invalid amount!")
    }
}

function setColor(choice){
    color = choice;
}

function changeColor(e){
    if (e.type === "mouseover" && mouseDown) {
        if (color === "rainbow") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

window.onload = () => {
    initializeGrid(default_size)
}
