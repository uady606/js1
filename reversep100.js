for(let i=100;i>=2;i--){
    const number=i ;
    let isprime = isPrimeNumber(number);
    if(isprime){
        console.log("given num" +i+ "is prime")
    }
 }
function isPrimeNumber(number){
    for(j=2;j<number;j++){
        if(number%j==0){
            return false;
        }
    }
    return true;
}