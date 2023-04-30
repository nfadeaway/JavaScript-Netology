const fs = require('fs')
const rl = require('readline').createInterface(process.stdin, process.stdout)

function question(q) {
    return new Promise((resolve, reject) => {
        rl.question(q, (answer) => {
            resolve(answer)
        })
    })
}

function appendFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filename, data, 'utf8', (err) => {
            if (err) {
                console.error(err)
                reject()
            }
            resolve()
        })
    })
}

async function guessTheNumber(number) {
    let counter = 0
    while (true) {
        counter++
        console.log('Попытка ', counter)
        let answer = await question('Введите число: ')
        if (answer > number) {
            console.log('Искомое число меньше')
            await appendFile('task3_log.txt', `Попытка ${counter}\n${answer}\nИскомое число меньше\n`)
        } else if (answer < number) {
            console.log('Искомое число больше')
            await appendFile('task3_log.txt', `Попытка ${counter}\n${answer}\nИскомое число больше\n`)
        } else if (answer == number) {
            console.log('Вы угадали! Игра завершена')
            console.log(`Количество попыток: ${counter}`)
            rl.close()
            await appendFile('task3_log.txt', `Попытка ${counter}\n${answer}\nВы угадали! Игра завершена\nКоличество попыток: ${counter}\n`)
            break
        }
    }
}

guessTheNumber(55)
