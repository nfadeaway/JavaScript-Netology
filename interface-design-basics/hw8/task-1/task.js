const textArea = document.querySelector('#editor')
const deleteBtn = document.querySelector('#clear')

window.addEventListener('load', () => {
  if (localStorage.getItem('text')) {
    textArea.textContent = localStorage.getItem('text')
    localStorage.removeItem('text')
  }
})

window.addEventListener('unload', () => {
  localStorage.setItem('text', textArea.value)
})

deleteBtn.addEventListener('click', () => {
  textArea.value = ''
})