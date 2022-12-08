function repeatingChars (input){

    let text = input.split('');

    let myArr = [];
    for (let i = 0; i < input.length; i++) {
        let el = input[i];
        if(el != input[i - 1]){
            myArr.push(el);
        } 
    }
    console.log(myArr.join(''))

}
repeatingChars('aaaaabbbbbcdddeeeedssaa');
repeatingChars('qqqwerqwecccwd')