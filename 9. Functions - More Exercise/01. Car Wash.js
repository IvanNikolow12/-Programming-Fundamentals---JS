function carWash (arr){
let soap = 10;
let water = 1.2;
let vacuumCleaner = 1.25;
let mud = 0.9;
let result = 0;

for(let i = 0; i < arr.length; i++){
    let command = arr[i];
    if(command === "soap"){
        result += soap;
    } else if (command === 'water'){
        result *= water;
    } else if (command === "vacuum cleaner"){
        result *= vacuumCleaner;
    } else if (command === 'mud'){
        result *= mud;
    }
}
console.log(`The car is ${result.toFixed(2)}% clean.`)
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])