function travelTime (input){

    let travelObj = {};

    for (const line of input) {
        let [country, town, price] = line.split(' > ');
        Number(price);

        if(!travelObj.hasOwnProperty(country)){
            travelObj[country] = {};
        }
        if(!travelObj.hasOwnProperty(town)){
            travelObj[country][town] = price;
        }
        let oldPrice = travelObj[country][town];

        if(oldPrice > price){
            travelObj[country][town] = price;
        }
    }


    let sorted = Object.keys(travelObj).sort((a, b) => a.localeCompare(b));

    for (const country of sorted) {
        console.log(`${country} -> ${cityPrice(travelObj[country])}`)
    }
    function cityPrice(obj) {
        let result = [];
        for (const key of Object.keys(obj)) {
            result.push(`${key} -> ${obj[key]}`);
        }
        return result.join(' ');
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])