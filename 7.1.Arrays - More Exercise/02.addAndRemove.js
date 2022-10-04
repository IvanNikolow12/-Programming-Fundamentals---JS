function addAndRemove(arr){
    let command = '';
    let result = [];
    let removedCounter = 0;
    for(let i = 0; i < arr.length; i++){
        command = arr[i];
        if(command === 'add'){
            result.push(i + 1)
        } else if(command === 'remove') {
            result.pop()
            removedCounter++
        }
        
    }
    if(removedCounter > 1){
        console.log('Empty')
    }
    console.log(result.join(' '))
    
}
//addAndRemove(['add', 'add', 'add', 'add'])
//addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])