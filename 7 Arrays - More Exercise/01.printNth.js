function printNth (arr){
    let n = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        n = arr[i];
    }
    for (let j = 0; j < arr.length - 1; j++) {
        if(j % n == 0){
            result.push(arr[j])
        }
        
    }
    console.log(result.join(' '))
}
printNth(['5', '20', '31', '4', '20', '2'])
printNth(['dsa', 'asd', 'test', 'test', '2'])
printNth(['1', '2', '3', '4', '5', '6'])