for (let i = 1; i <=100; i++) {
    const number = i;
    let isPrime = isPrimeNumber(number);
    if(isPrime) {
        console.log(`${number} is a prime number`);
    } 
}

function isPrimeNumber(number) {
    for(let j = 2; j<number; j++) {
        if(number % j === 0) {
            return false;
        }
    }
    return true;
}