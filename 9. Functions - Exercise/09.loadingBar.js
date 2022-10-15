function loadingBar(n){
let percentIndicator = n / 10;
    let bar = "..........";
    let barArr = bar.split('');
    
if(n === 100){
    console.log(`100% Complete!`);
    console.log(`[%%%%%%%%%%]`);
} else {
    for(let i = 0; i < percentIndicator; i++){
        barArr.pop();
        barArr.unshift('%');
    }
    console.log(`${n}% [${barArr.join('')}]`)
    console.log(`Still loading...`)
}
}
loadingBar(30)