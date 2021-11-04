function areNumbersAmicable(number1, number2) {
    if (findSumOfDivisions(number1) == number2 &&
        findSumOfDivisions(number2) == number1) {
        console.log(number1 + " ve " + number2 + " arkadaş sayıdır.")
    } else {
        console.log(number1 + " ve " + number2 + " arkadaş sayı değildir.")
    }
}

function findSumOfDivisions(number) {
    let divisions = []
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            divisions.push(i)
        }
    }
    return divisions.reduce((num1, num2) => num1 + num2, 0)
}

areNumbersAmicable(220, 284)
areNumbersAmicable(12, 10)
