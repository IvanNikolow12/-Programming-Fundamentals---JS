function printAndSum(num1 , num2){
    let line = "";
    let sum = 0;
for(let i = num1; i <= num2; i++){
    sum += i;
    line += i + " ";
    
    
}
console.log(line)
console.log(`Sum: ${sum}`)

}
printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)