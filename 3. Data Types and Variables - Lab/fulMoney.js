function fulMoney(input){
    let distance = Number(input[0]);
    let pasengers = Number(input[1]);
    let pricePerLiter = Number(input[2]);

    let neededFuelPer100km = 7;
    for (let i = 1; i <= pasengers; i++){
        neededFuelPer100km += 0.1;
    }
    let currectFuel = (neededFuelPer100km / 100);
    let neededFuelForTrip = currectFuel * distance;
    let moneyNeeded = pricePerLiter * neededFuelForTrip;
    console.log(`Needed money for that trip is ${moneyNeeded.toFixed(3)} lv.`)
}
fulMoney([260, 9, 2.49])
//fulMoney([90, 14, 2.88])