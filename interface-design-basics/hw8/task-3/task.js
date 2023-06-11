const signinCard = document.querySelector('#signin')
const signinBtn = document.querySelector('#signin__btn')
const welcomeTitle = document.querySelector('#welcome')
const card = document.querySelector('.card')

signinBtn.addEventListener('click', getAuth)

card.addEventListener('click', (e) => {
  if (e.target.id === 'signout__btn') {
    logaut()
  }
})

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('userId')) {
    setAuth(localStorage.getItem('userId'))
  }
})

async function getAuth(e) {
  e.preventDefault()
  const formData = new FormData(signin__form)
  if (!formData.get('login') || !formData.get('password')) {
    alert('Заполните все поля!')
    return
  }
  url ='https://students.netoservices.ru/nestjs-backend/auth'
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  })
  if (response.ok) {
    let json = await response.json()
    if (json['success'] === false) {
      alert('Неверный логин/пароль')
    } else {
      setAuth(json['user_id'])
    }
  } else {
    alert("Ошибка HTTP: " + response.status)
  }
}

function setAuth(id) {
  signinCard.classList.remove('signin_active')
  welcomeTitle.classList.add('welcome_active')
  welcomeTitle.querySelector('#user_id').textContent = id
  localStorage.setItem('userId', id)
}

function logaut() {
  localStorage.removeItem('userId')
  signinCard.querySelector('input[name="login"]').value = ''
  signinCard.querySelector('input[name="password"]').value = ''
  welcomeTitle.classList.remove('welcome_active')
  signinCard.classList.add('signin_active')
}