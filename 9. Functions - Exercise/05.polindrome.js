function polindrome(arr){
// обхождаме масива
// проверяваме дали първия и последния индекс за еднакви 
// принтираме стринг ако са
    
    let result = '';
   for (let num of arr) {
    let isPolindrome =  "true";
        num = String(num)
        let mid = Math.floor(num.length / 2)
        for (let i = 0; i <= mid; i++) {
            let lastIndex = num.length - 1;
           if(num[i] !== num[lastIndex - i]){
            isPolindrome = "false";
            break;
           }
            
        }
        result += isPolindrome + '\n';
   }
   return result;
}
console.log(polindrome([123,323,421,121]))