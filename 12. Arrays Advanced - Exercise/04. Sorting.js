function sorting(arr){

    let newArr = [];
    let slicedArr = arr.slice()
    let sorted = slicedArr.sort((a, b) => b - a)
    
    for(let i = 0; i < arr.length; i++){
        let element = sorted.shift()
        newArr.push(element)
        sorted.reverse();
    }
   console.log(newArr.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])