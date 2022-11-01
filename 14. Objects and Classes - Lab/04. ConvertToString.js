function convertToString (name, lastName, hairColor){

    let person = {
        name,
        lastName,
        hairColor
    }

    let assString = JSON.stringify(person);
    console.log(assString)
}
convertToString('George',
'Jones',
'Brown')