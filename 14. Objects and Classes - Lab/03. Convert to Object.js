function convertToObject(objAssString){

    let parsedObj = JSON.parse(objAssString);
    for (const key of Object.keys(parsedObj)) {
        let value = parsedObj[key];
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')


