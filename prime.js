const num=5;
let isprime=true
for (let i=2;i<num;i++){
    if(num%i==0){
        console.log("given number is not a prime")
        isprime=false
        break;
    }
    if(isprime=true){
        console.log("given number is a prime")
        break;
    }
}