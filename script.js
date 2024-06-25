const size = 16;

const container = document.querySelector(".container");
container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
console.log(`repeat(16, 1fr)`);



for (let i = 0; i < (size * size); i++) {
    const gridElement = document.createElement("div");
    gridElement.style.backgroundColor = "blue";
    container.insertAdjacentElement("beforeend", gridElement);
}
