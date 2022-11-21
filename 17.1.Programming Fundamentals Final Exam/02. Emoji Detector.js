function emoji (input){

    let text = input[0];
    let pattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g;
    let digitPattern = /\d/g

    let matchDigit = text.match(digitPattern);
    matchDigit = matchDigit.map(Number)

    let coolSomething = matchDigit.reduce((a,b) => a * b)
    
    let matchEmoji = text.match(pattern);

    console.log(`Cool threshold: ${coolSomething}`);
    console.log(`${matchEmoji.length} emojis found in the text. The cool ones are:`);

    for (const emoji of matchEmoji) {
        let word = emoji.slice(2, -2);
        let cooFactor = 0;
        
        for(let i = 0; i < word.length; i++){
            cooFactor += word.charCodeAt(i)
        }
        if(cooFactor > coolSomething){
            console.log(emoji)
        }
    }
}
emoji (["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])

emoji((["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]))
emoji((["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]))