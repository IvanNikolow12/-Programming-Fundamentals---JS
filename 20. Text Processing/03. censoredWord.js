function censoredWord (text, word){

    for (let current of word) {
        let replaced = '*'.repeat(word.length);
        while (text.includes(word)) {
            text = text.replace(word, replaced);
        }
    }
    console.log(text)
}
censoredWord('A small sentence with some words', 'small')