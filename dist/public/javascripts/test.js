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


function getSpotifyPlaylist() {
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

var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');

var submitImage = document.getElementById('submitImage');
submitImage.addEventListener('click', sendImage);

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = new Image();
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
    document.getElementById('submitImage').style.visibility = 'visible';
}

function sendImage() {}
//# sourceMappingURL=test.js.map