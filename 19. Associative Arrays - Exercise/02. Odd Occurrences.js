function oddOccur (input) {
    let arr = input.split(' ');

    let myMap = new Map();

    for (let str of arr) {
        str = str.toLowerCase();
        if(!myMap.has(str)){
            myMap.set(str, 0)
        }
            myMap.set(str, myMap.get(str) + 1);
 
    }


    let keys = Array.from(myMap.keys())
    .filter(x => myMap.get(x) % 2 !== 0)
    .join(' ')
    console.log(keys)
}
oddOccur('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')