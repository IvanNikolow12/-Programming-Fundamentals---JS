function order(product, quality){
    let coffee = 1.5;
    let water = 1;
    let coke = 1.4;
    let snacks = 2;
    let result = 0;
    if (product === 'coffee'){
        result = coffee * quality
    } else if (product === "water"){
        result = water * quality;
    } else if (product === "coke"){
        result = coke * quality;
    } else if (product === "snacks"){
        result = snacks * quality;
    }
    console.log(result.toFixed(2))

}
order('water', 5)