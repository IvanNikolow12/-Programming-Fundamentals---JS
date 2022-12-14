function bar (input){

    input.pop();
    
    let totalIncome = 0;
    let currentSum = 0;
    
    input.forEach((line) => {
        let pattern = /%([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^|$%.]*\|([0-9]+)\|[^|$%.]*?([0-9]+\.?[0-9]*)\$/g
        let match = pattern.exec(line);
        if (match){
            currentSum = Number(match[3]) * Number(match[4]);
            console.log(`${match[1]}: ${match[2]} - ${currentSum.toFixed(2)}`)
            totalIncome += currentSum;
            
        }
        
    });
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
// bar (['%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift'])
    bar(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])
