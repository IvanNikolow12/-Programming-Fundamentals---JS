function rigthPlace (input){

    let str = input[0];
    let char = input[1];
    let result = input[2];

    let demo = str.replace('_', char);
    
    if(demo){
        console.log(`Matched`)
    } else {
        console.log(`Not Matched`)
    }
 
}
//rigthPlace (['Str_ng', 'I', 'Strong'])
rigthPlace(['Str_ng', 'i', 'String'])