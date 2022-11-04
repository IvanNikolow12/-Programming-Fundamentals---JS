function songs(arr){
    let numberOfSongs = arr.shift();
    let typeOfList = arr.pop()
    // create a class;
    class Song {
        constructor(typeList, nameSong, time){
            this.typeList = typeList;
            this.nameSong = nameSong;
            this.time = time;
        }
    }
    for (const element of arr) {
        let [type, name, time] = element.split('_'); 
        let song = new Song(type, name, time);
     if(type == typeOfList || typeOfList == "all"){
        console.log(name)
     }
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
    songs([4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater'])
        songs([2,
            'like_Replay_3:15',
            'ban_Photoshop_3:48',
            'all'])

