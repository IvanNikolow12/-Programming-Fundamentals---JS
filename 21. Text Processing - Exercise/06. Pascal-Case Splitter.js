function pascalSplit (text){
    let pattern = /[A-Z][a-z]+/g
    let textArr = text.split(', ')
    let matched = pattern.exec(textArr)
    let newArr = [];
    while (matched != null){
        newArr.push(matched);
        matched = pattern.exec(textArr)
    }
    console.log(newArr.join(', '))
}
pascalSplit ('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalSplit('HoldTheDoor')
pascalSplit('ThisIsSoAnnoyingToDo')