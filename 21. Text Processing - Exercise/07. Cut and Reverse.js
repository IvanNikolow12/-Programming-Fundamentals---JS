function cutAndReverse (input){

    let text = input.split('');
    let newArr = []
    let secArr = [];
    for (let i = 0; i < text.length; i++) {
        let element = text[i];
        if(i < text.length / 2){
            newArr.unshift(element);
        }
        if(i >= text.length / 2){
            secArr.unshift(element)
        }      
    }
    console.log(newArr.join(''))
    console.log(secArr.join(''))
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')