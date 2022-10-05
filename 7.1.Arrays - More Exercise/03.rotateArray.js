function rotateArray(arr){
    let rotateCounter = arr.pop()
    for(let i = 0; i < rotateCounter; i++){
        let lastElement = arr.pop();
        let currentElement = arr.unshift(lastElement);
    }
    console.log(arr.join(' '))
}
rotateArray(['1', '2', '3', '4', '2'])
 rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])