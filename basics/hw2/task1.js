function getSimpleNumbers(n) {
    let simpleNumbers = []
    let j = 1
    let flag = true
    while (simpleNumbers.length < n) {
        j++
        for (let k = 2; k <= j; k++) {
            if (j % k === 0 && k !== j) {
                console.log(j, 'не подходит')
                flag = false
                break
            }
        }
        if (flag == true) {
            console.log(j, 'подходит, добавляем в массив')
            simpleNumbers.push(j)
        } else {
            flag = true
        }
    }
    return simpleNumbers
}
        
console.log(getSimpleNumbers(process.argv[2]))
