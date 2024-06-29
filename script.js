let default_size = 16;
const container = document.querySelector(".grid");


function initializeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    for (let i = 0; i < (size * size); i++) {
        const cell = document.createElement("div");
        cell.style.backgroundColor = "bisque";
        container.insertAdjacentElement("beforeend", cell);
    }
}


initializeGrid(default_size)


function changeSize(input) {
    if(input >= 2 && input <= 128) {
        initializeGrid(input);
    } else {
        alert("invalid amount!")
    }
}