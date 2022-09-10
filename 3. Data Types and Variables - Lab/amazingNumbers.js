function amazingNumbers(input){
    let numAsString = "" + input;
    let sum = 0;

    for(i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);
    }
    let sumAsString = "" + sum
    
    let result = sumAsString.includes('9');

    if(result){
        console.log(`${numAsString} Amazing? ${result}`)
    } else {
        console.log(`${numAsString} Amazing? ${result}`)
    }

}
amazingNumbers(1233)
amazingNumbers(999)