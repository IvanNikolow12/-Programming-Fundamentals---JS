function rounding(num1 , presicion){
    if (presicion > 15){
        presicion = 15;
    }
 num1 = parseFloat(num1.toFixed(presicion));
console.log(num1)
}
rounding(3.1415926535897932384626433832795, 2)