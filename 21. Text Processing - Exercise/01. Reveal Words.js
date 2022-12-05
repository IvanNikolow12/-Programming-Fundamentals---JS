function revealWords (words, text) {

    words = words.split(', ')

    for (const word of words) {
        let starsStr = '*'.repeat(word.length)
        text = text.replace(starsStr, word)
    }
    console.log(text);

}
revealWords('great',
'softuni is ***** place for learning new programming languages')

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')


