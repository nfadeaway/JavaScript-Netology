const fs = require('fs')
const rl = require('readline').createInterface(process.stdin, process.stdout)

const number = 55
let counter = 0

function guessTheNumber() {
    counter++
    console.log('Попытка ', counter)
    rl.question('Введите число: ', (answer) => {
        if (answer > number) {
            console.log('Искомое число меньше')
            fs.appendFile('task2_log.txt', `Попытка ${counter}\n${answer}\nИскомое число меньше\n`, 'utf8', (err) => {
                if (err) {
                  console.error(err)
                  return
                }
              });
        } else if (answer < number) {
            console.log('Искомое число больше')
            fs.appendFile('task2_log.txt', `Попытка ${counter}\n${answer}\nИскомое число больше\n`, 'utf8', (err) => {
                if (err) {
                  console.error(err)
                  return
                }
              });
        } else if (answer == number) {
            console.log('Вы угадали! Игра завершена')
            console.log(`Количество попыток: ${counter}`)
            rl.close()
            fs.appendFile('task2_log.txt', `Попытка ${counter}\n${answer}\nВы угадали! Игра завершена\nКоличество попыток: ${counter}\n`, 'utf8', (err) => {
                if (err) {
                  console.error(err)
                  return
                }
              });
            return
        }
        guessTheNumber()
    })
}

guessTheNumber()
