function maxNumber(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
       for (let j = i + 1; j < array.length; j++) {
        if(array[i] <= array[j]){
            isBigger = false;
            break;
        }
    }
        if(isBigger){
            result.push(array[i])
       }
    }
    
    console.log(result.join(' '))
}
maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])