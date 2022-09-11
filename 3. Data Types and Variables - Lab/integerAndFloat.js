function integerAndFloat(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    let sum = num1 + num2 + num3;
    let convertedSum = Math.trunc(sum);

    if(sum == convertedSum ){
        console.log(`${sum} - Integer`)
    } else {
        console.log(`${sum} - Float`)
    }
}
integerAndFloat([9, 100, 1.1])
integerAndFloat([100, 200, 303])