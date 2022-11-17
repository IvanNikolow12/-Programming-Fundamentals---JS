function activationKey (input){

    let rawActivationKey = input.shift().split('');

    for (const line of input) {
        let command = line.split('>>>').shift();
        if (command === 'Slice') {
            let [command, startIndex, endIndex] = line.split(">>>").map(Number);
            rawActivationKey.splice(startIndex, endIndex - startIndex);
            rawActivationKey = rawActivationKey.join('')
            console.log(rawActivationKey)
        } else if (command === 'Flip') {
            let [command, someCase, startIndex, endIndex] = line.split('>>>');
            Number(startIndex);
            Number(endIndex);
            if (someCase === 'Upper') {
                let token = rawActivationKey.slice(startIndex, endIndex)
                let upperCaseString = token.toUpperCase();
                let keyStr = rawActivationKey;
                rawActivationKey = keyStr.replace(token, upperCaseString)
                console.log(rawActivationKey)
            } else if (someCase === 'Lower') {
                let token = rawActivationKey.slice(startIndex, endIndex)
                let upperCaseString = token.toLowerCase();
                let keyStr = rawActivationKey;
                rawActivationKey = keyStr.replace(token, upperCaseString)
                console.log(rawActivationKey)
            }
        } else if (command === 'Contains') {
            let keyAsStr = rawActivationKey
            let [command, word] = line.split('>>>');
            if (keyAsStr.includes(word)){
                console.log(`${keyAsStr} contains ${word}.`);
            } else {
                console.log(`Substring not found!`)
            }
        } else if (command === 'Generate') {
            console.log(`Your activation key is: ${rawActivationKey}`)
        }
    }
}
activationKey((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]))
// activationKey((["134softsf5ftuni2020rockz42",
// "Slice>>>3>>>7",
// "Contains>>>-rock",
// "Contains>>>-uni-",
// "Contains>>>42",
// "Flip>>>Upper>>>2>>>8",
// "Flip>>>Lower>>>5>>>11",
// "Generate"]))