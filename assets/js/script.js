const container = document.getElementById('container');
const sketchWrapper = document.getElementById('sketch-pad-wrapper');

// Creates an initial blank grid based on browser dimensions

function createGrid() {
    const numSquares = (sketchWrapper.offsetWidth * sketchWrapper.offsetHeight) / 100

    for(i=0; i<numSquares; i++) {
        let div = document.createElement('div');
        div.classList.add('square')
        container.appendChild(div);
    }
}

createGrid();

// Listens for when the user mouses over particular squares in the grid; creates the drawing

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', event => {
      event.target.classList.add('filled')
    })
})

// Resets the grid to give the user an opportunity to create a new drawing

document.getElementById('reset').addEventListener('click', resetGrid);

function resetGrid(){
    document.querySelectorAll('.square').forEach(square => {
        square.classList.remove('filled');
    })
}