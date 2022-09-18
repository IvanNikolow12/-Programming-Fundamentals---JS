function primeNumberChecker(num){
let isPrimeNum = true;
if(num % 2 == 0 || num % 3 == 0){
    console.log(!isPrimeNum);
} else {
    console.log(isPrimeNum);
}
}
primeNumberChecker(81)