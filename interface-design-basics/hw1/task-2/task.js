const clickerCounter = document.getElementById('clicker__counter')
const cookieImg = document.getElementById('cookie')
const clickerSpeed = document.getElementById('clicker__speed')
const originalImgWidth = document.getElementById('cookie').width
let startTime = new Date()


cookieImg.onclick = function() {
  clickerCounter.textContent = +clickerCounter.textContent + 1
  if (cookieImg.width == originalImgWidth) {
    cookieImg.width += 20
  } else {
    cookieImg.width -= 20
  }
  let endTime = new Date()
  clickerSpeed.textContent = (1 / (endTime - startTime) * 1000).toFixed(2)
  startTime = endTime
}
