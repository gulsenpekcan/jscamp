// 1000'e kadar olan asal sayıları listeler.

function primeNumbers() {
    let primeNumbers = []
    console.log("Asal sayılar: ")
    for (let i = 1; i < 1000; i++) {
        if (isNumberPrime(i)) {
            primeNumbers.push(i)
        }
    }
    console.log(primeNumbers)
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

primeNumbers()