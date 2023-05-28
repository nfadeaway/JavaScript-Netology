for (let fontBtn of document.querySelectorAll('.font-size')) {
  fontBtn.addEventListener('click', switchFontSize)
}

for (let colorBtn of document.querySelector('.book__control_color').querySelectorAll('.color')) {
  colorBtn.addEventListener('click', switchFontColor)
}

for (let bgcolorBtn of document.querySelector('.book__control_background').querySelectorAll('.color')) {
  bgcolorBtn.addEventListener('click', switchBgColor)
}

window.addEventListener('load', setBookContentSettings)

function switchFontSize(event) {
  document.querySelector('.font-size_active').classList.remove('font-size_active') 
  this.classList.add('font-size_active')
  setBookContentSettings()
  event.preventDefault()
}

function switchFontColor(event) {
  document.querySelector('.book__control_color').querySelector('.color_active').classList.remove('color_active') 
  this.classList.add('color_active')
  setBookContentSettings()
  event.preventDefault()
}

function switchBgColor(event) {
  document.querySelector('.book__control_background').querySelector('.color_active').classList.remove('color_active') 
  this.classList.add('color_active')
  setBookContentSettings()
  event.preventDefault()
}

function setBookContentSettings() {
  const sizes = {
    'undefined': '',
    'small': ' book_fs-small',    
    'big': ' book_fs-big',
  }
  const fontColors = {
    'black': ' book_color-black',
    'gray': ' book_color-gray',
    'whitesmoke': ' book_color-whitesmoke',
  }
  const bgColors = {
    'black': ' book_bg-black',
    'gray': ' book_bg-gray',
    'white': ' book_bg-white',
  }
  const size = document.querySelector('.font-size_active').dataset.size
  const fontColor = document.querySelector('.book__control_color').querySelector('.color_active').dataset.textColor
  const bgColor = document.querySelector('.book__control_background').querySelector('.color_active').dataset.bgColor
  const contentSettings = `book${sizes[size]}${fontColors[fontColor]}${bgColors[bgColor]}`
  document.querySelector('.book').className = contentSettings
}