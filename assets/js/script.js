const container = document.getElementById('container');
const sketchWrapper = document.getElementById('sketch-pad-wrapper');
let activeColor = 'blue';
let activeTool = 'pencil';

// Creates an initial blank grid based on browser dimensions

function createGrid() {
    const numSquares = (sketchWrapper.offsetWidth * sketchWrapper.offsetHeight) / 100

    for(i=0; i<numSquares; i++) {
        let div = document.createElement('div');
        div.classList.add('square')
        container.appendChild(div);
    }

    // Creates the color palette by dynamically setting background color based on each div's ID

    document.querySelectorAll('.color-swatch').forEach(color => { 
        color.setAttribute('style', `background-color: ${color.id}`)
    })
}

createGrid();

// Updates the active color the user is drawing with (default is blue)

document.querySelectorAll('.color-swatch').forEach(color => {
    color.addEventListener('click', () => {
      activeColor = color.id;
    })
})

// Listens for when the user mouses over particular squares in the grid; creates the drawing

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', event => {
        if(activeTool === 'pencil') {
            event.target.setAttribute('style', `background-color: ${activeColor}`);
        } else if (activeTool === 'eraser') {
            event.target.setAttribute('style', 'background-color: white;');

        }
    })
})


// Pencil & eraser functionality; determine which tool is active to use in the sketch pad

document.getElementById('pencil-tool').addEventListener('click', activatePencil)

function activatePencil() {
    activeTool = 'pencil';
    updateCursor();
}

document.getElementById('eraser').addEventListener('click', activateEraser);

function activateEraser() {
    activeTool = 'eraser';
    updateCursor();
}

// Updates the cursor with the correct image based on the active tool

function updateCursor() {
    if(activeTool === 'pencil') {
        sketchWrapper.setAttribute('style', 'cursor: url("./assets/images/blue-pencil-cursor.png"), default;');
    } else {
        sketchWrapper.setAttribute('style', 'cursor: url("./assets/images/eraser-vector-cursor.png"), default;')
    }
}

// Resets the grid to give the user an opportunity to create a new drawing

document.getElementById('reset').addEventListener('click', resetGrid);

function resetGrid(){
    document.querySelectorAll('.square').forEach(square => {
        square.setAttribute('style', 'background-color: white;');
    })
}

