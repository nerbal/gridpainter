let default_size = 16;
const container = document.querySelector(".grid");


function initializeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    for (let i = 0; i < (size * size); i++) {
        const gridElement = document.createElement("div");
        gridElement.style.backgroundColor = "cyan";
        container.insertAdjacentElement("beforeend", gridElement);
    }
}


initializeGrid(default_size)


function changeSize(input) {
    if(input >= 2 && input <= 128) {
        initializeGrid(input);
    }
}