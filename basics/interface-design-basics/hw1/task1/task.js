const timer = document.getElementById('timer')


// Решение №1
// 
// const timerIntervalFunction = setInterval(() => {
//   if (timer.textContent == 0) {
//     clearInterval(timerIntervalFunction)
//     alert('Вы победили в конкурсе')
//   } else {
//     timer.textContent = Number(timer.textContent) - 1
//   }
// }, 1000)


// Решение №2 с дополнениями
const timerIntervalFunction = setInterval(() => {
  if (timer.textContent == '00:00:00') {
    clearInterval(timerIntervalFunction)
    alert('Вы победили в конкурсе')
    location.assign('file.doc')
  } else {
    let hh = Number(timer.textContent.split(':')[0])
    let mm = Number(timer.textContent.split(':')[1])
    let ss = Number(timer.textContent.split(':')[2])
    let actualTime = new Date
    actualTime.setHours(hh, mm, ss - 1, 0)
    hh = actualTime.getHours().toString().padStart(2, '0')
    mm = actualTime.getMinutes().toString().padStart(2, '0')
    ss = actualTime.getSeconds().toString().padStart(2, '0')
    timer.textContent = hh + ':' + mm + ':' + ss
  }
}, 1000)