const container = document.getElementById('container');

// Creates an initial blank grid

for(i=0; i<64; i++) {
    let div = document.createElement('div');
    div.classList.add('square')
    container.appendChild(div);
}

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