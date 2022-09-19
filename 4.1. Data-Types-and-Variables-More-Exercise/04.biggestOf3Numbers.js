function biggestOf3Numbers (a, b, c){
    let maxNumber = Number.MIN_SAFE_INTEGER;
    if(a > maxNumber){
        maxNumber = a;
    } 
     if(b > maxNumber){
        maxNumber = b;
    } 
     if (c > maxNumber){
        maxNumber = c
    }
    console.log(maxNumber)
}
biggestOf3Numbers(-2, 7, 3)