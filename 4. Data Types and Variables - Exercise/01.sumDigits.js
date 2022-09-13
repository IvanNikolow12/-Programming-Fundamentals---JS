function sumDigits (input){
    let arr = input + "";
    //console.log(arr)
    let sum = 0;
    for ( let i = 0; i < arr.length; i++){
        sum += Number(arr[i]);
        
    }
    console.log(sum)
}
sumDigits(['245678'])
sumDigits([543])