function minerTask (input){

    let myObj = {};

  for (let i = 0; i < input.length; i += 2){
    let resourse = input[i];
    let quality = Number(input[i + 1]);

    if(!myObj.hasOwnProperty(resourse)){
        myObj[resourse] = 0;
    }
    myObj[resourse] += quality;
  }

  for ( let item in myObj){
    console.log(`${item} -> ${myObj[item]}`)
  }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])
    minerTask([
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
        ])