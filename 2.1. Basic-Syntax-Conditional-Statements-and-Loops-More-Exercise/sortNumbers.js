function sortNumbers(input){
    
  let sorted = input.sort((a, b) => b - a)

    return sorted.join("\n");


}
console.log(sortNumbers([-2, 1, 3]))