function centuriesToMinutes (input){
    let centures = Number(input[0]);
    let years = centures * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centures} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}
centuriesToMinutes([1])