function adressBook (input){

    let book = {};

    for (let line of input){
        let [name, adress] = line.split(':');
        
        if(book.hasOwnProperty(adress)){
            book[name] = adress;
        } else {
            book[name] = adress;
        }
    }

    let sorted = Object.entries(book);
    sorted.sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];
        return nameA.localeCompare(nameB);
    })

    for (let [name, adress] of sorted) {
        console.log(`${name} -> ${adress}`)
    }
}
adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])