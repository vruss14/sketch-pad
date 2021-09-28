const container = document.getElementById('container');

for(i=0; i<64; i++) {
    let div = document.createElement('div');
    div.classList.add('square')
    container.appendChild(div);
}

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', event => {
      event.target.classList.add('filled')
    })
})