function cardGame (input) {

    let colorCard = {
        'S': 4, 
        'H': 3, 
        'D': 2, 
        'C': 1
    }
    let cardPower = {
        'J' : 11,
        'Q' : 12,
        'K' : 13,
        'A' : 14
    }
    let player = {};

    for (const line of input) {
        let [name, cards] = line.split(': ')
        cards = cards.split(', ')
    
        if(!player.hasOwnProperty(name)){
            player[name] = [];
        } 
            player[name].push(...cards);
        }
        Object.keys(player).forEach(key => {
            let cardsArr = new Set(player[key])
            let total = 0;
           Array.from(cardsArr).forEach(card => {
                let elements = card.split('');
                let color = elements.pop();
                let cardNumber = elements.join('')
                if(isNaN(cardNumber)) {
                    cardNumber = cardPower[cardNumber];
                } 
                total += colorCard[color] * Number(cardNumber);
                
            });
           player[key] = total;

           console.log(`${key}: ${total}`)
        })
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])