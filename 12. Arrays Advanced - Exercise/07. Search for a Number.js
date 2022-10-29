function searchForNumber(arr1, arr2){

    let [elementsTake, elementsDelete, searchedElement] = arr2;
    let taked = arr1.splice(0, elementsTake);
        // taked.splice(0, elementsDelete);
    // let finded = taked.includes(searchedElement);
    let counter = 0;
    for(let i = 0; i < taked.length; i++){
        let element = taked[i];
        if(element === searchedElement){
            counter++;
    }
    }
    console.log(`Number ${searchedElement} occurs ${counter} times.`) 
}
searchForNumber([3, 3, 3, 2, 3, 4, 7, 9, 12, 3, 3,  1, 6],
    [9, 2, 3])