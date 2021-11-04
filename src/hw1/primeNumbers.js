function findPrime(...numbers) {
    numbers.map(number => {
        if (isNumberPrime(number)) {
            console.log(number + " sayısı asaldır.")
        } else {
            console.log(number + " sayısı asal değildir.")
        }
    })
}

function isNumberPrime(number) {
    let result = true;
    if (number < 2) result = false;
    if (number == 2) result = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            result = false;
        }
    }
    return result;
}


findPrime(2, 5, 8, 21, 13)
findPrime(1, -1, 3, 5)
