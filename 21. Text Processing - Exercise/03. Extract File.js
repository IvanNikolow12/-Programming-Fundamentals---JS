function extractFiles(input){
    let text = input.split(' ')
    let firstPattern = /[\\](?<name>[A-Za-z]+)[.](?<extension>[a-z]+)/g;

    let matched = firstPattern.exec(text);
    while(matched!= null){
        console.log(`File name: ${matched[1]}`);
        console.log(`File extension: ${matched[2]}`)
        matched = firstPattern.exec(text);
    }
}
extractFiles('C:\\Internal\\training-internal\\Template.pptx')
extractFiles('C:\\Projects\\Data-Structures\\LinkedList.cs')