function solve (city){
    for (let key of Object.keys(city)) {
        let value = city[key];
        console.log(`${key} -> ${value}`)
    }
}
let input = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
solve(input)
