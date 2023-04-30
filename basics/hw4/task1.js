function getPasswordChecker(password) {
    return function(enteredPass) {
        return password == enteredPass
    }
}

// let checkPass = getPasswordChecker(2)
// console.log(checkPass(1))
// console.log(checkPass(2))
// console.log(checkPass(3))
// console.log(checkPass(4))
