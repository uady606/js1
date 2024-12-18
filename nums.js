const arr=[1,2,3,44,5,343]

for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    let isPrime = isPrimeNumber(number);
    if(isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is not a prime number`);
    } 
}m

function isPrimeNumber(number) {
    for(let i = 2; i<number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}


