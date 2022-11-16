function computerStore (input){

    let costumer = input.pop()
    let allPrice = input.map(Number)
    let priceWithOutTax = 0;
    for (const price of allPrice) {
        if(price > 0) {
            priceWithOutTax += price;
        } else {
            console.log(`Invalid price!`)
        }
    }
    let taxes = priceWithOutTax * 0.2;
    let priceWithTaxes = priceWithOutTax + taxes;

    if(costumer === 'special'){
        priceWithTaxes *= 0.9;
    }
    if(priceWithTaxes === 0) {
        console.log(`Invalid order!`)
    } else {
        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${priceWithOutTax.toFixed(2)}$`)
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log(`-----------`)
        console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`)
    }
}
computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ]))

    // computerStore(([
    //     '1023', 
    //     '15', 
    //     '-20',
    //     '-5.50',
    //     '450', 
    //     '20', 
    //     '17.66', 
    //     '19.30', 'regular'
    //     ]))
        // computerStore(([
        //     'regular'
        //     ]))