function oddEven (num){
    let arr = String(num).split('')
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < arr.length; i++) {
        let n = Number(arr[i])
        if(n % 2 == 0){
            sumEven += n
        } else {
            sumOdd += n
        }
        
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;


}
console.log(oddEven(1000435))
console.log(oddEven(3495892137259234))