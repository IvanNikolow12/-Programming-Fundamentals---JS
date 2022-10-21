function processOddIndex (arr){
    let filtered = arr.filter(isOddIndex);
    function isOddIndex (value, index){
        return (index % 2 == 1);
    }
    let doubled = filtered.map(x => x * 2);
    let reversed = doubled.reverse();
    console.log(reversed.join(' '))
    
}
processOddIndex([10, 15, 20, 25])
processOddIndex([3, 0, 10, 4, 7, 3])