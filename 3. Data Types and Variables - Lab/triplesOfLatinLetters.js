function triplesOfLatinLetters(input){
let letter = input;


for(let a = 1; a <= letter; a++){
    for(let b = 1; b <= letter; b++){
        for(let c = 1; c <= letter; c++){
           console.log(`${a}${b}${c}`);
        }
    }
}

}
triplesOfLatinLetters([3])