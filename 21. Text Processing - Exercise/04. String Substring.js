function stringSub (word, text){
    word = word.toLowerCase();
    text = text.toLowerCase();
    let myArr = text.split(' ');
    for (const current of myArr) {
        if(current == word){
            console.log(`${word}`);
            break;
        } else {
            console.log(`${word} not found!`)
            break;
        }
        
    }
}
stringSub('javascript', 'JavaScript is the best programming language')