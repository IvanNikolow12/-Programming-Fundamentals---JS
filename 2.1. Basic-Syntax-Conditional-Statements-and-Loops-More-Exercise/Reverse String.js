function reverseString(arr){

    let reversed = arr.toString().split("").reverse()
    console.log(reversed.join(''))
}
reverseString(['Hello'])