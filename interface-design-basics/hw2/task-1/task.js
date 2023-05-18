const popUp = document.querySelector('#modal_main')
const popUpSuccess = document.querySelector('#modal_success')
const closeBtns = document.querySelectorAll('.modal__close')
const successBtn = document.querySelector('.show-success')

popUp.className = 'modal modal_active'

for (let closeBtn of closeBtns) {
  closeBtn.onclick = function() {
    popUp.className = 'modal'
    popUpSuccess.className ='modal'
  }
}

successBtn.onclick = function() {
  popUp.className = 'modal'
  popUpSuccess.className ='modal modal_active'
}