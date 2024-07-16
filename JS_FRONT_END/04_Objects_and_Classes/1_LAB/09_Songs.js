function solve(songs = []) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        printName () {
            console.log(this.name);
        }
    }

    const songType = songs[songs.length - 1];
    const songsArr = songs.slice(1, songs.length - 1);

    let searchedSongs = [];

    for (const entry of songsArr) {
        let [typeList, name, time] = entry.split('_');
        let song = new Song(typeList, name, time);
        searchedSongs.push(song);
    }

    if (songType === 'all') {
        for (const song of searchedSongs) {
            song.printName();
        }
    } else {
        for (const song of searchedSongs) {
            if (songType === song['typeList']) {
                song.printName();
            }
        }
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)