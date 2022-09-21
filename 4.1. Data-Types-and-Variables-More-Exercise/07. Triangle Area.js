function triangleArea (a, b, c){
    let s = Number((a + b + c) / 2)
    let result = Math.sqrt(s*(s - a)*(s - b)*(s - c));
    console.log(result)
}
triangleArea(2, 3.5, 4)