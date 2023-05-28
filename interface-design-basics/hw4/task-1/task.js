const hiddenBlocks = document.querySelectorAll('.reveal')

function revealeBlock() {
  for (let hiddenBlock of hiddenBlocks) {
    if (document.documentElement.clientHeight > getBottomCoords(hiddenBlock)) {
      hiddenBlock.classList.add('reveal_active')
    }
  }
}

function getBottomCoords(elem) {
  return elem.getBoundingClientRect().bottom
}

document.addEventListener('scroll', revealeBlock)