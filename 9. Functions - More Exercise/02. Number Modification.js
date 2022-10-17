function numberModificatoin (arr){

    let result = ('' + arr).split('').map(Number)
    
   
   let sum = 0;
   let average = 0;

   for (let i = 0; i < result.length; i++){
       let current = result[i];
       let reduced = result.reduce((a,b) => a + b);
        average = reduced / result.length;
        if (average >= 5){
            console.log(result.join(''))
            break;
        } else {
            result.push(9)
        }
   }
}

numberModificatoin (101)
numberModificatoin(5835)