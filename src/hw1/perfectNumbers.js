//1000'e kadar olan tüm mükemmel sayıları listeler

function findPerfectNumbers() {
    let perfectNumbers = []
    console.log("Mükemmel sayılar: ")
    for (let i = 1; i < 1000; i++) {
        if (findSumOfDivisions(i) == i) {
            perfectNumbers.push(i)
        }
    }
    console.log(perfectNumbers)
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

findPerfectNumbers()