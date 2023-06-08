const products = document.querySelectorAll('.product')
const cartProducts = document.querySelector('.cart__products')
const cart = document.querySelector('.cart')
const body = document.querySelector('body')

window.addEventListener('load', e => {
  if (localStorage.getItem('cartProducts')) {
    const productsObj = JSON.parse(localStorage.getItem('cartProducts'))
    if (productsObj) {
      for (let key in productsObj) {
        cartProducts.innerHTML += `
        <div class="cart__product" data-id="${productsObj[key]['id']}">
          <img class="cart__product-image" src="${productsObj[key]['img']}">
          <div class="cart__product-count">${productsObj[key]['count']}</div>
          <div class="cart__product-remove">&times;</div>
        </div>
        `
      } 
    }
    localStorage.removeItem('cartProducts')
    if (document.querySelector('.cart__product')) {
      cart.style.display = 'block'
    }
  }  
})

window.addEventListener('unload', e => {
  const products = document.querySelectorAll('.cart__product')
  let productsObj = {}
  let i = 0
  if (products) {
    for (const product of products) {
      productsObj[product.dataset.id] = {
        id: product.dataset.id,
        img: product.querySelector('img').src,
        count: product.querySelector('.cart__product-count').textContent.trim(),
      }
    }
    localStorage.setItem('cartProducts', JSON.stringify(productsObj))
  }
})

for (const product of products) {
  product.addEventListener('click', e => {
    const quantity = e.target.closest('.product').querySelector('.product__quantity-value')
    if (e.target.textContent.trim() === '+') {
      quantity.textContent++
    } else if (e.target.textContent.trim() === '-') {
      if (quantity.textContent.trim() !== '1') {
        quantity.textContent--
      }
    } else if (e.target.textContent.trim() === 'Добавить в корзину') {
      addProductToCart(e)
    }
  })
}

cart.addEventListener('click', e => {
  if (e.target.className === 'cart__product-remove') {
    e.target.closest('.cart__product').remove()
    console.log(cart.querySelectorAll('.cart__product'))
    if (cart.querySelectorAll('.cart__product').length === 0) {
      cart.style.display = ''
    }
  }
})

function addProductToCart(e) {
  cart.style.display = 'block'
  const cartProduct = cartProducts.querySelector(`[data-id="${e.target.closest('.product').dataset.id}"]`)
  const productImg = e.target.closest('.product').querySelector('img').src
  const productQuantity = e.target.closest('.product').querySelector('.product__quantity-value').textContent
  if (cartProduct) {
    const cartProductQuantity = cartProduct.querySelector('.cart__product-count')
    cartProductQuantity.textContent = +cartProductQuantity.textContent + +productQuantity
  } else {
    cartProducts.innerHTML += `
      <div class="cart__product" data-id="${e.target.closest('.product').dataset.id}">
        <img class="cart__product-image" src="${productImg}">
        <div class="cart__product-count">${productQuantity}</div>
        <div class="cart__product-remove">&times;</div>
      </div>
    `
  }
  getCartProductAnimation(e)
}

function getCartProductAnimation(e) {
  const copyProductImg = e.target.closest('.product').querySelector('img').cloneNode(true)
  copyProductImg.classList.add('product__image_copy')
  const cartProduct = cartProducts.querySelector(`[data-id="${e.target.closest('.product').dataset.id}"]`)
  const startCopyImgCoords = e.target.closest('.product').querySelector('img').getBoundingClientRect()
  const endCopyImgCoords = cartProduct.querySelector('img').getBoundingClientRect()
  body.insertAdjacentElement('afterbegin', copyProductImg)
  
  copyProductImg.style.top = startCopyImgCoords.top + 'px'
  copyProductImg.style.left = startCopyImgCoords.left + 'px'
  
  const stepY = (startCopyImgCoords.top - endCopyImgCoords.top) / 10
  const stepX = (endCopyImgCoords.left - startCopyImgCoords.left) / 10

  let stepCounter = 0

  const moveTimer = setInterval(() => {
    copyProductImg.style.top = parseFloat(copyProductImg.style.top) - stepY + 'px'
    copyProductImg.style.left = parseFloat(copyProductImg.style.left) + stepX + 'px'
    stepCounter++
    if (stepCounter === 10) {
     clearInterval(moveTimer)
     copyProductImg.remove()
    }
  }, 20)
}