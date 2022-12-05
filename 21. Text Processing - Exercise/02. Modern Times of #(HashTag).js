function moderTimes(text){

let pattern = /#(?<word>[A-Za-z]+)/g;

let matched = pattern.exec(text);

while(matched != null) {
    console.log(matched[1]);
    matched = pattern.exec(text);
    }
}
moderTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')


/*
function moderTimes (input){

    input = input.split(' ')

    for (const el of input) {
        if (el.includes('#') && el.length > 1){
            let isSpecial = false;
            for (const char of el) {
                if(char.charCodeAt() >= 65 || char.charCodeAt() <= 90 && char.charCodeAt() >= 97 || char.charCodeAt() <= 122) {
                    isSpecial = true;
                    break;
                }
            }
            if (isSpecial) {
                let arr = el. split('')
                arr.shift()
                console.log(arr.join(''))
            }
        }
    }
}
moderTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
*/
