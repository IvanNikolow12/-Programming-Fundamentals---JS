function magicMatrix(arr) {
    

  let column = [[4, 5, 6], [6, 5, 4], [5, 5, 5]];

  for(let i = 0; i < column.length; i++){

    let row = column[i];

    //  console.log(`column ${row}`);

    let sumOfRow = 0;

    let elementOfRow = 0;
      for (let j = 0; j < row.length; j++) {

        let element = row[j];

        elementOfRow = row[i];

         sumOfRow += element

        }      
        console.log(sumOfRow)
      }
      

}
magicMatrix([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
