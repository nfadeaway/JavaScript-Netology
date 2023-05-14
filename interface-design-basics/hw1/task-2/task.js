const clickerCounter = document.getElementById('clicker__counter')
const cookieImg = document.getElementById('cookie')
const clickerSpeed = document.getElementById('clicker__speed')
const originalImgWidth = document.getElementById('cookie').width
let startTime = new Date()

cookieImg.onclick = function() {
  cookieImg.width = ++clickerCounter.textContent % 2 ? 220 : 200;
  let endTime = new Date()
  clickerSpeed.textContent = (1 / (endTime - startTime) * 1000).toFixed(2)
  startTime = endTime
}