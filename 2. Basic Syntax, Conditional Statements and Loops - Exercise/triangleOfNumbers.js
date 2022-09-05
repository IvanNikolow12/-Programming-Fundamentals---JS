function triangleOfNumbers(num){
    let line = "";
    for (let i = 1; i <= num; i ++){
        let line = "";
        for(let j = 1; j <= i; j++){
            line += i + " ";
        }
        console.log(line)
    }
}
triangleOfNumbers(5)