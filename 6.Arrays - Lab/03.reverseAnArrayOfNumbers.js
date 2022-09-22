function reverseAnArrayOfNumbers (n, arr){
    let partialArr = [];
    for(let i = 0; i < n; i++){
        partialArr.push(arr[i]);
    }
    let newArr = partialArr.reverse()
    console.log(newArr.join(" "))
    
}
reverseAnArrayOfNumbers (3, [10, 20, 30, 40, 50])
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])