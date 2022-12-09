function hardWord(text){
    
  
    let textArr = text[0].split(' ');
    let words = text[1]
    let charArr = [];
    for (let el of textArr) {
        if (el.includes('_')){
             if(el.includes('.') || el.includes(',')){
                charArr = el.split('')
                charArr.pop();
                el = charArr.join('')   
             }
            for (const char of words) {
                if(char.length === el.length){
                    let findedWord = char;
                    text[0] = text[0].replace(el, findedWord);
                }
            }
        }
    }
console.log(text[0])
}
hardWord([`Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. 
My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. 
Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.`,
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])


