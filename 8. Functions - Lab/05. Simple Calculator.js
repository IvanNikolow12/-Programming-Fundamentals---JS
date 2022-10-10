function simpleCalc (numOne, numTwo, operator){
    let result = 0;
    if(operator === "add"){
        result = numOne + numTwo
    } else if (operator === "subtract"){
        result = numOne - numTwo
    } else if (operator === "multiply"){
        result = numOne * numTwo
    } else {
        result = numOne / numTwo
    }
    console.log(result)
}
simpleCalc(5, 5, 'multiply')