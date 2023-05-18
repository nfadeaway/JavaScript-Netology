const sliderItems = Array.from(document.querySelectorAll('.slider__item'))
let currentSlideIndex = 0
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'))
sliderDots[currentSlideIndex].className = 'slider__dot slider__dot_active'
const prevSliderArrow = document.querySelector('.slider__arrow_prev')
const nextSliderArrow = document.querySelector('.slider__arrow_next')


prevSliderArrow.onclick = function() {
  switchSlide('prev')
}

nextSliderArrow.onclick = function() {
  switchSlide('next')
}

sliderDots.forEach(function(dot, i) {
  dot.onclick = function() {
    switchSlideOnDot(i)
  }
})

function switchSlide(direction) {
  hideSlide(currentSlideIndex)
  if (direction == 'next') {
    currentSlideIndex = currentSlideIndex == sliderItems.length - 1 ? 0 : ++currentSlideIndex
  } else  {
    currentSlideIndex = currentSlideIndex - 1 < 0 ? sliderItems.length - 1 : --currentSlideIndex
  }
  showSlide(currentSlideIndex)
}

function switchSlideOnDot(dotIndex) {
  hideSlide(currentSlideIndex)
  currentSlideIndex = dotIndex
  showSlide(currentSlideIndex)
}

function hideSlide(index) {
  sliderItems[index].className = 'slider__item'
  sliderDots[index].className = 'slider__dot'
}

function showSlide(index) {
  sliderItems[index].className = 'slider__item slider__item_active'
  sliderDots[index].className = 'slider__dot slider__dot_active'
}