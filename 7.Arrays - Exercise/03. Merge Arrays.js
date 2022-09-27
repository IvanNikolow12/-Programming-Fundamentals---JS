function mergeArrays(arr1, arr2){
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let elementI = arr1[i];
        if(i % 2 == 0){
            let sum = Number(arr1[i]) + Number(arr2[i]);
            newArr.push(sum)
        } else {
            newArr.push(arr1[i] + arr2[i])
        }
    }
    
    console.log(newArr.join(" - "))

}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])