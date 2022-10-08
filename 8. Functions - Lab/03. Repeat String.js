function repeatString(str, n){
    let result = [];
    for(let i = 0; i < n; i++){
        result.push(str);
    }
    console.log(result.join(''))
}
repeatString('abc', 3)
repeatString('String', 2)