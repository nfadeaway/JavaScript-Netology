let goods = [
    {
        id: 1,
        name: 'Шапка',
        description: 'Шапка вязаная',
        sizes: ['x', 'xl', 'xxl'],
        price: 50, 
        available: true,
    },
    {
        id: 2,
        name: 'Варежки',
        description: 'Варежки вязаные',
        sizes: ['x'],
        price: 25, 
        available: true,
    },
    {
        id: 3,
        name: 'Кофта',
        description: 'Кофта зимняя',
        sizes: ['xl', 'xxl'],
        price: 100, 
        available: false,
    },
    {
        id: 4,
        name: 'Штаны',
        description: 'Штаны джинсовые',
        sizes: ['x', 'xl', 'xxl'],
        price: 150, 
        available: true,
    },
    {
        id: 5,
        name: 'Куртка',
        description: 'Куртка зимняя',
        sizes: ['x', 'xl', 'xxl'],
        price: 200, 
        available: true,
    },
]

let basket = [
    {
        good: goods[0].id,
        amount: 2,
    },
    {
        good: goods[4].id,
        amount: 1,
    },
]


function addGoodToBasket(goodId, quantity) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].good == goodId) {
            basket[i].amount += quantity
            console.log('Количество выбранного товара в корзине увеличено')
            return
        }
    }
    for (let i = 0; i < goods.length; i++) {
        if (goods[i].id == goodId) {
            basket.push({good: goods[i].id, amount: quantity})
            console.log('Новый товар добавлен в корзину')
            return
        }
    }
    console.log('Товар с таким ID не найден')   
}

function deleteGoodFromBasket(goodId) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].good == goodId) {
            basket.splice(i, 1)
            console.log('Товар успешно удалён из корзины')
            return
        }
    }
}

function clearBasket() {
    basket.splice(0, basket.length)
    console.log('Корзина очищена')
}

function getTotal() {
    let totalSumm = 0
    let totalAmount = 0    
    for (let i = 0; i < basket.length; i++) {
        for (let j = 0; j < goods.length; j++) {
            if (basket[i].good == goods[j].id) {
                totalSumm += basket[i].amount * goods[j].price
                totalAmount += basket[i].amount
            }
        }
    }
    return {totalAmount: totalAmount, totalSumm: totalSumm}
}



addGoodToBasket(2, 3)
addGoodToBasket(1, 2)
addGoodToBasket(7, 2)
console.log(basket)

console.log(getTotal())

deleteGoodFromBasket(5)
console.log(basket)

clearBasket()
console.log(basket)