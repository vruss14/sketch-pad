const container = document.getElementById('container');
const sketchWrapper = document.getElementById('sketch-pad-wrapper');
let activeColor = 'blue';

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
      event.target.setAttribute('style', `background-color: ${activeColor}`);
    })
})

// Resets the grid to give the user an opportunity to create a new drawing

document.getElementById('reset').addEventListener('click', resetGrid);

function resetGrid(){
    document.querySelectorAll('.square').forEach(square => {
        square.setAttribute('style', 'background-color: white;');
    })
}

