const pollTitle = document.querySelector('.poll__title')
const pollAnswers = document.querySelector('.poll__answers')
let id = ''


window.addEventListener('load', getPoll)

pollAnswers.addEventListener('click', e => {
  if (e.target.className === 'poll__answer') {
    const answerIdx = Array.from(document.querySelectorAll('.poll__answer')).indexOf(e.target)
    sendAnswer(answerIdx)
  }
})

async function getPoll() {
  url ='https://students.netoservices.ru/nestjs-backend/poll'
  const response = await fetch(url)
  if (response.ok) {
    let json = await response.json()
    id = json['id']
    showPoll(json)
  } else {
    alert("Ошибка HTTP: " + response.status)
  }
}

function showPoll(json) {
  pollTitle.textContent = json['data']['title']
  for (const answer of json['data']['answers']) {
    pollAnswers.innerHTML += `<button class="poll__answer">${answer}</button>`
  }
}

async function sendAnswer(answerIdx) {
  url =`https://students.netoservices.ru/nestjs-backend/poll?`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: `vote=${id}&answer=${answerIdx}`
  })
  if (response.ok) {
    let json = await response.json()
    alert('Спасибо! Ваш ответ засчитан.')
    showPollResult(json)
  } else {
    alert("Ошибка HTTP: " + response.status)
  }
}

function showPollResult(json) {
  let answersSum = 0
  for (let i = 0; i < json['stat'].length; i++) {
    answersSum += json['stat'][i]['votes']
  }
  pollAnswers.innerHTML = ''
  for (let i = 0; i < json['stat'].length; i++)
    pollAnswers.innerHTML += `
      <div><strong>${json['stat'][i]['answer']}: ${(json['stat'][i]['votes'] / (answersSum / 100)).toFixed(2)}%</strong><div>
    `
}