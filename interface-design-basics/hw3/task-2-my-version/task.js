const words = [
  'bob', 'awesome', 'netology', 'hello', 'kitty',
  'rock', 'youtube', 'popcorn', 'cinema', 'love', 'javascript',
  'боб', 'крутотень', 'нетология', 'привет', 'котёнок', 'скала',
  'ютуб', 'попкорн', 'кинематограф', 'любовь', 'яваскрипт'
]

const codesData = {
  '65': ['a', 'ф'], '66': ['b', 'и'], '67': ['c', 'с'], '68': ['d', 'в'], '69': ['e', 'у'], 
  '70': ['f', 'а'], '71': ['g', 'п'], '72': ['h', 'р'], '73': ['i', 'ш'], '74': ['j', 'о'], 
  '75': ['k', 'л'], '76': ['l', 'д'], '77': ['m', 'ь'], '78': ['n', 'т'], '79': ['o', 'щ'], 
  '80': ['p', 'з'], '81': ['q', 'й'], '82': ['r', 'к'], '83': ['s', 'ы'], '84': ['t', 'е'], 
  '85': ['u', 'г'], '86': ['v', 'м'], '87': ['w', 'ц'], '88': ['x', 'ч'], '89': ['y', 'н'], 
  '90': ['z', 'я'], '192': ['`', 'ё'], '219': ['[', 'х'], '221': [']', 'ъ'], '186': [';', 'ж'],
  '222': ["'", 'э'], '188': [',', 'б'], '190': ['.', 'ю'], '32': ' '
}

let symbolIndex = 0
let phraseLength = 0

const startBtn = document.querySelector('.start-btn')
startBtn.addEventListener('click', play)
window.addEventListener('keyup', checkSymbol)


function getPhrase() {
  const wordsQuantity = Math.floor(Math.random() * 2) + 1
  let index = Math.floor(Math.random() * words.length)
  let word = words[index]
  if (wordsQuantity == 2) {
    index = Math.floor(Math.random() * words.length)
    word += ' ' + words[index]
  }
  phraseLength = word.length
  return word.split('')
}

function showNewPhrase() {
  stat = gameStatus()
  if (stat != 'continue') {
    gameOver(stat)
  } 
  const wordPlace = document.querySelector('.word')
  let phrase = ''
  for (symbol of getPhrase()) {
    phrase += `<span class="symbol">${symbol}</span>`
  }
  wordPlace.innerHTML = phrase
  const currentSymbol = document.querySelectorAll('.symbol')[0]
  currentSymbol.className = 'symbol current-symbol'
  document.querySelector('.timer').textContent = phraseLength
}

function launchTimer() { 
  const timer = document.querySelector('.timer')
  const correctSymbols = document.querySelectorAll('.correct-symbol')
  setTimeout(function setTimer() {
    timer.textContent <= 3 ? timer.className = 'timer red' : timer.className = 'timer'
    if (timer.textContent == 0) {
      document.querySelector('.wrong-words-counter').textContent++
      setTimeout(showNewPhrase, 1000)
      setTimeout(setTimer, 1000)
    } else {
      timer.textContent--
      setTimeout(setTimer, 1000)
    }  
  }, 1000)
}

function checkSymbol(event) {
  if (startBtn.className == 'start-btn') {
    return
  }
  let currentSymbol = document.querySelector('.current-symbol').textContent
  if (codesData[event.keyCode].includes(currentSymbol)) {
    document.querySelector('.current-symbol').className = 'symbol correct-symbol'
    goNextSymbol()
  } else {
    document.querySelector('.wrong-words-counter').textContent++
    document.querySelector('.current-symbol').className = 'symbol current-symbol wrong-symbol'
    symbolIndex = 0
    setTimeout(showNewPhrase, 500)
  }
}

function goNextSymbol() {
  symbolIndex++
  if (symbolIndex == phraseLength) {
    symbolIndex = 0
    document.querySelector('.right-words-counter').textContent++
    setTimeout(showNewPhrase, 500)
  } else {
    const allSymbols = document.querySelectorAll('.symbol')
    allSymbols[symbolIndex].className = 'symbol current-symbol'
  }
}

function gameStatus() {
  if (document.querySelector('.right-words-counter').textContent >= 10) {
    return 'winner'
  } else if (document.querySelector('.wrong-words-counter').textContent >= 3) {
    return 'loser'
  } else {
    return 'continue'
  }
}

function gameOver(stat) {
  stat == 'winner' ? alert('Поздравляем! Вы победили!') : alert('Вы проиграли!')
  location.reload()
}

function play() {
  startBtn.className = 'start-btn_hide'
  document.querySelector('.timer_hide').className = 'timer'
  document.querySelector('.stats_hide').classList = 'stats'
  showNewPhrase()
  launchTimer()
}

