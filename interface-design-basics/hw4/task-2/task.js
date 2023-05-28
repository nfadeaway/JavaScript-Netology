function rotateAds() {
  let speed = document.querySelector('.rotator__case_active').dataset.speed
  let curCaseIdx = 0
  const adsArr = Array.from(document.querySelectorAll('.rotator__case'))
  adsArr[curCaseIdx].style.color = document.querySelector('.rotator__case_active').dataset.color
  setTimeout(function rotate() {
    adsArr[curCaseIdx].classList.remove('rotator__case_active')
    if (curCaseIdx == adsArr.length - 1) {
      adsArr[0].classList.add('rotator__case_active')
      curCaseIdx = 0
    } else {
      adsArr[curCaseIdx + 1].classList.add('rotator__case_active')
      curCaseIdx++
    }
    speed = document.querySelector('.rotator__case_active').dataset.speed
    adsArr[curCaseIdx].style.color = document.querySelector('.rotator__case_active').dataset.color
    setTimeout(rotate, speed)
  }, speed)
}

document.addEventListener('DOMContentLoaded', rotateAds)