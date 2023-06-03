answersArr = [
  'Вы не туда попали',
  'Вы не похожи на умного человека',
  'Закрой это окно, уходи',
  'Моя твоя не понимать',
  'Нам с вами не по пути. Всего наихудшего!',
  'Вот вы написали, а я уже вас ненавижу',
  'А что-то умное вы можете написать?',
  'Мы вас не звали, идите отсюда',
  'Мы закрыты. Для вас.',
]

const chatWidget = document.querySelector('.chat-widget')
const messages = document.querySelector('.chat-widget__messages')
const input = document.querySelector('.chat-widget__input')
const messagesContainer = document.querySelector('.chat-widget__messages-container')
let timerId = null

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active')
})

input.addEventListener('keyup', e => {
  if (e.code === 'Enter' && input.value) {
    addMessage('user', input.value)
    input.value = ''
    addMessage('bot', getBotMessage(answersArr))
    if (timerId === null) {
      timerId = setTimeout(() => {
        addMessage('bot', 'Что молчим?')
        timerId = null 
      }, 30000)
    } else {
      clearTimeout(timerId)
      timerId = null   
    }
  }
})

function addMessage(sender, text) {
  let messageClassList = 'message'  
  if (sender === 'user') {
    messageClassList = 'message message_client'
  }
  messages.innerHTML += `
    <div class="${messageClassList}">
      <div class="message__time">${getCurrentTime()}</div>
      <div class="message__text">${text}</div>
    </div>
  `
  messagesContainer.scrollTop = messagesContainer.scrollHeight

}

function getBotMessage(arr) {
  const botMessage = Math.floor(Math.random() * arr.length)
  return arr[botMessage]
}

function getCurrentTime() {
  const date = new Date()
  return `${date.getHours()}:${date.getMinutes()}`
}