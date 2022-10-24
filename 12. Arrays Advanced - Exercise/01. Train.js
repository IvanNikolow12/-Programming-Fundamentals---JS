function train(arr) {

        let countWagons = arr.shift().split(' ').map(Number);
        let maxCapacityEachWagon = Number(arr.shift());
        let commands = arr; 
        for(let i = 0; i < arr.length; i++){
            let isAdd = arr[i].split(' ').includes('Add');
            if(isAdd){
                let newWagon = arr[i].split(' ')[1];
                countWagons.push(Number(newWagon))
            } else {
                let n = Number(arr[i])
                for(let j = 0; j < countWagons.length; j++){
                    if(countWagons[j] + n <= maxCapacityEachWagon){
                        countWagons[j] += n
                        break;
                    }
                }
            }
            
        }
       return countWagons.join(' ');
}
console.log(train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]));
