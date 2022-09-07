function nextDay(arr){

    let year = Number(arr[0]);
    let month = Number(arr[1]);
    let day = Number(arr[2]);

    if(day >= 30){
        month += 1;
        day = 1
    } else {
        day += 1
    }
    if(month > 12){
        year += 1
        month = 1
    }
    
    console.log(`${year}-${month}-${day}`)
}
nextDay([2011, 10, 13])