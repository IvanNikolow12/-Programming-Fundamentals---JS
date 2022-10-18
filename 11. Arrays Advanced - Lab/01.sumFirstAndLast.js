function sumFirstAndLast(arr){

    let first = Number(arr[0]);
    let last = Number(arr.pop());

    return first + last
}
console.log(sumFirstAndLast(['20', '30', '40']))