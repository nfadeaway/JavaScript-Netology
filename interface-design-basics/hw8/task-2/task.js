const subscribeModal = document.querySelector('#subscribe-modal')
const modalCloseBtn = document.querySelector('.modal__close_times')


window.addEventListener('load', () => {
  if (getCookie('subscribeModalShow') !== 'True') {
    subscribeModal.classList.add('modal_active')
  }
})

modalCloseBtn.addEventListener('click', () => {
  subscribeModal.classList.remove('modal_active')
  setCookie('subscribeModalShow', 'True')
})

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

function setCookie(name, value) {
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value)
}