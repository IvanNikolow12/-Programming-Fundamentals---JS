function sumEvenNumbers (nums){
    let sum = 0;
    let arrLength = nums.length
    
    for(let i = 0; i < arrLength; i++){
        nums[i];
        if(nums[i] % 2 == 0){
            sum += Number(nums[i]);
        }
        
    }
    console.log(sum)
}
sumEvenNumbers(['1','2','3','4','5','6'])
sumEvenNumbers(['3','5','7','9'])
sumEvenNumbers(['2','4','6','8','10'])