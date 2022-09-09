function gramophone (input){
    let bandName = input[0];
    let albumName = input[1];
    let songName = input[2];

    let durotationOfSong = albumName.length * bandName.length * songName.length / 2;
    let rotationFirst = 0;
    for ( let i = 1; i <= durotationOfSong; i += 2.5){
        rotationFirst++;
    }
    console.log(`The plate was rotated ${rotationFirst} times.`)
}
gramophone(['Black Sabbath', 'Paranoid', 'War Pigs'])
gramophone(['Rammstein', 'Sehnsucht', 'Engel'])