function countString (input, word){

    let text = input.split(', ')
    let pattern = /\bis\b/g;
    let matched = pattern.exec(text);
    let counter = 0;
    while (matched != null){
        counter++;
        matched = pattern.exec(text);
    }
    console.log(counter)
}
countString("This is a word and it also is a sentence",
"is")