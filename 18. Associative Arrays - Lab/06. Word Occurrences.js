function wordOcurrence(input){

//    	Create a map
let myMap = new Map();
let words = 0;
// 	    Loop through the elements of the array of words
for(let el of input) {
    if(!myMap.has(el)){
     words = 1;
    } else {
        words = myMap.get(el) + 1;
    }
    myMap.set(el, words);
}
let sorted = Array.from(myMap);
sorted.sort((a, b) => b[1] - a[1]);
// 	    Update the map
// 	    Sort the map by value in descending:
for (let [el, words] of sorted) {
    console.log(`${el} -> ${words} times`)
}
}
wordOcurrence(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])