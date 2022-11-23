function storage (input){

    let storages = {};

    for (let line of input){
        let [product, count] = line.split(' ');
        count = Number(count);

        if(storages.hasOwnProperty(product)) {
            storages[product] += count;
        } else {
            storages[product] = count;
        }
    }

    for (let product in storages) {
        console.log(`${product} -> ${storages[product]}`)
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])