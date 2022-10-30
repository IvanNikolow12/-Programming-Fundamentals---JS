function personInfo (firsName, lastName, age){

    let personObj = {
        firsName,
        lastName,
        age
    }

    return personObj;
}
console.log(personInfo('Peter', "Pan", "20"))