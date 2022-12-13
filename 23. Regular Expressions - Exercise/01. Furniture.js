function furniture(input){
    
    let moneySpend = 0;
    let items = [];

    let pattern = />>(?<item>[A-Z]+[a-z]*)<<(?<price>[\d]+[.]*[\d]*)[.!](?<count>\d+)/g
    let matched = pattern.exec(input)
    for (let line of input) {
        if(matched){
            while(matched != null){
                matched[2] = Number(matched[2]);
                matched[3] = Number(matched[3]);
                moneySpend += matched[2] * matched[3];
                items.push(matched[1])
                matched = pattern.exec(input);
            }
        }
        if(line == 'Purchase'){
            break;
        }
    }
    console.log(`Bought furniture:`)
    for (const item of items) {
        console.log(`${item}`)
    }
    console.log(`Total money spend: ${moneySpend.toFixed(2)}`)

}
furniture(['>>Sofa<<122.23!63', '>>TV<<300!5', '>Invalid<<11!5', 'Purchase'])