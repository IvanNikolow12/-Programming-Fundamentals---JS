function passwordReset (input){

    let passString = input.shift();
    let passArr = passString.split('')
    let newArr = [];
    
    
    
    for (let i = 0; i < input.length; i++){
        let command = input[i];
        
            if(command == 'TakeOdd'){
                for (let i = 0; i < passArr.length; i++){
        
                    if (i % 2 === 1) {
                        newArr.push(passArr[i]);
                    }
                }
                console.log(newArr.join(''))
            } else if (command.includes('Cut')) {
                let [operator, index, simbols] = command.split(' ');
                index = Number(index);
                simbols = Number(simbols);
                newArr.splice(index, simbols);
                console.log(newArr.join(''))
            } else if (command.includes('Substitute')){
                let [operator, symbol, newSymbol] = command.split(' ');
                newArr = newArr.join('');
                let code = symbol;
                let pattern = new RegExp(`\\${code}`, `g`);
                let matched = pattern.exec(newArr)
                if(matched){
                    while(matched != null){
                        newArr = newArr.replace(symbol, newSymbol);
                        matched = pattern.exec(newArr)
                    }
                    newArr = newArr.split('')
                    console.log(newArr.join(''))
                } else {
                    console.log(`Nothing to replace!`)
                }
            } else if (command == 'Done') {
                let password = newArr
                
                console.log(`Your password is: ${password}`)
                break;
            }
    }
}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]))
// passwordReset(['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
// 'TakeOdd',
// 'Cut 18 2',
// 'Substitute ! ***',
// 'Substitute ? .!.',
// 'Done'])
// passwordReset(['akjhs-ru23y!8hjkabsfi!jhdfjsi-jfnidjs',
// 'TakeOdd',
// 'Cut 6 2',
// 'Substitute ! ***',
// 'Substitute - .!.',
// 'Done'
// ])