const items = document.querySelector('#items')
const loader = document.querySelector('#loader')

window.addEventListener('load', getCache)
window.addEventListener('load', getCurrency)

async function getCurrency() {
  url ='https://students.netoservices.ru/nestjs-backend/slow-get-courses'
  const response = await fetch(url)
  if (response.ok) {
    let responseData = await response.json()
    responseData = responseData.response
    const valutes = Object.keys(responseData.Valute)
    loader.classList.remove('loader_active')
    addValutes(responseData, valutes)
  } else {
    alert("Ошибка HTTP: " + response.status)
  }
}

function addValutes(responseData, valutes) {
  if (document.querySelectorAll('.item')) {
    items.innerHTML = ''
  }
  for (const valute of valutes) {
    items.innerHTML += `
      <div class="item">
        <div class="item__code">${responseData.Valute[valute]['CharCode']}</div>
        <div class="item__value">${responseData.Valute[valute]['Value']}</div>
        <div class="item__currency">руб.</div>
      </div>    
    `
  }
}

window.addEventListener('unload', e => {
  const items = document.querySelectorAll('.item')
  let itemsObj = {}
  if (items) {
    for (const item of items) {
      itemsObj[item.querySelector('.item__code').textContent.trim()] = {
        CharCode: item.querySelector('.item__code').textContent.trim(),
        Value: item.querySelector('.item__value').textContent.trim(),
      }
    }
    localStorage.setItem('items', JSON.stringify(itemsObj))
  }
})

function getCache() {
  if (localStorage.getItem('items')) {
    const itemsObj = JSON.parse(localStorage.getItem('items'))
    if (itemsObj) {
      for (const key in itemsObj) {
        items.innerHTML += `
          <div class="item">
            <div class="item__code">${itemsObj[key]['CharCode']}</div>
            <div class="item__value">${itemsObj[key]['Value']}</div>
            <div class="item__currency">руб.</div>
          </div>    
        `
      } 
    }
    localStorage.removeItem('items')
    loader.classList.remove('loader_active')
  }  
}