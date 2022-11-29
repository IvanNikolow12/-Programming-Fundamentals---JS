function partyTime (input) {

    let list = {
        'VIP': [],
        'regular': []
    }

    let guestName = input.shift()
    while(guestName != 'PARTY'){
        let char = guestName[0]
        if(!isNaN(char)){
            list['VIP'].push(guestName);
        } else {
            list['regular'].push(guestName)
        }
       guestName = input.shift()
    }


    input.forEach(guestName => {
        if (list['VIP'].includes(guestName)){
            let i = list['VIP'].indexOf(guestName);
            list['VIP'].splice(i, 1);
        } else if (list['regular'].includes(guestName)){
            let i = list['regular'].indexOf(guestName);
            list['regular'].splice(i, 1); 
        }
    });

    let length = list['VIP'].length + list['regular'].length;
    console.log(length)
    console.log(list['VIP'].join('\n'))
    console.log(list['regular'].join('\n'))
}
// partyTime(['7IK9Yo0h',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc',
// 'tSzE5t0p',
// 'PARTY',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc'
// ])
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])