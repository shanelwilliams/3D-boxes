const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
  for(let i = 0; i < 4; i += 1) {
    for(let j = 0; j < 4; j += 1) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
        boxesContainer.appendChild(box)
    }
  }  
}

createBoxes()