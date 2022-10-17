function factorialDivision (n1, n2){
    let project = 1;
    for(let i = 1; i < n1; i++){
        project *= i;
    }
    let result = n1 * project / n2;
    console.log(result.toFixed(2))
}
factorialDivision (5, 2)
factorialDivision(6, 2)
