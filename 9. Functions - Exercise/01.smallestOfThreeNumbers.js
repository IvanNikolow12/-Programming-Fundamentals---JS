function smallestOfThreeNumbers(x, y, z){
let minNum = Number.MAX_SAFE_INTEGER;

    if(x < y && x < z){
        minNum = x;
    } else if (y < x && y < z) {
        minNum = y;
    } else {
        minNum = z
    }
    console.log(minNum)

}
smallestOfThreeNumbers(11, 3, 5)