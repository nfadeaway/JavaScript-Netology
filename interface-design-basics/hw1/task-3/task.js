const dead = document.getElementById('dead')
const lost = document.getElementById('lost')
const holes = document.querySelectorAll('.hole')

function resetGame(status) {
  alert(status)
  dead.textContent = 0
  lost.textContent = 0
}

for (let hole of holes) {
  hole.onclick = function() {
    if (hole.className.includes('hole_has-mole')) {
      dead.textContent = +dead.textContent + 1
      if (dead.textContent == 10) {
        resetGame('Победа!')
      }
    } else {
      lost.textContent = +lost.textContent + 1
      if (lost.textContent == 5) {
        resetGame('Вы проиграли!')
      }
    }
  }
}