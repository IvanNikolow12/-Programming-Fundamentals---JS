function companyUsers (input){

    let companyObj = {};
    for(let tokens of input){
        let [companyName, employeeName] = tokens.split(' -> ');

        if(!companyObj.hasOwnProperty(companyName)){
            companyObj[companyName] = [];
        }
        if(!companyObj.hasOwnProperty(employeeName)){
            companyObj[companyName].push(employeeName);
        }
        
    }
    let sorted = Object.entries(companyObj)
    .sort((a, b) => a[0].localeCompare(b[0]))
    for (let element of sorted) {
        console.log(element[0]);
        let set = new Set (element[1]);
        for (const num of set) {
            console.log(`-- ${num}`)
        }
    }
   
}
// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
//     ])

    companyUsers([
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
        ])