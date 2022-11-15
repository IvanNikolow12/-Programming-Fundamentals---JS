function reception (arr){

  let allStudents = Number(arr.pop());
  let firstEmp = Number(arr.shift());
  let secEmp = Number(arr.shift());
  let thurtEmp = Number(arr.shift());
  let eff = firstEmp + secEmp + thurtEmp;
  let hours = 0;

  while (allStudents > 0 ){
    hours++;
    if(hours % 4 != 0){
      allStudents -= eff;
    }
  }
  console.log(`Time needed: ${hours}h.`)
}
reception(['5','6','4','20'])
reception(['1','2','3','45'])