function modifyArr (arr){

  let numberArr = arr.shift().split(' ').map(Number)
  
  
  let command = arr.shift();
  while(command != 'end'){
    let tokens = command.split(' ');
    if(tokens[0] == 'swap'){
      let index1 = Number(tokens[1]);
      let index2 = Number(tokens[2]);
      let temp = numberArr[index1];
      numberArr[index1] = numberArr[index2];
      numberArr[index2] = temp;
    } else if (tokens[0] == 'multiply'){
      let index1 = Number(tokens[1]);
      let index2 = Number(tokens[2]);
      numberArr[index1] *= numberArr[index2];
    } else if (tokens[0] == 'decrease') {
      
      numberArr = numberArr.map(x => x-1)
    }
    command = arr.shift();
  }
  console.log(numberArr.join(', '))
 }

modifyArr( [
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
])