function addAndSubtract(arr){
    let sumOfOldArr = 0;
    let sumOfNewArr = 0;

    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        sumOfOldArr += arr[i];
        
        if(element % 2 == 0){
        arr[i] += i;
        } else {
        arr[i] -= i;
        }
        sumOfNewArr += arr[i];
    }
    console.log(arr)
    console.log(sumOfOldArr)
    console.log(sumOfNewArr)

    // Напишете функция, която променя стойността на нечетни и четни числа в масив от числа.
    // Ако числото е четно - добавете към стойността му позицията на индекса
    // Ако числото е нечетно - извадете от стойността му позицията на индекса
    
    // На първия ред отпечатайте новопроменения масив, на втория ред отпечатайте 
    // сумата на числата от оригиналния масив, на третия ред отпечатайте сумата на 
    // числата от модифицирания масив.
}
addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])