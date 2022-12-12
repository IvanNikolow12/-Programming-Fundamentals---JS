function matchAllNames ([input]){
let patern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

let result = patern.exec(input);
let myArr = [];
while (result != null){
    myArr.push(result);
    result = patern.exec(input);
}
console.log(myArr.join(' '));

}
matchAllNames(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov'])