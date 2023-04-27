class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id
        this.name = name
        this.description = description
        this.sizes = sizes
        this.price = price
        this.available = available
    }
    setAvailable(availableStatus) {
        this.available = availableStatus
    }
}

class GoodList {
    #goods
    
    constructor (goods, filter, sortPrice, sortDir) {
        this.#goods = goods
        this.filter = filter
        this.sortPrice = sortPrice
        this.sortDir = sortDir
    }

    add(good) {
        this.#goods.push(good)
    }

    get list() {
        if (this.sortPrice == true) {
            if (this.sortDir == true) {
                return this.#goods
                        .filter(good => good.available === true)
                        .filter(good => good.name.match(this.filter))
                        .sort((good1, good2) => good1.price - good2.price)
            }
            else {
                return this.#goods
                        .filter(good => good.available === true)
                        .filter(good => good.name.match(this.filter))
                        .sort((good1, good2) => good2.price - good1.price)
            }
        }
        else {
            return this.#goods
            .filter(good => good.available == true)
            .filter(good => good.name.match(this.filter))
        }
    }

    remove(id) {
        for (let i = 0; i < this.#goods.length; i++) {
            if (this.#goods[i].id == id) {
                this.#goods.splice(i, 1)
                return
            }
        }
    }
}

class BasketGood extends Good {
    constructor(id, name, description, sizes, price, available, amount) {
        super(id, name, description, sizes, price, available)
        this.amount = amount
    }
}

class Basket {
    constructor(goods) {
        this.goods = goods
    }
    
    add(good, amount) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id == good.id) {
                this.goods[i].amount += amount
                return
            }
        }
        this.goods.push(good)
        good.amount = amount
        return
    }

    remove(good, amount) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id == good.id) {
                if (this.goods[i].amount - amount <= 0) {
                    this.goods.splice(i, 1)
                } else {
                    this.goods[i].amount -= amount
                }
                return
            }
        }
    }

    clear() {
        this.goods.splice(0, this.goods.length)
    }

    removeUnavailable() {
        this.goods = this.goods.filter(good => good.available === true)
    }

    get totalAmount() {
        return this.goods.reduce((accumulator, good) => accumulator + good.amount * good.price, 0)
    }

    get totalSum() {
        return this.goods.reduce((accumulator, good) => accumulator + good.amount, 0)
    }
}


// let good1 = new Good(1, 'Шапка', 'Шапка вязаная', ['x', 'xl', 'xxl'], 50, true)
// let good2 = new Good(2, 'Варежки', 'Варежки вязаные', ['x'], 25, true)
// let good3 = new Good(3, 'Кофта', 'Кофта зимняя', ['xl', 'xxl'], 100, true)
// let good4 = new Good(4, 'Штаны', 'Штаны джинсовые', ['x', 'xl', 'xxl'], 150, true)
// let good5 = new Good(5, 'Куртка', 'Куртка зимняя', ['x', 'xl', 'xxl'], 200, true)

// good1.setAvailable(false)

// let goodList1 = new GoodList([good1, good2, good3], /а/i, true, true)
// let goodList1 = new GoodList([good1, good2, good3], /а/i, true, false)
// // let goodList1 = new GoodList([good1, good2, good3], /а/i, false, false)
// goodList1.add(good4)
// goodList1.add(good5)
// console.log(goodList1.list)


// let bGood1 = new BasketGood(1, 'Шапка', 'Шапка вязаная', ['x', 'xl', 'xxl'], 50, true, 20)
// let bGood2 = new BasketGood(2, 'Варежки', 'Варежки вязаные', ['x'], 25, true, 30)
// let bGood3 = new BasketGood(3, 'Кофта', 'Кофта зимняя', ['xl', 'xxl'], 100, true, 10)
// let bGood4 = new BasketGood(4, 'Штаны', 'Штаны джинсовые', ['x', 'xl', 'xxl'], 150, false, 15)
// let bGood5 = new BasketGood(5, 'Куртка', 'Куртка зимняя', ['x', 'xl', 'xxl'], 200, false, 7)

// let basket1 = new Basket([bGood1, bGood2, bGood3])
// basket1.add(bGood4, 16)
// basket1.add(bGood5, 7)
// basket1.add(bGood5, 6)
// basket1.remove(bGood5, 14)
// console.log(basket1.goods)
// basket1.removeUnavailable()
// console.log(basket1.goods)
// console.log(basket1.totalAmount)
// console.log(basket1.totalSum)
// basket1.clear()
// console.log(basket1.goods)
