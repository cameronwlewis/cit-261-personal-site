"use strict";

var accessToken = '';

function data_test() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            accessToken = this.responseText;
        }
    };
    xhttp.open("GET", "http://localhost:3000/data_test", true);
    xhttp.send();
}

// put code here that searches playlists, and see if it works!


function testSpotify() {
    var spotify = new SpotifyWebApi();
    spotify.setAccessToken(accessToken);

    spotify.searchPlaylists('pop', { limit: 1 }, function (err, data) {

        if (err) console.error(err);else {
            console.log('Pop Playlist: ', data);
            var playlist = data.playlists.items[0].name;
            console.log(playlist);
        }
    });
}
//# sourceMappingURL=test.js.map