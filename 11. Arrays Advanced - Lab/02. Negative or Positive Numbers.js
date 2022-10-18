function negativeOrPositive(arr){

    let result = [];

    for(let i = 0; i < arr.length; i++){
        let currentNum = arr[i];
        if(currentNum < 0){
            result.unshift(currentNum);
        } else {
            result.push(currentNum);
        }
    }
    return result.join('\n')
}
console.log(negativeOrPositive([7, -2, 8, 9]))
console.log(negativeOrPositive([3, -2, 0, -1]))