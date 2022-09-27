function commonElements (arr1, arr2){
    for (let i = 0; i < arr1.length; i++) {
            let elementI = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            let elementJ = arr2[j];
            if(elementJ === elementI){
                console.log(elementJ)
            } 
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])