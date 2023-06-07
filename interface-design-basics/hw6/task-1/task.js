const haveTooltip = document.querySelectorAll('.has-tooltip')

for (const hasTooltip of haveTooltip) {
  hasTooltip.addEventListener('click', getTooltip)
}

function getTooltip(event) {
  const tooltip = document.querySelector('.tooltip')
  let textTooltip = undefined
  if (tooltip) {
    textTooltip = tooltip.textContent
    tooltip.remove()
  }
  if (textTooltip !== this.title) {
    displayTooltip(this)
  }
  event.preventDefault()
}

function displayTooltip(place) {
  const placeCoords = place.getBoundingClientRect()
  place.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active">${place.title}</div>`)
  const activeTooltip = document.querySelector('.tooltip_active')
  const positions = ['top', 'right', 'bottom', 'left'] 
  const position = positions[Math.floor(Math.random() * positions.length)]
  const tooltipCoords = {
    'top': [placeCoords.left, placeCoords.top - activeTooltip.offsetHeight],
    'right': [placeCoords.right, placeCoords.top],
    'bottom': [placeCoords.left, placeCoords.bottom],
    'left': [placeCoords.left - activeTooltip.offsetWidth, placeCoords.top],
  }
  activeTooltip.dataset.position = position
  activeTooltip.style.left = tooltipCoords[position][0] + 'px'
  activeTooltip.style.top = tooltipCoords[position][1] + 'px'
}
