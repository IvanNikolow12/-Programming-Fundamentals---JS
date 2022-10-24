function listOfProducts (arr) {
    let currectList = arr.sort()
    for(let i = 0; i < currectList.length; i++){
         console.log(`${i + 1}.${currectList[i]}`)
    }
}
listOfProducts (["Potatoes", "Tomatoes", "Onions", "Apples"])