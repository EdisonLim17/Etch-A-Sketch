// Creates a grid with side length of size
function createGrid(size){
    const container = document.querySelector(".grid-container");

    for(let i = 0; i < size; i++){
        const row = document.createElement("div");
        row.classList.add("row");
    
        for(let j = 0; j < size; j++){
            const square = document.createElement("div");
            square.classList.add("square");
    
            row.appendChild(square);
        }
    
        container.appendChild(row);
    }
}

// Adds painting effect whenever mouse hovers over a square in the grid
function addHoverEffects(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mousemove", () => {
            square.style.backgroundColor = "blue";
        });

    });
}

// Adds the event listener to the button, to listen for clicks to resize grid
function addResizeButtonFunction(){
    const button = document.querySelector("button");

    button.addEventListener("click", () => {
        //Prompts the user to enter a size for the new grid
        let input = prompt("What size do you want to resize to (Max: 10)?", "10");
        if(!Number.isInteger(parseInt(input)) || parseInt(input) > 100 || parseInt(input) <= 0){
            input = "10";
        }

        let size = parseInt(input);

        //Remove all squares in the grid
        let grid = document.querySelector(".grid-container");
        while(grid.firstChild){
            grid.removeChild(grid.lastChild);
        }
        
        //Refill the grid with new squares, with side length size
        createGrid(size);
        addHoverEffects();
    });
}

//Creates the grid with default size 16
createGrid(16);
addHoverEffects();
addResizeButtonFunction();